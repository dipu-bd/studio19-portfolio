<template>
  <v-dialog v-model="dialog" width="142.2vh">
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon x-large width="80px" height="80px" class="zoom-button" v-bind="attrs" v-on="on">
        <v-icon>mdi-overscan</v-icon>
      </v-btn>
    </template>
    <v-card color="transparent">
      <v-toolbar dark color="transparent" class="px-4">
        <v-toolbar-title>{{ project.title }}</v-toolbar-title>
        <v-spacer />
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <slot>
        <ProjectCarousel :interval="interval" :project="project" no-animation height="80vh" />
      </slot>
    </v-card>
  </v-dialog>
</template>

<script>
import ProjectCarousel from "@/views/components/ProjectCarousel.vue";

export default {
  components: {
    ProjectCarousel,
  },
  props: {
    project: {
      type: [Object],
      required: true,
    },
    interval: {
      type: [Number],
      default: () => 60000,
    },
  },
  data: () => ({
    dialog: false,
  }),
};
</script>
