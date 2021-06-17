<template>
  <div class="relative">
    <vue-particles
    v-if="$route.path === '/about'"
      color="#999999"
      :particleOpacity="0.7"
      :particlesNumber="30"
      shapeType="circle"
      :particleSize="4"
      linesColor="#999999"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.7"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="false"
      clickMode="push"
      class="absolute top-0 right-0 w-full h-full"
      style="z-index: -5"
    >
    </vue-particles>
    <app-header />
    <Nuxt />
    <app-footer />
  </div>
</template>

<script>
export default {};
</script>

<style></style>
