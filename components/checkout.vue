<script setup lang="ts">
import { CartProducts } from '~/types/main';

    defineProps<{
        product: CartProducts
    }>()
</script>


<template>
    <div class="p-5 border w-[496px] h-[196px] rounded-xl">
        <div class="pb-5">
            <div class="flex justify-between">
                <h1 class="font-sans text-base font-normal leading-6 text-gray-400">Sub Total</h1>
                <p class="font-sans text-xl font-semibold leading-[30px] text-gray-900">${{ product.total }}</p>
            </div>
            <p class="w-[190px] pt-1 font-sans text-base font-normal leading-6 text-gray-400">Shipping and taxes calculated at checkout</p>
        </div>
        <button class="px-5 py-3 flex gap-2 bg-[#0984DD] w-[456px] justify-center rounded-lg ">
            <img src="../assets/svg/arrow-right (1).svg" alt="">
            <h1 class="font-sans text-base font-semibold leading-6 text-white">Checkout</h1>
        </button>
    </div>
</template>