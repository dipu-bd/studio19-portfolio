<template>
  <v-carousel
    id="hero-carousel"
    cycle
    continuous
    height="100vh"
    show-arrows-on-hover
    hide-delimiter-background
    delimiter-icon="mdi-minus"
    touch
  >
    <v-carousel-item
      v-for="(slide, i) in heros"
      :src="slide.image"
      lazy-src="content/hero/hero1.jpg"
      :key="i"
    >
      <v-card elevation="5">
        <v-card-title>{{ slide.title }}</v-card-title>
        <v-card-text v-html="slide.details" />
        <!-- <v-card-actions>
          <v-btn outlined color="#f9cc41">Details</v-btn>
        </v-card-actions> -->
        <div class="special-right"></div>
      </v-card>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import heros from "@/assets/heros";

export default {
  data: () => ({
    heros,
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
    padding: 15px;
    padding-right: 35px;
    background: transparent;
    text-align: center;
    max-width: 500px;

    @media only screen and (min-width: 600px) {
      width: 500px;
    }

    .v-card__title,
    .v-card__actions {
      justify-content: center;
      padding: 25px;
    }

    .v-card__title {
      color: #f9cc41;
      font-family: "Oswald", sans-serif;
      font-size: 32px;
      font-weight: 300;
      letter-spacing: 0.1rem;
      white-space: pre-wrap !important;
      padding: 25px;
    }

    .v-card__text {
      color: #eee;
      font-size: 16px;
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

    div.special-right {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(#f9cc41, 0.5);
      clip-path: polygon(58% 0, 65% 6%, 94% 6%, 94% 38%, 100% 43%, 100% 0);
      left: 10px;
      top: -10px;
      z-index: 1;
      box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
        0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    }

    &:before {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(#262535, 0.8);
      clip-path: polygon(58% 0, 65% 6%, 94% 6%, 94% 38%, 100% 43%, 100% 0);
      left: -35px;
      bottom: -28px;
      transform: rotate(180deg);
      z-index: 1;
      box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
        0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    }

    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      clip-path: polygon(58% 0, 65% 6%, 94% 6%, 94% 38%, 100% 43%, 100% 100%, 0 100%, 0 0);
      background: rgba(#262533, 0.8);
      z-index: -1;
      box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
        0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    }
  }
}
</style>
