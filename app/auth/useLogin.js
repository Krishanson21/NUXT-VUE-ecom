import { ref } from 'vue'

export function useLogin() {
  const errorMessage = ref('')

  const handleLogin = (event) => {
    errorMessage.value = ''

    if (!event || !event.target) return
    const formElement = event.target
    const data = new FormData(formElement)
    
    const emailOrPhone = data.get('emailOrPhone')?.trim()
    const password = data.get('password')

    if (process.client) {
      try {

        const registeredUsers = JSON.parse(localStorage.getItem('registered_users') || '[]')

        const foundUser = registeredUsers.find(user => user.emailOrPhone === emailOrPhone)


        if (!foundUser || foundUser.password !== password) {
          alert('Invalid Email/Phone or Password. Please try again.')
          return
        }

        localStorage.setItem('active_user_session', JSON.stringify({
          name: foundUser.name,
          emailOrPhone: foundUser.emailOrPhone
        }))

        alert(`Welcome back, ${foundUser.name}!`)
        navigateTo('/') 

      } catch (error) {
        errorMessage.value = 'Error accessing authentication memory.'
      }
    }
  }

  return {
    errorMessage,
    handleLogin
  }
}