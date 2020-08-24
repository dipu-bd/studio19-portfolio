<template>
  <footer id="footer" data-anchor="footer">
    <v-container>
      <v-row>
        <v-col sm="4" lg="7">
          <!--  -->
        </v-col>
        <v-col sm="8" lg="5" class="text-left">
          <h2 class="footer__title">Contact Us</h2>
          <p>
            <b>Address</b>
            House: 47/F (A/4), Indira Road, Dhaka- 1215
          </p>
          <p>
            <b>Email</b>
            <a href="mailto:contactus.studio19@gmail.com">contactus.studio19@gmail.com</a>
          </p>
          <p>
            <b>Phone</b>
            +8801845532719
          </p>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<script>
export default {
  //
};
</script>

<style lang="scss">
#footer {
  padding: 80px 10px;
  background-image: url("/images/footer-bg.webp");
  background-size: cover;
  background-position: center center;
  color: #fff;
  font-family: "Oswald", sans-serif;

  .footer__title {
    font-size: 1.5125rem;
    font-weight: 300;
    margin-bottom: 30px;
    text-transform: uppercase;
  }

  p {
    font-size: 0.95rem;
    color: #ddd;
    letter-spacing: 0.05rem;
  }

  p b {
    display: block;
    color: teal;
    font-size: 1.152em;
  }

  p a {
    color: aqua;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
