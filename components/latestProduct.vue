<script setup lang="ts">
import { useProductStore } from "~/store/productStore";

const productStore = useProductStore();

onMounted(async () => {
  await productStore.fetchDataProduct();
});
</script>

<template>
  <div class="flex justify-between pb-8">
    <h1 class="font-sans text-2xl font-semibold leading-8">Latest Product</h1>
    <ButtonViewAll />
  </div>
  <div class="flex">
    <div>
      <div class="bg-blue-500 rounded-lg w-[352px] h-[494px] ">
        <div class="pt-10 pl-8 pr-[104px]">
          <h1 class="font-sans text-2xl font-normal leading-8 text-white">
            Discount
          </h1>
          <h1
            class="font-sans text-5xl font-semibold leading-[60px] tracking-[-0.96px] text-white"
          >
            More and More
          </h1>
        </div>
        <div class="pt-10 pl-8 pr-[104px]">
          <h1 class="font-sans text-2xl font-normal leading-8 text-white">
            Up To
          </h1>
          <h1
            class="font-sans text-7xl font-semibold leading-[90px] tracking-[-1.44px] text-[#FCE834]"
          >
            50%
          </h1>
        </div>
      </div>
    </div>
    <div class="-ml-16 w-full pt-8 overflow-hidden">


    <Swiper
      :modules="[SwiperAutoplay, useSwiperSlide]"
      :slides-per-view="4"
      :loop="true"
      :effect="'creative'"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1],
        },
      }"
      :spaceBetween="15"
      class="absolute"
    >
      <SwiperSlide
        v-for="product in productStore.products"
        :key="product.id"
        class=" "
      >
        <NuxtLink :to="`product/${product.id}`">
          <Card :products="product" />
        </NuxtLink>
      </SwiperSlide>
    </Swiper>
  </div>
  </div>
</template>
