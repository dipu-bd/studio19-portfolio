<template>
  <section id="about-section" data-anchor="about">
    <v-container fluid>
      <v-row align="center">
        <v-col cols="12" md="5">
          <v-img class="section-media" src="/images/about.webp" rel="preload" />
        </v-col>
        <v-col cols="12" md="7" class="pl-xl-5">
          <div class="section-intro">
            <h4 class="section-intro__title">About our Company</h4>
            <h2 class="section-intro__subtitle">
              We've been creating <br />
              Awesome Since 2019
            </h2>
          </div>
          <p>
            Rafayel Raj Akash founded Studio 19 ARCHITECTS in 2019. We are a private company that
            specializes in conceiving modern, high-caliber solutions for architectural design and
            urban planning projects. From the Office in Dhaka , we service the whole country in
            progressive architectural design and supervision. Our team of Architects and Engineers
            has successfully developed functional and meaningful projects all over the country.
          </p>
          <p>
            We defines architecture as the art and science of making sure our cities and buildings
            fit with the way we want to live our lives. Through careful analysis of various
            parameters from local culture and climate, ever-changing patters of contemporary life,
            to the ebbs and flows of the global economy, We believes in the idea of
            information-driven-design as the driving force for his design process. We have designed
            and completed many buildings , Monuments , landscape and interior spaces throughout the
            country.
          </p>
          <!-- <v-btn outlined dark class="mt-4">Read More</v-btn> -->
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
  min-height: 100vh;
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
    font-size: 2rem;
    color: #fff;
    margin-bottom: 1.5rem;

    @media only screen and (min-width: 600px) {
      font-size: 2.625rem;
    }
  }

  p {
    margin-bottom: 20px;
    color: #afafaf;
    font-size: 14px;
  }
}
</style>
