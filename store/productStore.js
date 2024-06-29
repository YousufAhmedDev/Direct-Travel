import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    filteredProducts: [],
  }),
  actions: {
    async fetchProducts() {
      try {
        const response = await axios.get('https://fakestoreapi.com/products')
        this.products = response.data
        this.filteredProducts = response.data
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    },
    filterProducts(query) {
      if (!query) {
        this.filteredProducts = this.products
        return
      }
      this.filteredProducts = this.products.filter(product =>
        product.title && product.title.toLowerCase().includes(query.toLowerCase())
      )
    },
  },
})
