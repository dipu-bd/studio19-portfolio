<template>
  <section id="counter-section">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="3" class="mb-4 mb-xl-0">
          <div class="media align-items-center overview__single">
            <span class="overview__single__icon"><i class="ti-crown"></i></span>
            <div class="media-body">
              <h3>286+</h3>
              <p>Projects done</p>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="3" class="mb-4 mb-xl-0">
          <div class="media align-items-center overview__single">
            <span class="overview__single__icon"><i class="ti-face-smile"></i></span>
            <div class="media-body">
              <h3>942+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="3" class="mb-4 mb-xl-0">
          <div class="media align-items-center overview__single">
            <span class="overview__single__icon"><i class="ti-user"></i></span>
            <div class="media-body">
              <h3>263+</h3>
              <p>Real professionals</p>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="3" class="mb-4 mb-xl-0">
          <div class="media align-items-center overview__single">
            <span class="overview__single__icon"><i class="ti-gift"></i></span>
            <div class="media-body">
              <h3>2000+</h3>
              <p>Cups of Coffee</p>
            </div>
          </div>
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
#counter-section {
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  @media only screen and (min-width: 912px) {
    padding: 50px;
  }

  .container {
    max-width: 1140px;
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

  .media {
    cursor: default;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: start;
    align-items: flex-start;
  }

  .overview__single {
    padding: 20px 30px;
    transition: all 0.4s;
  }

  .overview__single:hover {
    background: rgba(#f9cc41, 0.5);
  }

  .align-items-center {
    align-items: center !important;
  }

  .overview__single__icon {
    margin-right: 15px;
    font-size: 2.625rem;
    color: #f9cc41;
  }

  .overview__single .media-body h3 {
    font-size: 32px;
    color: #fff;
    font-weight: 500;
    margin-bottom: 0.2rem;
  }

  .overview__single .media-body p {
    margin-bottom: 0;
    color: #afafaf;
    font-size: 14px;
  }
}
</style>
