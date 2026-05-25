import { ref } from 'vue'

export function useSignup() {
  const errorMessage = ref('')

  const handleSignup = (event) => {
    errorMessage.value = ''

    if (!event || !event.target) return

    const formElement = event.target
    const data = new FormData(formElement)
    
    const name = data.get('name')?.trim()
    const emailOrPhone = data.get('emailOrPhone')?.trim()
    const password = data.get('password')

    if (!password || password.trim().length < 6) {
      errorMessage.value = 'Password must be at least 6 characters long.'
      return
    }

    if (!emailOrPhone) {
      errorMessage.value = 'Email or Phone Number is required.'
      return
    }

    if (emailOrPhone.includes('@')) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(emailOrPhone)) {
        errorMessage.value = 'Please enter a valid email address (e.g., name@gmail.com).'
        return
      }
    } else {
      const cleanPhone = emailOrPhone.replace(/\D/g, '')
      
      if (cleanPhone.length !== 10) {
        errorMessage.value = 'Phone number must be exactly 10 digits long.'
        return
      }
    }

    if (process.client) {
      try {
        const existingUsers = JSON.parse(localStorage.getItem('registered_users') || '[]')

        const userExists = existingUsers.some(user => user.emailOrPhone === emailOrPhone)
        if (userExists) {
          errorMessage.value = 'An account with this email/phone already exists.'
          return
        }

        existingUsers.push({ name, emailOrPhone, password })
        localStorage.setItem('registered_users', JSON.stringify(existingUsers))

        alert('Account registered successfully!')
        navigateTo('/login')

      } catch (error) {
        errorMessage.value = 'Storage access error.'
      }
    }
  }

  return {
    errorMessage,
    handleSignup
  }
}