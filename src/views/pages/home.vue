<template>
  <div v-if="loading">
    <div id="loading-view">
      <div class="text-center">
        <v-progress-circular
          :rotate="360"
          :size="100"
          :width="15"
          :value="progress"
          color="rgba(249, 204, 65, 0.8)"
        >
          {{ progress.toFixed(0) }}%
        </v-progress-circular>
      </div>
    </div>
  </div>
  <div v-else>
    <Logo />
    <Menu />
    <HeroCarousel />
    <AboutSection />
    <DesignMethodology />
    <!-- <CounterSection /> -->
    <OurProjects />
    <ContactUs />
  </div>
</template>

<script>
import { downloadAssets } from "@/utils/image-cache";

export default {
  name: "Home",
  components: {
    Logo: () => import("@/views/components/Logo.vue"),
    Menu: () => import("@/views/components/Menu.vue"),
    HeroCarousel: () => import("@/views/components/HeroCarousel.vue"),
    AboutSection: () => import("@/views/components/AboutSection.vue"),
    DesignMethodology: () => import("@/views/components/DesignMethodology.vue"),
    // CounterSection: () => import("@/views/components/CounterSection.vue"),
    OurProjects: () => import("@/views/components/OurProjects.vue"),
    ContactUs: () => import("@/views/components/ContactUs.vue"),
  },
  data: () => ({
    loading: true,
    progress: 0,
  }),
  mounted() {
    this.download();
  },
  methods: {
    async download() {
      try {
        this.progress = 0;
        this.loading = true;
        //setTimeout(() => (this.loading = false), 10000);
        await Promise.race([
          downloadAssets(
            percent => {
              this.progress = percent;
            },
            () => !this.loading
          ),
          new Promise(resolve => {
            setTimeout(resolve, 10000);
          }),
        ]);
      } catch (err) {
        console.error(err);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss">
#loading-view {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>
