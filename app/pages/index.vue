<template>
  <main id="main-content" class="container homepage-main">

    <section class="hero-section" aria-label="Featured Promotions">
      <nav class="sidebar" aria-label="Main Categories">
        <ul>
          <li><a href="#">Woman's Fashion <i class="fa-solid fa-chevron-right" aria-hidden="true"></i></a></li>
          <li><a href="#">Men's Fashion <i class="fa-solid fa-chevron-right" aria-hidden="true"></i></a></li>
          <li><a href="#">Electronics</a></li>
          <li><a href="#">Home & Lifestyle</a></li>
          <li><a href="#">Medicine</a></li>
          <li><a href="#">Sports & Outdoor</a></li>
          <li><a href="#">Baby's & Toys</a></li>
          <li><a href="#">Groceries & Pets</a></li>
          <li><a href="#">Health & Beauty</a></li>
        </ul>
      </nav>

      <div class="hero-banner">
        <img src="/images/hero-phone.png" alt="Two iPhone 14 Pro Max" />
      </div>
    </section>

    <section class="section-container" aria-labelledby="flash-sale-heading">
      <div class="section-tag" aria-hidden="true">Today's</div>
      <div class="section-header-row">
        <h2 id="flash-sale-heading" class="section-title">Flash Sales</h2>
        <div class="countdown-clock" role="timer" aria-label="Sales ends in 3 days, 23 hours, 19 minutes, 56 seconds">
          <div class="time-segment">
            <span class="label">Days</span>
            <span class="num">03</span>
          </div>
          <span class="colon" aria-hidden="true">:</span>

          <div class="time-segment">
            <span class="label">Hours</span>
            <span class="num">23</span>
          </div>
          <span class="colon" aria-hidden="true">:</span>

          <div class="time-segment">
            <span class="label">Minutes</span>
            <span class="num">19</span>
          </div>
          <span class="colon" aria-hidden="true">:</span>

          <div class="time-segment">
            <span class="label">Seconds</span>
            <span class="num">56</span>
          </div>
        </div>
        <div class="slider-arrows" aria-hidden="true">
          <button class="arrow-btn" aria-label="Previous flash sale products"><i class="fa-solid fa-arrow-left"></i></button>
          <button class="arrow-btn" aria-label="Next flash sale products"><i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>

      <div class="products-grid">
        <ProductCard v-for="item in flashSaleProducts" :key="item.id" :product="item" @add-to-cart="handleNewItemAdd" />
      </div>
      <div class="center-btn-wrapper">
        <button class="btn-red text-center">View All Products</button>
      </div>
    </section>

    <section class="section-container border-top" aria-labelledby="category-heading">
      <div class="section-tag" aria-hidden="true">Categories</div>
      <div class="section-header-row">
        <h2 id="category-heading" class="section-title">Browse By Category</h2>
        <div class="slider-arrows" aria-hidden="true">
          <button class="arrow-btn"><i class="fa-solid fa-arrow-left"></i></button>
          <button class="arrow-btn"><i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
      <div class="categories-grid">
        <div class="category-box" tabindex="0" role="button" aria-label="Browse Phones"><img src="/images/i1.png" alt="Phone icon" width="58px" class="category-icon-img" /><p>Phones</p></div>
        <div class="category-box" tabindex="0" role="button" aria-label="Browse Computers"><img src="/images/i2.png" alt="Computer icon" class="category-icon-img" /><p>Computers</p></div>
        <div class="category-box" tabindex="0" role="button" aria-label="Browse Smartwatches"><img src="/images/i3.png" alt="Smartwatches icon" class="category-icon-img" /><p>SmartWatch</p></div>
        <div class="category-box active" tabindex="0" role="button" aria-label="Browse Cameras"><img src="/images/i4.png" alt="Cameras icon" class="category-icon-img" /><p>Camera</p></div>
        <div class="category-box" tabindex="0" role="button" aria-label="Browse Headphones"><img src="/images/i5.png" alt="Headphones icon" class="category-icon-img" /><p>HeadPhones</p></div>
        <div class="category-box" tabindex="0" role="button" aria-label="Browse Gaming Consoles"><img src="/images/i6.png" alt="Console icon" class="category-icon-img" /><p>Gaming</p></div>
      </div>
    </section>

    <section class="section-container border-top" aria-labelledby="best-selling-heading">
      <div class="section-tag" aria-hidden="true">This Month</div>
      <div class="section-header-row">
        <h2 id="best-selling-heading" class="section-title">Best Selling Products</h2>
        <button class="btn-red side-action-btn">View All</button>
      </div>
      <div class="products-grid">
        <ProductCard v-for="item in bestSellers" :key="item.id" :product="item" @add-to-cart="handleNewItemAdd" />
      </div>
    </section>

    <section class="promo-music-section" aria-label="Special Speaker Offer Promotion" style="margin-top: 90px;">
      <div class="promo-img-box">
        <img src="/images/speaker.png" alt="bluetooth speaker" class="boombox-img" />
      </div>
    </section>

    <section class="section-container" aria-labelledby="explore-heading">
      <div class="section-tag" aria-hidden="true">Our Products</div>
      <div class="section-header-row">
        <h2 id="explore-heading" class="section-title">Explore Our Products</h2>
        <div class="slider-arrows" aria-hidden="true">
          <button class="arrow-btn"><i class="fa-solid fa-arrow-left"></i></button>
          <button class="arrow-btn"><i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
      <div class="products-grid explore-rows">
        <ProductCard v-for="item in exploreProducts" :key="item.id" :product="item" @add-to-cart="handleNewItemAdd" />
      </div>
      <div class="center-btn-wrapper">
        <button class="btn-red text-center">View All Products</button>
      </div>
    </section>

    <section class="section-container border-top" aria-labelledby="new-arrival-heading">
      <div class="section-tag" aria-hidden="true">Featured</div>
      <h2 id="new-arrival-heading" class="section-title text-block-gap">New Arrival</h2>
      <div class="arrival-mosaic-grid">
        <div class="mosaic-large bg-black">
          <img src="/images/ps5.png" alt="A PlayStation 5" class="mosaic-img-cover" />
        </div>
        <div class="mosaic-right-split">
          <div class="mosaic-wide bg-black">
            <img src="/images/woman.png" alt="A woman wearing black hat" class="mosaic-img-cover" />
          </div>
          <div class="mosaic-double-box">
            <div class="mosaic-small bg-black">
              <img src="/images/speakers-small.png" alt="Two black speakers" class="mosaic-img-sm" />
            </div>
            <div class="mosaic-small bg-black">
              <img src="/images/perfume.png" alt="A luxury perfume" class="mosaic-img-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="value-propositions-bar" aria-label="Customer Guarantees">
      <div class="prop-item">
        <div class="icon-circle"><div class="inner-circle"><img src="/images/f1.png" alt="" aria-hidden="true" /></div></div>
        <h3>FREE AND FAST DELIVERY</h3>
        <p>Free delivery for all orders over $140</p>
      </div>
      <div class="prop-item">
        <div class="icon-circle"><div class="inner-circle"><img src="/images/f2.png" alt="" aria-hidden="true" /></div></div>
        <h3>24/7 CUSTOMER SERVICE</h3>
        <p>Friendly 24/7 customer support</p>
      </div>
      <div class="prop-item">
        <div class="icon-circle"><div class="inner-circle"><img src="/images/f3.png" alt="" aria-hidden="true" /></div></div>
        <h3>MONEY BACK GUARANTEE</h3>
        <p>We return money within 30 days</p>
      </div>
    </section>

  </main>
</template>

<script setup>
// this ts/js for index
import { flashSaleProducts, bestSellers, exploreProducts } from '../data/products'

const cart = useState('cart', () => [])

function handleNewItemAdd(targetProd) {
  let itemMatch = null;
  
  for (let i = 0; i < cart.value.length; i++) {
    if (cart.value[i].id === targetProd.id) {
      itemMatch = cart.value[i];
      break;
    }
  }
// for item quant
  if (itemMatch) {
    itemMatch.quantity++;
  } else {
    cart.value.push({
      id: targetProd.id,
      title: targetProd.title,
      price: targetProd.price,
      image: targetProd.image,
      quantity: 1
    });
  }
}
</script>

<style scoped>
@import '~/assets/css/index.css';
</style>