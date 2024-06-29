<template>
  <v-autocomplete
    v-model="search"
    :items="filteredProducts"
    item-text="title"
    class="mx-auto"
    menu-icon=""
    :label="$t('labels.search')"
    prepend-inner-icon="mdi-magnify"
    theme="light"
    variant="solo"
    auto-select-first
    rounded
    @input="onSearch"
  ></v-autocomplete>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useProductStore } from '@/store/productStore'

const search = ref('')
const productStore = useProductStore()

watch(search, (newValue) => {
  productStore.filterProducts(newValue)
})

const filteredProducts = computed(() => productStore.filteredProducts)

const onSearch = () => {
  productStore.filterProducts(search.value)
}
</script>
