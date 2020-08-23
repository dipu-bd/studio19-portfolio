<template>
  <section id="projects-section">
    <v-container fluid>
      <div class="section-intro">
        <h4 class="section-intro__title">OUR PORTFOLIO</h4>
        <h2 class="section-intro__subtitle bottom-border">Latest Completed Projects</h2>
      </div>

      <template v-for="(portfolio, i) in portfolios">
        <v-row class="pb-md-5 mb-4 align-items-end" :class="{ 'row-reverse': i % 2 }" :key="i">
          <v-col md="7">
            <div class="portfolio__img">
              <img class="img-fluid" :src="portfolio.image" :alt="portfolio.name" />
            </div>
          </v-col>
          <v-col md="5" class="pb-10 pl-xl-5">
            <h4 class="section-intro__title left-border">{{ portfolio.date }}</h4>
            <h2 class="section-intro__subtitle small">{{ portfolio.name }}</h2>
            <p>{{ portfolio.details }}</p>
            <v-btn
              outlined
              dark
              class="mt-3 px-8"
              target="_blank"
              :href="portfolio.link"
              v-if="portfolio.link"
              >Read More</v-btn
            >
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
};
</script>

<style lang="scss">
#projects-section {
  color: #afafaf;
  font-size: 14px;
  min-height: 100vh;
  padding: 50px 20px;

  .container {
    max-width: 1140px;
  }

  .align-items-end {
    align-items: flex-end;
    &.row-reverse {
      flex-direction: row-reverse;
    }
  }

  .portfolio__img {
    padding: 0 20px;
  }

  .img-fluid {
    max-width: 100%;
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
  }

  .section-intro__subtitle.bottom-border {
    padding-bottom: 30px;
    margin-bottom: 50px;
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
}
</style>
