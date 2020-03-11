<template>
  <header id="header" :class="[isActive ? 'header-scrolled' : 'header' ]">
    <div class="container-fluid">
      <div id="logo" class="pull-left">
        <h1>
          <a href="#intro" class="scrollto">FCA</a>
        </h1>
      </div>
      <nav id="nav-menu-container">
        <ul class="nav-menu">
          <li class="menu-active">
            <a href="#intro">Home</a>
          </li>
          <li>
            <a href="#about">Sobre nós</a>
          </li>
          <li>
            <a href="#portfolio">Artigos</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      isActive: false
    };
  },
  methods: {
    handleScroll({ path }) {
      const scrollParam = path[1].scrollY;
      if (scrollParam > 100) {
        this.isActive = true;
      } else if (scrollParam < 90) {
        this.isActive = false;
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style>
@import "../../assets/css/style.css";
</style>