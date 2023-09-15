<template>
     <header>
    <div class="bg-gradient-to-b from-sky-200 to-white px-20">
      <div class="container mx-auto px-8 py-[14px] flex justify-between gap-10">
        <div class="flex">
          <div class="flex gap-[10px]">
            <img src="./assets/svg/Content.svg" alt="" />
            <img src="./assets/svg/Logotype.svg" alt="" />
          </div>
          <ul class="flex gap-8 items-center">
            <NuxtLink
              to="/"
              class="font-sans text-base text-gray-600 font-semibold leading-6"
            >
              Home
            </NuxtLink>
            <NuxtLink
              :to="{ name: 'product' }"
              class="font-sans text-base text-gray-600 font-semibold leading-6"
            >
              Product
            </NuxtLink>
            <NuxtLink
              to="/categories"
              class="font-sans text-base text-gray-600 font-semibold leading-6"
            >
              Categories
            </NuxtLink>
          </ul>
        </div>
        <div class="flex gap-3">
          <button
            class="px-[18px] py-[14px] font-sans text-gray-600 text-base font-semibold leading-4"
          >
            Log In
          </button>
          <button
            class="border px-[18px] py-[14px] bg-sky-600 text-white font-semibold leading-4 text-base rounded-lg"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  </header>

  <slot />
</template>