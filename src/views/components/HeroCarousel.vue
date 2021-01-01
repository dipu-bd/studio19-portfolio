<template>
  <section id="hero-section" data-anchor="home" v-resize="onResize">
    <v-carousel
      id="hero-carousel"
      v-model="activeSlide"
      :cycle="true"
      :interval="30000"
      continuous
      :height="windowSize.x * 0.6 < windowSize.y ? '60vw' : '100vh'"
      show-arrows-on-hover
      hide-delimiter-background
      delimiter-icon="mdi-minus"
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
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
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

  .v-image__image {
    animation-name: scale-transtion;
    animation-delay: 4s;
    animation-duration: 26s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
  }

  @keyframes scale-transtion {
    0% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(1.25, 1.25);
    }
  }

  .v-card {
    position: absolute;
    bottom: 50px;
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
    }

    // div.special-right {
    //   content: "";
    //   display: block;
    //   position: absolute;
    //   width: 100%;
    //   height: 100%;
    //   background-color: rgba(#f9cc41, 0.8);
    //   clip-path: polygon(58% 0, 65% 6%, 94% 6%, 94% 38%, 100% 43%, 100% 0);
    //   left: 10px;
    //   top: -10px;
    //   z-index: 1;
    //   box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    //     0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    // }

    // &:before {
    //   content: "";
    //   display: block;
    //   position: absolute;
    //   width: 100%;
    //   height: 100%;
    //   background-color: rgba(#262535, 0.8);
    //   clip-path: polygon(58% 0, 65% 6%, 94% 6%, 94% 38%, 100% 43%, 100% 0);
    //   left: -35px;
    //   bottom: -28px;
    //   transform: rotate(180deg);
    //   z-index: 1;
    //   box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    //     0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    // }

    // &:after {
    //   content: "";
    //   position: absolute;
    //   width: 100%;
    //   height: 100%;
    //   top: 0;
    //   left: 0;
    //   clip-path: polygon(58% 0, 65% 6%, 94% 6%, 94% 38%, 100% 43%, 100% 100%, 0 100%, 0 0);
    //   background: rgba(#262533, 0.8);
    //   z-index: -1;
    //   box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    //     0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    // }
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

  @media only screen and (max-width: 600px) {
    .v-card__title {
      font-size: 1.25rem;
    }
    .v-card__text {
      display: none;
    }
  }
}
</style>
