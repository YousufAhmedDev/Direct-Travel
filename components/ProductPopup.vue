<template>
  <v-dialog :model-value="dialog" @update:model-value="updateDialog" max-width="900px">
    <v-card>
      <div class="d-flex pa-5 justify-space-between">
        <v-img :src="product.image" :alt="product.title" class="mb-4 w-25 mr-10" />
        <div>
          <h2>{{ product.title }}</h2>
          <p class="text-h4 mb-5">${{ product.price }}</p>
          <p>Rating: {{ product.rating?.rate }} ({{ product.rating?.count }} reviews)</p>
          <p class="mt-5">{{ product.description }}</p>
          <v-btn color="success" text class="mt-5">{{ $t('Add to cart') }}</v-btn>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  dialog: Boolean,
  product: Object,
})

const emit = defineEmits()

const updateDialog = (value) => {
  emit('update:model-value', value)
}
</script>
