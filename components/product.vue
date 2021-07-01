<template>
  <div
    class="p-4 h-[300px] cursor-pointer w-[240px] rounded-xl border-2 border-black border-opacity-10 shadow-md"
    @click="productDetail(data.id)"
  >
    <img
      :src="makeImgUrl(data.image)"
      alt=""
      class="w-[190px] h-[150px] mx-auto rounded-xl"
    />
    <h3 class="text-lg mt-3 font-bold text-center">{{ data.name }}</h3>
    <h6 class="text-md mt-2 text-center">{{ data.price ? data.price : "قیمت مشخص نشده"}}</h6>
    <a href="tel:09127141877" class="text-sm mt-3 text-center hover:underline">
      برای سفارش خرید تماس بگیرید
    </a>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    makeImgUrl(val) {
      const url = 'http://api.electronasr.ir' + decodeURIComponent(val);
      return url;
    },
    productDetail(id) {
      this.$router.push({ path: "/product-detail", query: { id }})
    }
  }
};
</script>
