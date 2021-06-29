<template>
  <div class="container mx-auto">
    <div
      class="w-full mt-10 flex flex-col items-center justify-center space-y-5 lg:space-y-0 lg:flex-row-reverse"
    >
      <img
        :src="makeImgUrl(detail.image)"
        class="zoom lg:mx-3 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] border-2 rounded-xl border-gray-300 shadow-lg"
        :alt="detail.name"
      />
      <div
        class="text-lg p-5 lg:mx-3 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] border-2 rounded-xl border-gray-300 shadow-lg"
        dir="rtl"
      >
        <h3>
          نام محصول : <span class="opacity-75">{{ detail.name }}</span>
        </h3>
        <h3>توضیحات محصول :</h3>
        <p class="opacity-75">+ {{ detail.description }}</p>
        <h3>
          قیمت :
          {{ detail.price ? detail.price : "برای اطلاع از قیمت تماس بگیرید" }}
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
    console.log(data);
    return {
      detail: data
    };
  },
  methods: {
    makeImgUrl(val) {
      const url = "http://45.147.77.128" + decodeURIComponent(val);
      console.log(url);
      return url;
    }
  }
};
</script>
