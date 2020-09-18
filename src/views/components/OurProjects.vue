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
          <template v-if="project.specs">
            <v-col cols="12" md="9">
              <div class="portfolio__img" :class="{ expandable: $vuetify.breakpoint.mdAndUp }">
                <ProjectCarousel
                  v-if="project.specs"
                  :interval="15000 + Math.random() * 5000"
                  :project="project"
                  :height="$vuetify.breakpoint.smAndDown ? '56vw' : '535px'"
                >
                </ProjectCarousel>
                <FullscreenDialog :project="project" />
              </div>
            </v-col>
            <v-col cols="12" md="3" class="pb-10 px-md-5">
              <h4 class="section-intro__title left-border" v-if="project.specs.Type">
                {{ project.specs.Type }}
              </h4>
              <h2 class="section-intro__subtitle small">{{ project.title }}</h2>

              <p>
                <span v-for="key in Object.keys(project.specs)" :key="key">
                  <b>{{ key }}:</b> {{ project.specs[key] }} <br />
                </span>
              </p>

              <!-- <v-btn outlined class="px-10" dark @click="more">Explore Images</v-btn> -->
            </v-col>
          </template>
          <v-col cols="12" v-else>
            <v-sheet class="hidden-title">
              <h2 class="section-intro__subtitle small text-center pb-2">
                {{ project.title }}
              </h2>
              <ProjectCarousel
                no-animation
                :interval="15000 + Math.random() * 5000"
                :project="project"
                :height="$vuetify.breakpoint.mdAndDown ? '67vw' : '902px'"
              />
            </v-sheet>
          </v-col>
        </v-row>
      </template>
    </v-container>
  </section>
</template>

<script>
import portfolios from "@/assets/portfolio";
import ProjectCarousel from "@/views/components/ProjectCarousel.vue";
import FullscreenDialog from "@/views/components/FullscreenDialog.vue";

export default {
  components: {
    ProjectCarousel,
    FullscreenDialog,
  },
  data: () => ({
    portfolios,
  }),
  // methods: {
  //   getImage(url) {
  //     return (window.cachedImages && window.cachedImages[url]) || url;
  //   },
  // },
};
</script>

<style lang="scss">
#projects-section {
  color: #afafaf;
  font-size: 14px;
  min-height: 100vh;
  padding: 50px 0;

  @media screen and (min-width: 900px) {
    padding: 50px 20px;
  }

  .container {
    max-width: 1300px;
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

    &.left-border {
      padding-left: 35px;
      position: relative;
    }

    &.left-border:after {
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

    &.bottom-border {
      padding-bottom: 30px;
      margin-bottom: 20px;
      position: relative;

      @media screen and (min-width: 900px) {
        margin-bottom: 50px;
      }
    }

    &.bottom-border:after {
      content: "";
      display: block;
      height: 2px;
      min-width: 100px;
      position: absolute;
      bottom: 0;
      left: 0;
      background: #f9cc41;
    }
  }

  .hidden-title h2 {
    background: rgba(#263238, 0.9);
    margin-bottom: 0;
  }

  .divider-item {
    width: 200px;
    height: 8px;
    margin: 70px auto;
    background: #f9cc41;
    border-radius: 20px;
  }

  .portfolio__img {
    position: relative;
    background: rgba(#263238, 0.1);
  }

  .zoom-button {
    display: none;
  }

  .portfolio__img.expandable:hover {
    .v-responsive__content {
      box-shadow: 0 0 20px rgb(#000, 0.75) inset;
      // background: rgba(#000, 0.25);
    }
    .zoom-button {
      color: white;
      display: block;
      position: absolute;
      top: calc(50% - 40px);
      left: calc(50% - 40px);
      background: radial-gradient(#000, transparent);
    }
  }
}
</style>
