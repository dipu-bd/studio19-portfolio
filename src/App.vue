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
  background-color: rgb(30, 30, 41);
  color: rgb(161, 153, 141);
}
</style>
