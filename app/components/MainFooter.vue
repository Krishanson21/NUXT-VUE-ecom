<template>
  <footer class="footer" role="contentinfo">
    <div class="footer-container">
      <div class="footer-col">
        <div class="title">Exclusive</div>
        <div class="sub-title">Subscribe</div>
        <p class="sub-text">Get 10% off your first order</p>
        <div class="subscribe-input-wrapper">
          <label for="footer-email-input" class="sr-only">Enter your email address</label>
          <input 
            id="footer-email-input" 
            type="email" 
            placeholder="Enter your email" 
            autocomplete="email"
          />
          <button type="submit" class="input-arrow-btn" aria-label="Submit email subscription">
            <img src="/images/letter.png" alt="" aria-hidden="true" class="input-arrow-img" />
          </button>
        </div>
      </div>
      
      <div class="footer-col">
        <div class="sub-title">Support</div>
        <address class="footer-address">
          <p>111 Bijoy sarani, Dhaka,<br />DH 1515, Bangladesh.</p>
          <p><a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a></p>
          <p><a href="tel:+88015888889999">+88015-88888-9999</a></p>
        </address>
      </div>
      
      <nav class="footer-col" aria-label="Footer Account Navigation">
        <div class="sub-title">Account</div>
        <ul>
          <li><a href="#">My Account</a></li>
          <li><NuxtLink to="/login">Login / Register</NuxtLink></li>
          <li><NuxtLink to="/cart">Cart</NuxtLink></li>
          <li><a href="#">Wishlist</a></li>
          <li><a href="#">Shop</a></li>
        </ul>
      </nav>
      
      <nav class="footer-col" aria-label="Footer Quick Links">
        <div class="sub-title">Quick Link</div>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms Of Use</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      
      <div class="footer-col">
        <div class="sub-title">Download App</div>
        <p class="app-tagline">Save $3 with App New User Only</p>
        <div class="download-block">
          <img src="/images/qr.png" alt="Scan QR code to download app" class="qr-img" />
          <img src="/images/store.png" alt="Get it on Google Play or Download on the App Store" class="store-img" />
        </div>
        <div class="social-wrapper">
          <img src="/images/ficons.png" alt="Follow us on Facebook, Twitter, Instagram, and LinkedIn" class="social-icons-img" />
        </div>
      </div>
    </div>
    
    <div class="copyright-bar">
      <p>&copy; Copyright Rimel 2022. All right reserved</p>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
@import '~/assets/css/footer.css';
</style>