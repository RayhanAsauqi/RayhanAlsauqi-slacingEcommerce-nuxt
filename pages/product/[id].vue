<script setup lang="ts">
import { useProductStore } from "~/store/productStore";
import { onMounted } from "#imports";

const id = useRoute().params.id;
definePageMeta({
  layout: "product",
});

const productStore = useProductStore();
const product = ref(productStore.filterDataProduct(Number(id)));

onMounted(async () => {
  await productStore.fetchDataProduct;
});
</script>

<template>
  <section>
    <div class="container mx-auto px-20 pt-16">
      <div class="px-8 flex justify-between">
        <div>
          <NuxtLink to="/product">
            <button class="px-4 py-3 rounded-lg bg-red-50 shadow flex gap-2">
              <img src="../../assets/svg/arrow-left.svg" alt="" />
              <h1>Back</h1>
            </button>
          </NuxtLink>
        </div>
        <h1
          class="font-sans font-semibold text-[40px] leading-[56px] tracking-[-0.8px]"
        >
          Product Detail
        </h1>
        <div>
          <button class="flex bg-[#0984DD] px-4 items-center rounded-lg gap-2 h-11">
            <img src="../../assets/svg/plus.svg" alt="" />
            <h1 class="font-sans text-sm font-semibold leading-5 text-white">
              Add to Cart
            </h1>
          </button>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container px-0 pt-16 pb-[72px]">
      <div class="flex gap-10 px-[100px]">
        <Galery :products="product" :key="product?.id" />
        <Details :products="product" :key="product?.id" />
      </div>
    </div>
  </section>
</template>
