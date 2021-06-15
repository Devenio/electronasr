<template>
  <div dir="rtl">
    <header class="header-background relative">
      <img src="/img/group1.svg" alt="" class="absolute lg:w-auto w-[100px] -bottom-1 right-0">
      <section class="flex items-center justify-center h-[500px]">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-white md:text-5xl">
            فروش محصولات برق و الکتریکی <span class="text-main">الکترونصر</span>
          </h2>
          <p class="mt-5 px-3 text-xl font-medium text-gray-300">
            محصولات برقی مورد نیازتون رو میتونید از الکترونصر تهیه کنید.
          </p>

          <div class="flex flex-wrap items-center justify-center mt-8">
            <nuxt-link
              to="/about"
              class="m-3 cursor-pointer py-3 px-5 bg-green-700 text-white rounded-lg"
            >
              درباره ما
            </nuxt-link>
            <nuxt-link
              to="/about"
              class="m-3 cursor-pointer py-3 px-5 text-green-700 bg-white rounded-lg"
            >
              مشاهده محصولات
            </nuxt-link>
          </div>
        </div>
      </section>
    </header>
    <section class="mt-10">
      <div class="container mx-auto px-3 lg:p-0">
        <h3 class="text-right lg:text-xl">جدیدترین محصولات</h3>
        <div class="mt-3 h-[2px] w-[100px] bg-main"></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header-background {
  background-image: linear-gradient(#00000090, #00000090), url("/img/bg.jpg");
  background-size: cover;
  background-position: top;
}
</style>
