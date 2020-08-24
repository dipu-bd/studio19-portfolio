<template>
  <div>
    <Logo />
    <Menu />
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
    Menu: () => import("@/views/components/Menu.vue"),
    HeroCarousel: () => import("@/views/components/HeroCarousel.vue"),
    AboutSection: () => import("@/views/components/AboutSection.vue"),
    // CounterSection: () => import("@/views/components/CounterSection.vue"),
    OurProjects: () => import("@/views/components/OurProjects.vue"),
  },
};
</script>
