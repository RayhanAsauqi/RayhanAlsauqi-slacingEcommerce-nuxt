<script setup lang="ts">
import {useProductStore} from "~/store/productStore"
import { onMounted } from '#imports';

const productStore = useProductStore()

console.log("ini error ",productStore.products)
onMounted(async () => {
  await productStore.fetchDataProduct();
});

definePageMeta({
  layout:"product"
})
</script>

<template>
  <section>
    <div class="container mx-auto pt-16 pb-[72px]">
      <div class="w-full">
        <h1
          class="text-center font-sans text-[40px] font-semibold leading-[56px] -tracking-[-0.8px] text-gray-900"
        ></h1>
        <div class="flex justify-center gap-2   ">
          <div class=" rounded shadow-lg w-full px-[354px]">
            <input
              type="text"
              id="nama"
              name="nama"
              placeholder="Masukkan nama Anda"
              class="w-full px-[14px] py-[14px]"
            />
          </div>

          <button>ini tes</button>
        </div>
      </div>
    </div>
  </section>

  <section class="px-20">
    <div class="container mx-auto px-5">
      <ul class="flex flex-wrap gap-8 justify-end">
          <li v-for="product in productStore.products" :key="product.id">
                  <NuxtLink :to='`product/${product.id}`'>
                    <Card :products="product"/>
                  </NuxtLink>
          </li>
        </ul>
    </div>
  </section>
</template>
