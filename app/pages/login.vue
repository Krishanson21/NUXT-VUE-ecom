<template>
  <main class="auth-wrapper" id="main-content">
    <div class="auth-banner">
      <img src="/images/s1.png" alt="Side Banner" class="side-banner-image" />
    </div>

    <div class="auth-form-side">
      <div class="form-content-wrapper">
        <h2>Log in to Exclusive</h2>
        <p class="subtitle">Enter your details below</p>

        <p v-if="errorMessage" class="error-msg">{{ errorMessage }}</p>

        <form @submit.prevent="handleLogin($event)" aria-label="Log In Form">
          <div class="input-group">
            <label for="login-username" class="sr-only">Email or Phone Number</label>
            <input 
              id="login-username" 
              name="emailOrPhone"
              type="text" 
              placeholder="Email or Phone Number" 
              required 
            />
          </div>

          <div class="input-group">
            <label for="login-password" class="sr-only">Password</label>
            <input 
              id="login-password" 
              name="password"
              type="password" 
              placeholder="Password" 
              required 
            />
          </div>

          <div class="action-row">
            <button type="submit" class="btn-red">Log In</button>
            <NuxtLink to="/forgot-password" class="forgot-pass">Forgot Password?</NuxtLink>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script setup>
definePageMeta({
  layout: 'auth-lay'
})

import { useLogin } from '~/auth/useLogin'
const { errorMessage, handleLogin } = useLogin()
</script>

<style scoped>
@import '~/assets/css/auth.css';
</style>