<script setup lang="ts">
import { useCartStore } from "~/store/cartStore";

definePageMeta({
  layout: "product",
});
const cartStore = useCartStore();
onMounted(() => {
  cartStore.getCartProducts();
});
</script>

<template>
  <section class="px-20">
    <div class="container px-5 pt-16 pb-[72px]">
      <h1
        class="font-sans text-5xl font-semibold leading-[56px] tracking-[-0.8px] text-gray-900 px-5"
      >
        Shopping Cart
      </h1>
    </div>

    <div class="flex gap-6">
      <div class="">
        <div
          class=" container px-5"
          v-for="product in cartStore.getAllCarts.products"
        >
          <CardCartProduct :product="product" />
        </div>
    </div>
    <Checkout :product="cartStore.getAllCarts" />
    </div>
  </section>
</template>
