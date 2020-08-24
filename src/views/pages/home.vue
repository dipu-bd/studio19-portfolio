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
import axios from "axios";
import portfolios from "@/assets/portfolio";

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
    this.downloadAssets();
  },
  methods: {
    async downloadAssets() {
      window.cachedImages = {};
      this.progress = 0;
      this.loading = true;
      const images = [];
      for (const portfolio of portfolios) {
        for (const project of portfolio.projects) {
          images.push(...project.images);
        }
      }
      const batchSize = 10;
      for (let i = 0; i < images.length; i += batchSize) {
        let finish = 0;
        await Promise.all(
          images.slice(i, i + batchSize).map(async url => {
            window.cachedImages[url] = await this.downloadImage(url, 2);
            finish++;
            this.progress = (100 * (i + finish)) / images.length;
          })
        );
        this.progress = (100 * (i + batchSize)) / images.length;
      }
      this.loading = false;
    },

    async downloadImage(url, retry = 0) {
      while (retry >= 0) {
        try {
          const response = await axios.get(url, {
            responseType: "arraybuffer",
          });
          const base64 = Buffer.from(response.data, "binary").toString("base64");
          return "data:image/jpeg;base64, " + base64;
        } catch (err) {
          retry--;
        }
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
