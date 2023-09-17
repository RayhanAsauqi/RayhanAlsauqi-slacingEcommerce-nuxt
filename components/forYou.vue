<script setup lang="ts">
import { useProductStore } from "~/store/productStore";

const productStore = useProductStore();
</script>

<template>
  <div class="flex justify-between pb-8">
    <h1 class="font-sans text-2xl font-semibold leading-8">For You</h1>
    <ButtonViewAll />
  </div>
  <div class="flex flex-wrap justify-between">
    <div
      v-for="product in productStore.products"
      :key="product.id"
      class="py-6"
    >
      <NuxtLink :to="`product/${product.id}`">
        <Card :products="product" />
      </NuxtLink>
    </div>
  </div>
</template>
