<template>
  <v-carousel
    cycle
    continuous
    :height="height"
    :interval="interval"
    :hide-delimiters="true"
    hide-delimiter-background
    delimiter-icon="mdi-minus"
    :show-arrows="project.images.length > 1"
    :show-arrows-on-hover="project.images.length > 1"
    class="project-carousel"
    :class="{ 'image-animation': !noAnimation }"
  >
    <v-carousel-item v-for="(src, i) in project.images" :key="i" :src="src" contain eager>
      <slot></slot>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  props: {
    project: {
      type: [Object],
      required: true,
    },
    height: {
      type: [String, Number],
      required: true,
    },
    interval: {
      type: [Number],
      default: () => 10000,
    },
    noAnimation: {
      type: [Boolean],
      default: () => false,
    },
  },
};
</script>

<style lang="scss">
.project-carousel {
  .v-carousel__controls {
    white-space: nowrap;
    padding: 0 20px;
  }

  &.image-animation {
    .v-image__image {
      animation-name: scale-transtion;
      animation-duration: 30s;
    }

    @keyframes scale-transtion {
      from {
        transform: scale(1, 1);
      }
      to {
        transform: scale(1.25, 1.25);
      }
    }
  }
}
</style>
