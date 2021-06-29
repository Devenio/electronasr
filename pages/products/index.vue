<template>
  <div class="w-full">
    <div class="mx-auto text-center relative w-full">
      <h1 class="text-xl sm:text-4xl font-bold mt-10 px-3">
        به بخش <span class="text-main">محصولات</span> سایت خوش آمدید
      </h1>
      <h6 class="text-xs sm:text-base mt-3 px-3 opacity-75">
        جهت مشاهده جزییات هر محصول روی آن محصول کلیک کنید
      </h6>
      <div class="h-[2px] w-[300px] mx-auto bg-main mt-5"></div>
    </div>
    <div class="container mx-auto mt-10 flex flex-col-reverse items-center">
      <section class="flex items-center justify-center flex-wrap">
        <product
          v-for="service in list_services"
          :key="service.id"
          :isSlide="false"
          class="mx-3 mb-5"
          :data="service"
        />
      </section>
      <section
        class="border-2 p-5 border-gray-200 shadow-md rounded-lg mb-5"
        dir="rtl"
      >
        <div>
          نام دسته بندی : <span>{{ $route.query.name }}</span>
        </div>
        <div>
          تعداد کالا : <span>{{ list_services.length }}</span>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, query }) {
    const categorId = query.id;
    const { data } = await $axios.get(`/ListServices/${categorId}`);
    console.log(data);
    return {
      list_services: data
    };
  }
};
</script>

<style scoped></style>
