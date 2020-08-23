<template>
  <v-sheet id="logo-div" v-ripple="false" elevation="5">
    <v-img contain src="/images/logo.png" transition="scale-transition" />
  </v-sheet>
</template>

<script>
export default {
  //
};
</script>

<style lang="scss">
#logo-div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  background: #f1592a;
  z-index: 10;
  padding: 10px;
}
</style>
