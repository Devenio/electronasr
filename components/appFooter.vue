<template>
  <footer class="mt-10 w-full " style="background-color: #fafafa">
    <div
      class="w-full py-5 space-x-3 lg:space-x-5 flex items-center justify-center border-t-2 border-b-2 border-black border-opacity-10"
    >
      <span class="text-sm lg:text-base ">ارتباط با ما</span>
      <span
        class="text-sm lg:text-base w-[1px] h-[50px] bg-black opacity-25"
      ></span>
      <span class="text-sm lg:text-base ">دسته بندی ها</span>
      <span
        class="text-sm lg:text-base w-[1px] h-[50px] bg-black opacity-25"
      ></span>
      <span class="text-sm lg:text-base ">درباره ما</span>
    </div>
    <div class="relative w-full flex items-center justify-center flex-col py-5">
      <img src="/img/logo.png" class="w-[60px]" alt="" />
      <h3 class="mt-3 lg:text-lg font-bold">
        ما را در شبکه های اجتماعی دنبال کنید
      </h3>
      <div class="flex items-center space-x-3 mt-5">
        <fa class="text-xl text-gray-800" :icon="['fab', 'instagram']" />
        <fa class="text-xl text-gray-800" :icon="['fab', 'twitter']" />
        <fa class="text-xl text-gray-800" :icon="['fab', 'telegram-plane']" />
        <fa class="text-xl text-gray-800" :icon="['fab', 'whatsapp']" />
      </div>
      <h3 class="mt-3 lg:text-lg font-bold">تلفن تماس: 09015633258</h3>
      <svg
        width="184"
        height="342"
        viewBox="0 0 184 342"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="absolute hidden sm:block right-0 bottom-0 w-[150px]"
      >
        <path d="M328 44V143.5L115 341.5H0.5L328 44Z" fill="#9BFFF050" />
        <path
          d="M327.5 0V99.5L114.5 297.5H0L327.5 0Z"
          fill="#0EC4A9"
          fill-opacity="0.5"
        />
      </svg>
      <svg
        width="184"
        height="342"
        viewBox="0 0 184 342"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="absolute hidden sm:block left-0 top-0 w-[150px] transform rotate-180"
      >
        <path d="M328 44V143.5L115 341.5H0.5L328 44Z" fill="#9BFFF050" />
        <path
          d="M327.5 0V99.5L114.5 297.5H0L327.5 0Z"
          fill="#0EC4A9"
          fill-opacity="0.5"
        />
      </svg>
    </div>
    <div class="py-5" style="background-color: #efefef">
      <div
        class="container mx-auto flex flex-col items-center lg:flex-row-reverse justify-between space-y-2 text-sm"
      >
        <span>تمامی حقوق این سایت متعلق به الکترونصر میباشد</span>
        <span>All Rights Reserved.</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
