<template>
  <div>
    <h1>{{ $t('Products') }}</h1>
    <v-tabs v-model="selectedCategory" background-color="primary" dark>
      <v-tab v-for="category in categories" :key="category" :value="category">
        {{ category }}
      </v-tab>
    </v-tabs>
    <swiper :slides-per-view="3" :modules="[SwiperAutoplay, SwiperEffectCreative]" :autoplay="{
      delay: 2000,
      disableOnInteraction: false,
    }" :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }">
      <swiper-slide v-for="product in filteredProductsByCategory" :key="product.id">
        <v-card variant="tonal" class="ma-2 hover-scale" @click="showProductInfo(product)">
          <v-img height="250" :src="product.image" :alt="product.title" class="mt-2" />
          <v-card-title>{{ product.title }}</v-card-title>
          <v-card-subtitle>${{ product.price }}</v-card-subtitle>
        </v-card>
      </swiper-slide>
    </swiper>
    <ProductPopup :dialog="dialog" :product="selectedProduct" @update:model-value="dialog = $event" />
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
import { useProductStore } from '@/store/productStore'
import ProductPopup from './ProductPopup.vue'

const productStore = useProductStore()

const selectedCategory = ref('')
const categories = computed(() => {
  const uniqueCategories = new Set(productStore.filteredProducts.map(product => product.category))
  return Array.from(uniqueCategories)
})

const filteredProductsByCategory = computed(() => {
  if (!selectedCategory.value) {
    return productStore.filteredProducts
  }
  return productStore.filteredProducts.filter(product => product.category === selectedCategory.value)
})

watch(categories, (newCategories) => {
  if (newCategories.length > 0 && !selectedCategory.value) {
    selectedCategory.value = newCategories[0]
  }
}, { immediate: true })


const dialog = ref(false)
const selectedProduct = ref({})

const showProductInfo = (product) => {
  selectedProduct.value = product
  dialog.value = true
}
</script>
<style scoped>
.hover-scale {
  transition: transform 0.3s ease-in-out;
}

.hover-scale:hover {
  transform: scale(1.05);
}
</style>
