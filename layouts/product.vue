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

        <div class="flex gap-3 items-center">
          <NuxtLink to="/cart">
            <div class="relative">
              <img src="../assets/svg/shopping-cart-03.svg" alt="" />
              <div
                class="w-4 h-4 rounded-full bg-orange-500 absolute -top-2 -right-2 text-center"
              >
                <p
                  class="font-sans text-[10px] font-medium leading-3 text-white pt-1"
                >
                  0
                </p>
              </div>
            </div>
          </NuxtLink>
          <img src="../assets/img/Avatar.png" alt="" />
        </div>
      </div>
    </div>
  </header>

  <slot />
</template>
