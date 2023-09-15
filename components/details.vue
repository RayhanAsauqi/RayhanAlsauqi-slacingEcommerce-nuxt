<script setup lang="ts">
import { Product } from '~/types/main';



const { products } = defineProps<{ products: Product }>();

</script>

<template>
    
  <div class="w-full">
    <div >
      <label class="font-sans text-gray-900 text-3xl font-semibold leading-[38px]">
        <!-- {{ products.title }} -->
        {{ products.title }}
      </label>
      <p class="font-sans text-2xl font-semibold text-[#0764A7] leading-8 pt-[10px]">
        $ {{ products.price }}
      </p>
    </div>

    <div class="py-8">
      <label class="font-sans text-base font-medium leading-6 text-gray-500 mb-2">
        Color
      </label>
      <div class="flex gap-2 justify-between">
        <ButtonColor />
        <ButtonColor />
        <ButtonColor />
      </div>
    </div>

    <div class="mb-8">
        <label class="font-sans text-base font-medium leading-6 text-gray-500 mb-2">
        Size
      </label>
        <ButtonSize />
    </div>

    <div class="mb-8">
        <label class="font-sans text-base font-medium leading-6 text-gray-500">Quantity</label>
        <ButtonCounter />
    </div>

    <div>
      <label class="font-sans text-base font-medium leading-6 text-gray-500 mt-8">Description</label>
      <p class="text-xl font-semibold leading-[30px] text-[#262262] mt-2">{{ products.description }}</p>
    </div>
  </div>
</template>
