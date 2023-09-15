<script setup lang="ts">
import { useProductStore } from "~/store/productStore";

const productStore = useProductStore();

onMounted(async () => {
  await productStore.fetchDataProduct();
});
</script>

<template>
  <section
    class="px-20 bg-[url('~/assets/img/bg-hero.png')] bg-no-repeat bg-right-top"
    style="background-position-y: 80%"
  >
    <div class="container mx-auto px-8 pt-16">
      <h1
        class="font-sans text-6xl font-semibold leading-[72px] -tracking-[1.2px] pb-6"
      >
        Welcome to GITS <br />
        Commerce
      </h1>
      <p
        class="font-sans text-xl font-normal leading-[30px] text-gray-600 pb-12"
      >
        Morpheme is a next-gen financial technology <br />
        company in the process of reinventing banking
      </p>
      <div>
        <button
          class="px-7 py-4 rounded-lg bg-[#0984DD] shadow font-sans text-lg font-semibold leading-7 text-white flex gap-3"
        >
          <img src="../../assets/svg/shopping-cart-01.svg" alt="" />Start
          Shopping
        </button>
      </div>
    </div>
  </section>

  <section class="px-20 py-24">
    <div class="px-8 flex justify-between">
      <h1 class="font-sans text-2xl font-semibold leading-8">Categoris</h1>
      <ButtonViewAll />
    </div>
  </section>

  <div class="container mx-auto px-20 mb-24">
    <div class="flex justify-between px-8">
      <ButtonCategory />  
    </div>
  </div>

  <div class="px-28">
    <Swiper
      :modules="[SwiperAutoplay, useSwiperSlide]"
      :slides-per-view="5"
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
    >
      <SwiperSlide v-for="product in productStore.products" :key="product.id">
        <NuxtLink :to="`product/${product.id}`">
          <Card :products="product" />
        </NuxtLink>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
