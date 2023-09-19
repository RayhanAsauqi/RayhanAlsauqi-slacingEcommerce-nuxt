<script setup lang="ts">
import { useProductStore } from "~/store/productStore";
import { onMounted } from "#imports";
import { FooterSubLinkCompany } from "#build/components";

const productStore = useProductStore();
// const searchQueryProducts = ref("");
onMounted(async () => {
  await productStore.fetchDataProduct();
});

definePageMeta({
  layout: "product",
});
</script>

<template>
  <section class="px-20">
    <div class="container mx-auto pt-16 px-5">
      <div class="w-full">
        <h1
          class="text-center font-sans text-[40px] font-semibold leading-[56px] -tracking-[-0.8px] text-gray-900"
        ></h1>
        <div class="flex justify-center gap-2">
          <div class="flex gap-[10px]">
            <input
              type="text"
              class="w-[584px] h-[48px] bg-white text-gray-500 text-sm font-normal leading-tight p-[14px] rounded-lg shadow border border-gray-300"
              placeholder="search"
              v-model="productStore.searchProducts"
            />
            <div
              class="flex px-4 py-[14px] gap-2 border border-gray-300 rounded-lg"
            >
              <img src="../../assets/svg/filter-lines.svg" alt="" />
              <h1
                class="font-sans text-sm font-semibold leading-5 text-gray-700"
              >
                ini tes
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div class="px-5 pt-[72px]">
        <div class="container mx-auto w-full">
          <div class="flex justify-between">
            <div class="">
              <Type class="pb-8" />
              <Type />
              <button
                class="flex border px-4 py-[10px] rounded-lg mt-8 gap-2 bg-[#D8EEFD]"
              >
                <img src="../../assets/svg/refresh-ccw-02.svg" alt="" />
                <p
                  class="font-sans text-sm font-semibold leading-5 text-[#0764A7]"
                >
                  Reset Option
                </p>
              </button>
            </div>
            <div class="flex flex-wrap gap-6 pl-6">
              <div
                v-for="product in productStore.filteredProducts"
                :key="product.id"
                class=""
              >
                <NuxtLink :to="`product/${product.id}`">
                  <Card :products="product" />
                </NuxtLink>
              </div>
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>
