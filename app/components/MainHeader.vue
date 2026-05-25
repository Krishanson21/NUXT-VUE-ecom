<template>
  <div>
    <div class="top-banner" role="complementary" aria-label="Announcement Bar">
      <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="#">ShopNow</a></p>
      <label for="lang-selector" class="sr-only">Select Language</label>
      <select id="lang-selector" class="lang-select">
        <option>English</option>
      </select>
    </div>

    <header class="main-header">
      <div class="header-container">
        <NuxtLink to="/" class="logo" aria-label="Exclusive E-Commerce Home">Exclusive</NuxtLink>
        <nav class="nav-links" aria-label="Main Navigation">
          <NuxtLink to="/" active-class="active">Home</NuxtLink>
          <a href="#">Contact</a>
          <a href="#">About</a>
          <NuxtLink to="/signup" active-class="active">Sign Up</NuxtLink>
        </nav>

        <div class="header-actions">
          <div class="search-box">
            <label for="global-search" class="sr-only">Search Products</label>
            <input id="global-search" type="text" placeholder="What are you looking for?">
            <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
          </div>
          <button class="icon-btn-clear" aria-label="View Wishlist">
            <i class="fa-regular fa-heart" aria-hidden="true"></i>
          </button>
          <NuxtLink to="/cart" class="cart-icon-wrapper" :aria-label="`Shopping Cart, ${cartCount} items`">
            <img src="/images/cart.png" alt="Shopping Cart" class="navbar-cart-img" />
            <span v-if="cartCount > 0" class="cart-badge" aria-hidden="true">{{ cartCount }}</span>
          </NuxtLink>
          <div v-if="isLoggedIn" class="account-menu">
            <button class="account-circle-btn" aria-label="Open User Account Options">
              <img src="/images/avatar.png" alt="login-avatar" class="avatar-img">
            </button>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const cart = useState('cart', () => [])
const cartCount = computed(() => cart.value.reduce((acc, item) => acc + item.quantity, 0))

const isLoggedIn = ref(false)
const currentUser = ref(null)

onMounted(() => {
  if (process.client) {
    const session = localStorage.getItem('active_user_session')
    if (session) {
      isLoggedIn.value = true
      currentUser.value = JSON.parse(session)
    }
  }
})
</script>

<style scoped>
@import '~/assets/css/header.css';
</style>