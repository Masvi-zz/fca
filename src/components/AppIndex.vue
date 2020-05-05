<template>
  <div id="fca">
    <Header />
    <Carousel />

    <main id="main">
      <About />

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
import Footer from "./Footer/Footer";
export default {
  components: {
    About,
    Footer,
    Header,
    Contact,
    Carousel,
    Portfolio
  }
};
</script>


