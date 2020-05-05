<template>
  <header id="header" :class="[isActive ? 'header-scrolled' : 'header' ]">
    <div class="container-fluid">
      <div id="logo" class="pull-left logo">
        <!-- <img src="../../assets/img/11.png" class="img-log" alt /> -->
        <h1>
          <!-- <a href="#intro" class="scrollto">FCA</a> -->
        </h1>
      </div>
      <nav id="nav-menu-container">
        <ul class="nav-menu">
          <li class="menu-active">
            <a href="#intro" @click="getMyCurrentRoute">Home</a>
          </li>
          <li>
            <a href="#about" @click="getMyCurrentRoute">Sobre nós</a>
          </li>
          <li>
            <a href="#portfolio" @click="getMyCurrentRoute">Artigos</a>
          </li>
          <li>
            <a href="#contact" @click="getMyCurrentRoute">Contato</a>
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
    },
    getMyCurrentRoute() {
      console.log(this.$router.currentRoute);

      if (this.$router.currentRoute.path != "/") {
        this.$router.push({ path: "/" });
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
.img-log {
  width: 100px;
}
.logo {
  padding: 10px 0 0;
  margin-top: -40px;
}
.header-scrolled {
  padding-top: 23px !important;
}
</style>