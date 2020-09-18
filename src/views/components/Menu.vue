<template>
  <div @click="visible = !visible">
    <v-sheet id="main-menu-button" v-ripple>
      <div class="menu-section">
        <div class="menu-toggle" :class="{ on: visible }">
          <div class="one"></div>
          <div class="two"></div>
          <div class="three"></div>
        </div>
      </div>
    </v-sheet>

    <nav id="main-menu" :class="{ visible }">
      <v-list color="transparent" dark>
        <v-list-item v-ripple="false" @click="scrollTo('home')">
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item v-ripple="false" @click="scrollTo('about')">
          <v-list-item-title>About</v-list-item-title>
        </v-list-item>
        <v-list-item v-ripple="false" @click="scrollTo('methodology')">
          <v-list-item-title>How we think</v-list-item-title>
        </v-list-item>
        <v-list-item v-ripple="false" @click="scrollTo('projects')">
          <v-list-item-title>Project</v-list-item-title>
        </v-list-item>
        <v-divider />
        <v-list-item
          v-ripple="false"
          v-for="(portfolio, i) in portfolios"
          :key="i"
          @click="scrollTo(portfolio.type)"
        >
          <v-list-item-title class="small">{{ portfolio.type }}</v-list-item-title>
        </v-list-item>
        <v-divider />
        <v-list-item v-ripple="false" @click="scrollTo('footer')">
          <v-list-item-title>Contact Us</v-list-item-title>
        </v-list-item>
      </v-list>
    </nav>
  </div>
</template>

<script>
import portfolios from "@/assets/portfolio";

export default {
  data: () => ({
    visible: false,
    portfolios,
  }),

  methods: {
    scrollTo(name) {
      const el = document.querySelector(`*[data-anchor="${name}"]`);
      this.$scrollTo(el);
    },
  },
};
</script>

<style lang="scss">
#main-menu-button {
  cursor: pointer;
  position: fixed;
  top: 0;
  right: 0;
  width: 100px;
  height: 100px;
  z-index: 15;
  background: transparent;
  // border-bottom-left-radius: 10px;

  .menu-toggle {
    cursor: pointer;
    width: 40px;
    height: 30px;
    position: absolute;
    top: 30px;
    right: 30px;
    z-index: 15;
  }

  .menu-section.on {
    position: absolute;
    z-index: 15;
    width: 100%;
    height: 100%;
    display: block;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .one,
  .two,
  .three {
    width: 100%;
    height: 2px;
    background: #f1592a;
    margin: 10px auto;
    backface-visibility: hidden;
    transition: all 0.6s;
  }

  .two {
    width: 60%;
  }

  .three {
    width: 80%;
  }

  .menu-toggle.on {
    .one {
      transform: rotate(45deg) translate(7px, 7px);
    }
    .two {
      opacity: 0;
    }
    .three {
      transform: rotate(-45deg) translate(8px, -10px);
      width: 100%;
    }
  }
}

#main-menu {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background: rgba(#262533, 0.9);
  backface-visibility: hidden;
  transform: translate(300px, 0);
  transition: all 0.3s;
  z-index: 12;

  @media screen and (min-height: 620px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  &.visible {
    overflow: hidden auto;
    transform: translate(0, 0);
  }

  .v-list-item {
    margin: 0 10px;
  }

  .v-list-item__title {
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    text-transform: capitalize;
    font-family: "Oswald", sans-serif;
    letter-spacing: 1px;
    font-size: 24px;
    padding: 20px;
    text-align: center;
  }

  .v-list-item__title.small {
    font-size: 20px;
    color: #cfcfcf;
  }

  .v-list-item__title:hover {
    background: transparent;
    color: #f9cc41;
  }
}
</style>
