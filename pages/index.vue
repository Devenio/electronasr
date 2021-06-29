<template>
  <div dir="rtl">
    <header class="header-background relative">
      <img
        src="/img/group1.svg"
        alt=""
        class="absolute lg:w-auto w-[100px] -bottom-1 right-0"
      />
      <section class="flex items-center justify-center h-[500px]">
        <div class="text-center">
          <transition name="slide-in" appear>
            <h2 class="text-3xl font-bold text-white md:text-5xl">
              فروش محصولات برق و الکتریکی
              <span class="text-main">الکترونصر</span>
            </h2>
          </transition>
          <transition name="slide-in" appear>
            <p class="mt-5 px-3 text-xl font-medium text-gray-300">
              محصولات برقی مورد نیازتون رو میتونید از الکترونصر تهیه کنید.
            </p>
          </transition>

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
        <div class="mt-3 mb-5 h-[2px] w-[100px] bg-main"></div>
        <swiper class="swiper mt-5" :options="swiperOption" dir="rtl">
          <product-slide />
          <product-slide />
          <product-slide />
          <product-slide />
          <product-slide />
          <product-slide />
        </swiper>
        <h3 class="text-right mt-10 lg:text-xl">پرفروش ترین محصولات</h3>
        <div class="mt-3 mb-5 h-[2px] w-[100px] bg-main"></div>
        <swiper class="swiper mt-5" :options="swiperOption" dir="rtl">
          <product-slide />
          <product-slide />
          <product-slide />
          <product-slide />
          <product-slide />
          <product-slide />
        </swiper>
        <h3 class="text-right mt-10 lg:text-xl">لیست محصولات</h3>
        <div class="mt-3 mb-5 h-[2px] w-[100px] bg-main"></div>
        <swiper class="swiper mt-5" :options="swiperOption" dir="rtl">
          <swiper-slide
            class="py-2 mx-3 rounded-lg text-center px-5 shadow-xl border-black border-2  border-opacity-10"
            v-for="category in list_category"
            :key="category.id"
          >
            <nuxt-link
              class="no-wrap py-3"
              :to="{
                path: '/products',
                query: { id: category.id, name: category.categoryName }
              }"
            >
              {{ category.categoryName }}
            </nuxt-link>
          </swiper-slide>
        </swiper>
      </div>
    </section>
    <div class="container mx-auto mt-10 px-5">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.468062899862!2d51.4203368151603!3d35.690097787093336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e018fb2a5417d%3A0xfcdcb284be05b19e!2z2b7Yp9iz2KfamCDYqNmH2KfYsQ!5e0!3m2!1sen!2snl!4v1623939174079!5m2!1sen!2snl"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        class="rounded-lg shadow-lg sm:ml-5 w-full h-[300px]"
      ></iframe>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  components: {},
  data() {
    return {
      swiperOption: {
        slidesPerView: 5.5,
        spaceBetween: 30,

        breakpoints: {
          1280: {
            slidesPerView: 5.5,
            spaceBetween: 40
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 40
          },
          640: {
            slidesPerView: 2.5,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1.5,
            spaceBetween: 10
          }
        }
      }
    };
  },
  computed: mapState(["list_category"])
};
</script>

<style scoped>
.header-background {
  background-image: linear-gradient(#00000090, #00000090), url("/img/bg.jpg");
  background-size: cover;
  background-position: top;
}
</style>
