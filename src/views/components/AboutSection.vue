<template>
  <section id="about-section">
    <v-container fluid>
      <v-row align="center">
        <v-col cols="12" md="5">
          <v-img class="section-media" src="/images/about.webp" />
        </v-col>
        <v-col cols="12" md="7" class="pl-xl-5">
          <div class="section-intro">
            <h4 class="section-intro__title">About our Company</h4>
            <h2 class="section-intro__subtitle">
              We've been creating <br />
              Awesome Since 1992
            </h2>
          </div>
          <p>
            If you are looking at blank cassettes on the web lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam. Eiusmod tempor incididunt ut labore et dolore magna aliqua
            consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
          <p>
            If you are looking at blank cassettes on the web lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor incididunt.
          </p>
          <v-btn outlined dark class="mt-4">Read More</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  //
};
</script>

<style lang="scss">
#about-section {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 300px);
  padding: 50px 20px;

  .container {
    max-width: 1140px;
  }

  @media only screen and (min-width: 900px) {
    padding: 50px;

    .container {
      max-height: 600px;
    }
  }

  .section-media {
    margin: 20px;
    object-fit: contain;
  }

  .section-intro__title {
    font-size: 0.75rem;
    color: #f9cc41;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  .section-intro__subtitle {
    font-family: oswald, sans-serif;
    font-weight: 300;
    font-size: 2.625rem;
    color: #fff;
    margin-bottom: 1.5rem;
  }

  p {
    margin-bottom: 20px;
    color: #afafaf;
    font-size: 14px;
  }
}
</style>
