

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
        
        </div>
      </div>
    </div>
  </header>

  <slot />
</template>
