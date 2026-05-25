<template>
  <main class="auth-wrapper" id="main-content">
    <div class="auth-banner">
      <img 
        src="/images/s1.png" 
        alt="A smartphone next to a shopping cart with shopping bags" 
        class="side-banner-image"
      />
    </div>
    
    <div class="auth-form-side">
      <div class="form-content-wrapper">
        <h2>Create an account</h2>
        <p class="subtitle">Enter your details below</p>
        
        <p v-if="errorMessage" class="error-msg">{{ errorMessage }}</p>
        
        <form @submit.prevent="handleSignup($event)" aria-label="Sign Up Form">
          <div class="input-group">
            <label for="signup-name" class="sr-only">Full Name</label>
            <input 
              id="signup-name"
              name="name" 
              type="text" 
              placeholder="Name" 
              autocomplete="name" 
              required 
            />
          </div>
          
          <div class="input-group">
            <label for="signup-username" class="sr-only">Email or Phone Number</label>
            <input 
              id="signup-username"
              name="emailOrPhone" 
              type="text" 
              placeholder="Email or Phone Number" 
              autocomplete="username" 
              required 
            />
          </div>
          
          <div class="input-group">
            <label for="signup-password" class="sr-only">Password</label>
            <input 
              id="signup-password"
              name="password" 
              type="password" 
              placeholder="Password" 
              autocomplete="new-password" 
              required 
            />
          </div>

          <button type="submit" class="btn-red full-width">Create Account</button>
          
          <button type="button" class="google-btn full-width" aria-label="Sign up using Google">
            <i class="fa-brands fa-google" aria-hidden="true"></i> Sign up with Google
          </button>
        </form>

        <p class="redirect-txt">
          Already have an account? 
          <NuxtLink to="/login">Log in</NuxtLink>
        </p>
      </div>
    </div>
  </main>
</template>

<script setup>
definePageMeta({
    layout: 'auth-lay'
})

import { useSignup } from '~/auth/useSignup'
const { errorMessage, handleSignup } = useSignup()
</script>

<style scoped>
@import '~/assets/css/auth.css';
</style>