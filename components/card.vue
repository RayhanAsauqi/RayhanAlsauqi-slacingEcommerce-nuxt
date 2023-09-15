<script setup lang="ts">
// import axios from "axios";
import { useProductStore } from "~/store/productStore";
import { Product } from "~/types/main";

const productStore = useProductStore();
defineProps<{
  products: Product;
}>();

onMounted(() => {
  productStore.fetchDataProduct();
});
</script>

<template>
  <div
    class="bg-white rounded-md border-gray-44 flex-col w-56 h-[430px] border border-slate-300"
  >
    <img
      :src="products.thumbnail"
      alt=""
      class="w-56 h-56 bg-slate-300 rounded-t-md"
    />
    <div
      class="self-stretch h-[206px] p-6 flex-col justify-start items-start gap-6 flex"
    >
      <div
        class="px-3 py-1 bg-gray-100 rounded-2xl justify-start items-center inline-flex"
      >
        <h1
          class="text-center text-slate-700 text-sm font-medium leading-tight"
        >
          {{ products.category }}
        </h1>
      </div>
      <div
        class="self-stretch h-[114px] flex-col justify-start items-start gap-2 flex"
      >
        <div class="flex">
          <h2 class="text-gray-900 text-base font-normal leading-normal pr-44">
            {{ products.title }}
          </h2>
        </div>
        <div
          class="self-stretch h-[58px] flex-col justify-start items-start gap-0.5 flex"
        >
          <div
            class="self-stretch justify-start items-center gap-2 inline-flex"
          >
            <h1
              class="grow shrink basis-0 text-gray-900 text-xl font-semibold leading-[30px]"
            >
              {{ products.price }}
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
