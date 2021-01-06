<template>
  <section id="hero-section" data-anchor="home" v-resize="onResize">
    <v-carousel
      id="hero-carousel"
      v-model="activeSlide"
      :cycle="true"
      :interval="30000"
      continuous
      height="100vh"
      show-arrows-on-hover
      hide-delimiter-background
      delimiter-icon="mdi-minus"
      :class="windowSize.x * 0.6 < windowSize.y ? 'slide-motion' : 'zoom-motion'"
    >
      <v-carousel-item v-for="(slide, i) in heros" :src="slide.image" eager :key="i">
        <v-card elevation="0">
          <v-card-title>{{ slide.title }}</v-card-title>
          <v-card-text v-html="slide.details" />
          <!-- <v-card-actions>
            <v-btn outlined color="#f9cc41">Details</v-btn>
          </v-card-actions> -->
          <div class="special-right"></div>
        </v-card>
      </v-carousel-item>
    </v-carousel>
  </section>
</template>

<script>
import heros from "@/assets/heros";

export default {
  data: () => ({
    heros,
    activeSlide: 0,
    windowSize: {
      x: 0,
      y: 0,
    },
  }),
  mounted() {
    this.onResize();
  },
  methods: {
    // getImage(url) {
    //   return (window.cachedImages && window.cachedImages[url]) || url;
    // },
    onResize() {
      this.windowSize = {
        x: window.innerWidth,
        y: window.innerHeight,
      };
    },
  },
};
</script>

<style lang="scss">
#hero-carousel {
  position: relative;
  text-shadow: 2px 2px 8px rgba($color: #000, $alpha: 1);

  .v-carousel__controls {
    white-space: nowrap;
    padding: 0 20px;
  }

  .v-image__image--cover {
    animation-delay: 2s;
    animation-duration: 28s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  &.zoom-motion {
    .v-image__image--cover {
      animation-name: scale-transtion;
    }

    @keyframes scale-transtion {
      from {
        transform: scale(1, 1);
      }
      to {
        transform: scale(1.4, 1.4);
      }
    }
  }

  &.slide-motion {
    .v-image__image--cover {
      animation-name: slide-transtion;
      background-position: left center !important;
      width: 178vh;
    }

    @keyframes slide-transtion {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(calc(-100% + 100vw));
      }
    }
  }

  .v-card {
    position: absolute;
    bottom: 80px;
    left: 10px;
    right: 10px;
    max-width: 500px;
    border-radius: 0;
    // padding: 15px;
    // padding-right: 35px;
    // background: transparent;
    background: rgba($color: #000000, $alpha: 0.1);

    @media only screen and (min-width: 600px) {
      right: auto;
      max-width: 500px;
      padding: 5px;
      bottom: 50px;
    }
  }

  .v-card__title,
  .v-card__text {
    // align-items: flex-start;
    text-align: left;
    padding: 5px;
  }

  // .v-card__title,
  // .v-card__actions {
  //   // justify-content: center;
  // }

  .v-card__title {
    color: #f9cc41;
    font-family: "Oswald", sans-serif;
    font-size: 24px;
    font-weight: 300;
    letter-spacing: 0.1rem;
    white-space: pre-wrap !important;
  }

  .v-card__text {
    color: #eee;
    font-size: 12px;
    letter-spacing: 0.05rem;
    b {
      color: #c9cca1;
    }
  }

  .v-card__actions {
    .v-btn {
      padding: 0 32px;
    }
  }
}
</style>
