<template>
  <v-container>
    <v-row align="center" justify="space-between">
      <v-col cols="10" class="d-flex justify-center">
        <ProductSearch />
      </v-col>
      <v-col cols="2">
        <LanguageSwitcher />
      </v-col>
    </v-row>
    <div class="">
      <ProductSwiper />
    </div>
  </v-container>
</template>

<script setup>
import { onMounted } from 'vue'
import { useProductStore } from '@/store/productStore'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import ProductSearch from '@/components/ProductSearch.vue'
import ProductSwiper from '@/components/ProductSwiper.vue'

const productStore = useProductStore()

onMounted(() => {
  productStore.fetchProducts()
})
</script>
