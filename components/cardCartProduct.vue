<script setup lang="ts">
import { useCartStore } from "~/store/cartStore";
import { useProductStore } from "~/store/productStore";
import { CartProducts } from "~/types/main";

const imageProduct = useProductStore()
const cartStore = useCartStore()

defineProps<{
  product: CartProducts;
}>();
</script>

<template>
  <div class="flex w-[720px] border p-4 mb-4">
    <img
      :src="imageProduct.filterDataProduct(product.id)?.thumbnail"
      alt=""
      class="bg-red-50 w-[288px] h-[162px] object-cover"
    />
    <div class="px-5 py-3 flex flex-col justify-between w-full">
      <div>
        <div class="flex justify-between pb-1">
          <h1 class="font-sans text-base font-normal leading-6 text-gray-900">{{ product.title }}</h1>
          <p class="font-sans text-xl font-semibold leading-[30px] text-gray-900">${{ product.price }}</p>
        </div>
        <h1 class="font-sans text-xs font-normal leading-[150%] text-gray-400">Color Name</h1>
      </div>
      <div class="flex justify-between">
        <h1 class="font-sans text-lg font-medium leading-7 text-gray-700">Qty: {{ product.quantity }}</h1>
        <button class="flex gap-2" @click="cartStore.deleteItemProduct(product.id)">
          <img src="../assets/svg/trash-01.svg" alt="" />
          <span class="font-sans text-sm font-semibold leading-5 text-red-700"
            >Remove</span
          >
        </button>
      </div>
    </div>
  </div>
</template>
