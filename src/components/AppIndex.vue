<template>
  <div id="fca">
    <Header />
    <Carousel />
    <section id="featured-services">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 box">
            <i class="ion-ios-bookmarks-outline"></i>
            <h4 class="title">
              <a href>Lorem Ipsum Delino</a>
            </h4>
            <p
              class="description"
            >Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
          </div>

          <div class="col-lg-4 box box-bg">
            <i class="ion-ios-stopwatch-outline"></i>
            <h4 class="title">
              <a href>Dolor Sitema</a>
            </h4>
            <p
              class="description"
            >Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
          </div>

          <div class="col-lg-4 box">
            <i class="ion-ios-heart-outline"></i>
            <h4 class="title">
              <a href>Sed ut perspiciatis</a>
            </h4>
            <p
              class="description"
            >Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
          </div>
        </div>
      </div>
    </section>
    <main id="main">
      <About />
      <ServicesSection />
      <Portfolio />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script>
import About from "./About/About";
import Header from "./Header/Header";
import Contact from "./Contact/Contact";
import Carousel from "./Carousel/Carousel";
import Portfolio from "./Portfolio/Portfolio";
import ServicesSection from "./ServicesSection/ServicesSection";
import Footer from "./Footer/Footer";
export default {
  components: {
    About,
    Footer,
    Header,
    Contact,
    Carousel,
    Portfolio,
    ServicesSection
  }
};
</script>


