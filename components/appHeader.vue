<template>
  <nav
    class="container px-6 py-4 mx-auto top-0 lg:flex lg:justify-between lg:items-center"
  >
    <div class="flex items-center justify-between">
      <img src="/img/logo.png" alt="" class="lg:w-[60px] w-[40px]" />

      <!-- Mobile menu button -->
      <div @click="isOpen = !isOpen" class="flex lg:hidden">
        <button
          type="button"
          class="hover:text-gray-400 focus:outline-none focus:text-gray-400"
          aria-label="toggle menu"
        >
          <svg viewBox="0 0 24 24" class="w-10 h-10 fill-current">
            <path
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            ></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
    <div
      :class="isOpen ? 'flex' : 'hidden'"
      class="flex-col mt-2 space-y-4 lg:flex lg:space-y-0 lg:flex-row lg:items-center lg:mt-0"
    >
      <div
        class="relative flex items-center lg:mr-5 justify-between border-2 border-gray-400 rounded-lg overflow-hidden"
      >
        <fa :icon="['fas', 'search']" class="text-xl text-gray-700 ml-3 cursor-pointer" />
        <input
          type="text"
          class="py-2 lg:w-[300px] px-3 placeholder-gray-700 text-sm  text-right"
          placeholder="دنبال چی میگردی ؟"
        />
      </div>

      <nuxt-link
        to="/blog"
        class="text-sm font-medium text-center py-3 px-5 rounded-lg transition-colors duration-300 transform hover:text-main"
        >بلاگ</nuxt-link
      >
      <nuxt-link
        to="/products"
        class="text-sm font-medium text-center py-3 px-5 rounded-lg transition-colors duration-300 transform hover:text-main"
        >محصولات</nuxt-link
      >
      <nuxt-link
        to="/about"
        class="text-sm font-medium text-center py-3 px-5 rounded-lg transition-colors duration-300 transform hover:text-main"
        >درباره ما</nuxt-link
      >
      <nuxt-link
        to="/"
        class="text-sm font-medium text-center py-3 px-5 rounded-lg transition-colors duration-300 transform hover:text-main"
        >صفحه اصلی</nuxt-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  }
};
</script>

<style scoped>
.nuxt-link-exact-active {
  @apply bg-main text-white;
}
</style>
