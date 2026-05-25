<template>
  <article class="product-card">
    <div 
      class="img-wrapper" 
      @click="$emit('add-to-cart', product)" 
      role="button" 
      :aria-label="`Add ${product.name} to cart`" 
      tabindex="0" 
      @keydown.enter="$emit('add-to-cart', product)"
    >
      <span v-if="product.discount" class="discount-badge" aria-label="Discount amount">
        -{{ product.discount }}%
      </span>
      <span v-else-if="product.badge" class="discount-badge green-badge" style="background-color: #00FF66;">
        {{ product.badge }}
      </span>

      <div class="card-icons" @click.stop>
        <button aria-label="Add item to Wishlist" style=" border: none; padding: 0; cursor: pointer;"><i class="fa-regular fa-heart" aria-hidden="true"></i></button>
        <button aria-label="Quick view product details" style=" border: none; padding: 0; cursor: pointer;"><i class="fa-regular fa-eye" aria-hidden="true"></i></button>
      </div>

      <img 
        :src="product.image" 
        :alt="product.altText" 
        class="product-item-img" 
      />

      <button class="add-to-cart-btn" tabindex="-1" aria-hidden="true">Add To Cart</button>
    </div>

    <div class="card-details">
      <h3>{{ product.name }}</h3>
      <p class="price-row">
        <span class="price-current">${{ product.price }}</span> 
        <span v-if="product.oldPrice" class="price-old">
          <del>${{ product.oldPrice }}</del>
        </span>
      </p>
      <div class="stars" :aria-label="`Rated 5 stars out of 5 based on ${product.reviews} reviews`">
        ⭐⭐⭐⭐⭐ <span class="review-count" aria-hidden="true">({{ product.reviews }})</span>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})
defineEmits(['add-to-cart'])
</script>