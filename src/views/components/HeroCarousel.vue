<template>
  <v-carousel
    id="hero-carousel"
    :cycle="false"
    continuous
    height="100vh"
    show-arrows-on-hover
    hide-delimiter-background
    delimiter-icon="mdi-minus"
    touch
  >
    <v-carousel-item v-for="(slide, i) in slides" :src="slide.image" :key="i">
      <v-card width="400">
        <v-card-title>Dream Heaven City</v-card-title>
        <v-card-text>
          If you are looking at blank cassettes on the web Lorem ipsum dolor sit amet, consectetur
          adipisicing eiusmod tempor incididunt.
        </v-card-text>
        <v-card-actions>
          <v-btn outlined color="#f9cc41">Details</v-btn>
        </v-card-actions>
        <div class="special-right"></div>
      </v-card>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data: () => ({
    slides: [
      {
        image: "/images/hero-1.webp",
        title: "hero-1",
      },
      {
        image: "/images/hero-2.webp",
        title: "hero-2",
      },
      {
        image: "/images/hero-3.webp",
        title: "hero-3",
      },
    ],
  }),
};
</script>

<style lang="scss">
#hero-carousel {
  position: relative;

  .v-card {
    position: absolute;
    bottom: 100px;
    right: 100px;
    border-radius: 0;
    padding: 20px;
    text-align: center;
    background: transparent;

    .v-card__title,
    .v-card__actions {
      justify-content: center;
      padding: 25px;
    }

    .v-card__title {
      font-family: "Oswald", sans-serif;
      font-size: 32px;
      font-weight: 300;
    }

    .v-card__text {
      color: #afafaf;
    }

    .v-card__actions {
      .v-btn {
        padding: 0 32px;
      }
    }

    div.special-right {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #f9cc41;
      clip-path: polygon(58% 0, 65% 6%, 94% 6%, 94% 38%, 100% 43%, 100% 0);
      left: 10px;
      top: -10px;
      z-index: 1;
    }

    &:before {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(#262535, 0.96);
      clip-path: polygon(58% 0, 65% 6%, 94% 6%, 94% 38%, 100% 43%, 100% 0);
      left: -35px;
      bottom: -28px;
      transform: rotate(180deg);
      z-index: 1;
    }

    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      clip-path: polygon(58% 0, 65% 6%, 94% 6%, 94% 38%, 100% 43%, 100% 100%, 0 100%, 0 0);
      background: rgba(#262533, 0.96);
      z-index: -1;
    }
  }
}
</style>
