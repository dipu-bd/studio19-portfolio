<template>
  <v-parallax height="100vh" src="/images/vbanner.jpg">
    <section id="design-section" data-anchor="methodology">
      <v-container fluid>
        <v-row align="center">
          <v-col cols="12" md="6" offset-md="3">
            <div class="section-intro">
              <h4 class="section-intro__title">How we think</h4>
              <h2 class="section-intro__subtitle">
                Our Design Methodology
              </h2>
            </div>
            <p>
              We share the widespread concern about the effects on the global environment of
              ill-considered construction. As designers, we believe it is vital that we take the
              initiative to establish solutions that will ensure a sustainable future for the built
              environment and so are committed to the design of buildings which minimize
              environmental impact and optimize energy efficiency, in both initial construction and
              lifetime cost.
            </p>
            <p>
              We involve our clients fully in all environmental matters aiming to agree and
              establish clear objectives early in the briefing process. Our design teams have the
              necessary experience to then act on these objectives and integrate sustainable
              technologies into our design proposals where we maintain international standard on
              sustainability for Environment Conscious Building and Landscape.
            </p>
            <!-- <v-btn outlined dark class="mt-4">Read More</v-btn> -->
          </v-col>
        </v-row>
      </v-container>
    </section>
  </v-parallax>
</template>

<script>
export default {
  //
};
</script>

<style lang="scss">
#design-section {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #343a40;

  .container {
    max-width: 1140px;
    margin: 100px 20px;
    background: rgba(#ededef, 0.75);
  }

  .section-intro__title {
    font-size: 0.75rem;
    color: #995c01;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  .section-intro__subtitle {
    font-family: oswald, sans-serif;
    font-weight: 300;
    font-size: 2.625rem;
    color: #000;
    margin-bottom: 1.5rem;
  }

  p {
    margin-bottom: 20px;
    color: #1f1f1f;
    font-size: 16px;
  }
}
</style>
