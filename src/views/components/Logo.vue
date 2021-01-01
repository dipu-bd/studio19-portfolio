<template>
  <v-sheet id="logo-div" v-ripple="false" elevation="5">
    <v-img contain src="/images/logo.png" transition="scale-transition" rel="preload" />
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
  width: 50px;
  height: 50px;
  background: #f1592a;
  z-index: 10;
  padding-top: 5px;
  padding-left: 10px;
  // border-bottom-right-radius: 10px;
  // @media only screen and (min-width: 900px) {
  //   position: fixed;
  // }

  @media only screen and (min-width: 700px) {
    width: 80px;
    height: 80px;
  }

  @media only screen and (min-width: 1024px) {
    width: 100px;
    height: 100px;
  }
}
</style>
