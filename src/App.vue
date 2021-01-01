<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
.v-main {
  background-image: initial;
  background-color: #242424;
  color: rgb(171, 163, 161);
}
</style>
