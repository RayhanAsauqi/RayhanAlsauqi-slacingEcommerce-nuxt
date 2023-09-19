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
  <footer class="px-20 bg-gray-800 py-16 mt-24">
    <div class="container mx-auto px-5">
      <div class="flex justify-center">
        <div>
          <h1
            class="font-sans text-3xl font-semibold leading-[38px] text-white"
          >
            Let's get started on something great
          </h1>
          <p
            class="font-sans text-xl font-normal leading-[30px] text-gray-200 pt-4"
          >
            Join over 4,000+ startups already growing with Morpheme.
          </p>
        </div>
      </div>
      <div>
        <div class="flex justify-center pt-10">
          <div class="flex gap-3">
            <button
              class="border bg-white border-gray-300 shadow px-5 py-3 font-sans text-gray-700 text-base font-semibold leading-6 rounded-lg"
            >
              Chat to us
            </button>
            <button
              class="border bg-[#0984DD] border-[#0984DD] shadow px-5 py-3 font-sans text-base font-semibold leading-6 rounded-lg text-white"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
      <div class="py-16 ">
        <div class="container mx-auto ">
          <div class="flex justify-between">
            <FooterProduct />
            <FooterProductCompany />
            <FooterProductResources />
            <FooterProductUseCase />
            <FooterProductSocial />
            <FooterProductLegal />
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto  border-t border-t-gray-400">
      <div class="px-5">
        <div class="flex">
          <img src="../assets/svg/Content (1).svg" alt="">
          <img src="../assets/svg/Logotype (5).svg" alt="">
        </div>
      </div>

    </div>
  </footer>
</template>
