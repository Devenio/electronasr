<template>
  <div class="w-full p-5 relative">
    <div class="relative z-10">
      <img src="/img/group2.svg" class="mx-auto lg:mt-10" alt="" />
      <h1 class="font-bold text-lg sm:text-4xl mt-5 lg:mt-8 text-center">
        درباره فروشگاه محصولات برق و الکتریکی
        <strong class="text-main">الکترونصر</strong>
      </h1>
    </div>
    <div class="container mx-auto relative z-10">
      <p class="sm:text-lg leading-snug mt-5 text-center sm:px-16" dir="rtl">
        فروشگاه الکترونصر فعالیت خود را از سال 1366 آغاز نموده و همگام با ارتقائ
        و پیشرفت صنعت کشور در سال 1380 با تولیدات و واردات کلیه تجهیزات برق
        صنعتی در این خصوص در خدمت شرکت ها و ادارات و ... می باشد. ما توانسته ایم
        بخش زیادی از بازار برق و الکترونیک را برای مصرف کنندگان و مخاطبان در این
        حوزه فراهم سازیم. این فروشگاه همواره تلاش دارد تا رضایت کامل شما عزیزان
        را که بزرگترین سرمایه میباشید، جلب نماید.
      </p>
      <div
        class="mt-10 sm:mt-16 flex flex-col sm:flex-row-reverse sm:items-start justify-center items-center"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.468062899862!2d51.4203368151603!3d35.690097787093336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e018fb2a5417d%3A0xfcdcb284be05b19e!2z2b7Yp9iz2KfamCDYqNmH2KfYsQ!5e0!3m2!1sen!2snl!4v1623939174079!5m2!1sen!2snl"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          class="rounded-lg shadow-lg sm:ml-5 w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
        ></iframe>
        <div
          dir="rtl"
          class="mt-3 sm:mt-0 flex flex-col sm:items-start items-center"
        >
          <div>
            <fa
              :icon="['fas', 'map-marker-alt']"
              class="text-xl ml-2 text-red-700"
            />
            <h1 class="inline-block text-lg sm:text-2xl font-bold">آدرس :</h1>
          </div>
          <p class="text-center px-3 sm:text-right sm:px-0 sm:text-lg mt-2">
            لاله زار جنوبی، پاساژ بهار، راهروی سمت چپ، طبقه اول، پلاک 2/81
          </p>
          <div>
            <fa :icon="['fas', 'phone']" class="text-xl ml-2 text-red-700" />
            <h1 class="inline-block text-lg sm:text-2xl font-bold mt-3">
              تلفن ها :
            </h1>
          </div>
          <p class="mt-2 sm:text-lg">
            <fa :icon="['fas', 'angle-left']" class="ml-2 text-gray-700" />
            موبایل :
            <a href="tel:09127141877" class="underline">09127141877</a>
          </p>
          <p class="mt-2 sm:text-lg">
            <fa :icon="['fas', 'angle-left']" class="ml-2 text-gray-700" />
            تلفن ثابت :
            <a href="tel:02133123216" class="underline">02133123216</a>
          </p>
          <p class="mt-2 sm:text-lg">
            <fa :icon="['fas', 'angle-left']" class="ml-2 text-gray-700" />
            تلفکس :
            <a href="tel:02136058416" class="underline">02136058416</a>
          </p>

          <h1 class="text-xl font-bold mt-5">عباس توفیقی</h1>

          <div class="mt-3 flex items-center">
            <fa :icon="['fas', 'exclamation']" class="text-xl ml-2 text-red-700" />
            <h1 class="inline-block sm:text-lg text-center sm:text-right mt-3">
              .برای سفارش محصولات میتوانید با یکی از شماره تلفن های بالا تماس بگیرید
            </h1>
          </div>
          <nuxt-link
            to="/about"
            class="cursor-pointer py-3 px-5 text-white mt-5 bg-green-700 rounded-lg"
          >
            مشاهده محصولات
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped></style>
