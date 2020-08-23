<template>
  <div>
    <HeroCarousel />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    HeroCarousel: () => import("@/views/components/HeroCarousel.vue"),
  },
};
</script>
