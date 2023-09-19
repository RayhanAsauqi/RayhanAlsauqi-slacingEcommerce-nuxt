<script setup lang="ts">
import { useProductStore } from "~/store/productStore";
import { Product } from "~/types/main";

const productStore = useProductStore();
defineProps<{
  products: Product;
}>();


</script>

<template>
  <div class="container w-full">
    <div class="">
      <img
        :src="products.thumbnail"
        alt=""
        class="w-[576px] h-[546px] rounded-lg"
      />
    </div>
    <div class="w-1/4 flex justify-between" >
      <img :src="products?.image" alt="" />
      <img src="../assets/img/Rectangle 27.png" alt="" />
      <img src="../assets/img/Rectangle 27.png" alt="" />
      <img src="../assets/img/Rectangle 27.png" alt="" />
    </div>
  </div>

 
</template>
