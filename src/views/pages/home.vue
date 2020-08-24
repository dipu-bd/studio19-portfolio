<template>
  <div>
    <Logo />
    <HeroCarousel />
    <AboutSection />
    <!-- <CounterSection /> -->
    <OurProjects />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    Logo: () => import("@/views/components/Logo.vue"),
    HeroCarousel: () => import("@/views/components/HeroCarousel.vue"),
    AboutSection: () => import("@/views/components/AboutSection.vue"),
    // CounterSection: () => import("@/views/components/CounterSection.vue"),
    OurProjects: () => import("@/views/components/OurProjects.vue"),
  },
};
</script>
