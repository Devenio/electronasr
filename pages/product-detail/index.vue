<template>
  <div class="container mx-auto">
    <div class="mx-auto text-center relative w-full">
      <h1 class="text-xl sm:text-4xl font-bold mt-10 px-3">
        صفحه جزییات محصول <span class="text-main">{{ detail.name }}</span>
      </h1>
      <h6 class="text-xs sm:text-base mt-3 px-3 opacity-75">
        در این صفحه میتونید جزییات محصول "{{ detail.name }}" رو مشاهده کنید و برای سفارش میتونید با یکی از شماره های درج شده تماس بگیرید
      </h6>
      <div class="h-[2px] w-[300px] mx-auto bg-main mt-5"></div>
    </div>
    <div
      class="w-full mt-10 flex flex-col items-center justify-center space-y-5 lg:space-y-0 md:flex-row-reverse"
    >
      <img
        :src="makeImgUrl(detail.image)"
        class="zoom md:mx-3 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] border-2 rounded-xl border-gray-300 shadow-lg"
        :alt="detail.name"
      />
      <div
        class="lg:text-lg p-5 md:mx-3 w-[300px] min-h-[300px] lg:w-[400px] lg:h-[400px] border-2 rounded-xl border-gray-300 shadow-lg"
        dir="rtl"
      >
        <h3 class="flex items-center">
          <span>{{ detail.name }}</span>
          <div class="h-[1px] flex-grow mr-3 bg-main"></div>
        </h3>
        <h3 class="mt-5">توضیحات :</h3>
        <p class="opacity-75">+ {{ detail.description }}</p>
        <p class="mt-5">
          قیمت :
          {{ detail.price ? detail.price : "برای اطلاع از قیمت تماس بگیرید" }}
        </p>
        <h3 class="mt-5">
          تلفن های تماس :
          <br />
          <div class="opacity-75 text-base flex items-center mt-2">
            <fa :icon="['fas', 'angle-left']" class="ml-2 text-gray-700" />
            موبایل :
            <a href="tel:09127141877" class="hover:underline inline"
              >09127141877</a
            >
          </div>
          <div class="opacity-75 text-base flex items-center">
            <fa :icon="['fas', 'angle-left']" class="ml-2 text-gray-700" />
            تلفن ثابت :
            <a href="tel:02133123216" class="hover:underline inline"
              >02133123216</a
            >
          </div>
          <div class="opacity-75 text-base flex items-center">
            <fa :icon="['fas', 'angle-left']" class="ml-2 text-gray-700" />
            تلفکس :
            <a href="tel:02136058416" class="hover:underline inline"
              >02136058416</a
            >
          </div>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, query }) {
    const productId = query.id;
    const { data } = await $axios.get(`/DetailServices/${productId}`);
    return {
      detail: data
    };
  },
  methods: {
    makeImgUrl(val) {
      const url = "http://45.147.77.128" + decodeURIComponent(val);
      return url;
    }
  }
};
</script>
