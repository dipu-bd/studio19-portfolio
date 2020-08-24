<template>
  <section id="projects-section" data-anchor="projects">
    <v-container fluid v-for="(portfolio, i) in portfolios" :key="i">
      <div class="divider-item" v-if="i > 0">&nbsp;</div>

      <div class="section-intro" :data-anchor="portfolio.type">
        <!-- <h4 class="section-intro__title"></h4> -->
        <h2 class="section-intro__subtitle bottom-border">{{ portfolio.type }}</h2>
      </div>

      <template v-for="(project, i) in portfolio.projects">
        <v-row class="pb-md-5 mb-16 align-items-end" :class="{ 'row-reverse': i % 2 }" :key="i">
          <v-col cols="12" :md="project.specs ? 8 : 12">
            <div class="portfolio__img">
              <v-carousel
                cycle
                continuous
                :interval="10000 + i * 500"
                :show-arrows="false"
                hide-delimiter-background
                delimiter-icon="mdi-minus"
                height=""
              >
                <v-carousel-item
                  v-for="(src, i) in project.images"
                  :key="i"
                  :src="getImage(src)"
                  contain
                  eager
                >
                  <v-sheet class="hidden-title" v-if="!project.specs">
                    <h2 class="section-intro__subtitle small text-center pb-2">
                      {{ project.title }}
                    </h2>
                  </v-sheet>
                </v-carousel-item>
              </v-carousel>
            </div>
          </v-col>
          <v-col cols="12" md="4" class="pb-10 px-md-5" v-if="project.specs">
            <h4 class="section-intro__title left-border" v-if="project.specs.Type">
              {{ project.specs.Type }}
            </h4>
            <h2 class="section-intro__subtitle small">{{ project.title }}</h2>

            <p v-if="project.specs">
              <span v-for="key in Object.keys(project.specs)" :key="key">
                <b>{{ key }}:</b> {{ project.specs[key] }} <br />
              </span>
            </p>

            <!-- <v-btn outlined class="px-10" dark @click="more">Explore Images</v-btn> -->
          </v-col>
        </v-row>
      </template>
    </v-container>
  </section>
</template>

<script>
import portfolios from "@/assets/portfolio";

export default {
  data: () => ({
    portfolios,
  }),
  methods: {
    getImage(url) {
      return (window.cachedImages && window.cachedImages[url]) || url;
    },
  },
};
</script>

<style lang="scss">
#projects-section {
  color: #afafaf;
  font-size: 14px;
  min-height: 100vh;
  padding: 50px 0;

  .v-carousel__controls {
    white-space: nowrap;
    padding: 0 20px;
  }

  .container {
    max-width: 1140px;
  }

  .align-items-end {
    align-items: flex-end;
    &.row-reverse {
      flex-direction: row-reverse;
    }
  }

  .section-intro__title {
    font-size: 0.75rem;
    color: #f9cc41;
    margin-bottom: 1rem;
    text-transform: uppercase;
    line-height: 1.5em;
  }

  .section-intro__subtitle {
    font-family: oswald, sans-serif;
    font-weight: 300;
    font-size: 2.625rem;
    color: #fff;
    margin-bottom: 1.5rem;
    line-height: 1.5em;

    &.small {
      font-size: 2rem;
    }
  }

  .hidden-title {
    background: rgba(#263238, 0.9);
  }

  .section-intro__subtitle.bottom-border {
    padding-bottom: 30px;
    margin-bottom: 20px;
    position: relative;
  }
  .section-intro__subtitle.bottom-border:after {
    content: "";
    display: block;
    height: 2px;
    min-width: 100px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: #f9cc41;
  }

  .section-intro__title.left-border {
    padding-left: 35px;
    position: relative;
  }
  .section-intro__title.left-border:after {
    content: "";
    display: block;
    min-width: 20px;
    height: 2px;
    background: #f9cc41;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }

  .divider-item {
    width: 200px;
    height: 8px;
    margin: 70px auto;
    background: #f9cc41;
    border-radius: 20px;
  }

  @media screen and (min-width: 900px) {
    padding: 50px 20px;

    .portfolio__img {
      padding: 0 20px;
    }

    .section-intro__subtitle.bottom-border {
      margin-bottom: 50px;
    }
  }
}
</style>
