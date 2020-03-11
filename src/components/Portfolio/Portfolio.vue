<template>
  <section id="portfolio" class="section-bg">
    <div class="container">
      <header class="section-header">
        <h3 class="section-title">Artigos</h3>
      </header>

      <div class="row portfolio-container">
        <div
          v-for="post in posts"
          :key="post.id"
          class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp"
        >
          <div class="portfolio-wrap">
            <figure>
              <img :src="post.featured_image" class="img-fluid" alt />
              <a
                href="img/portfolio/app1.jpg"
                data-lightbox="portfolio"
                data-title="App 1"
                class="link-preview"
                title="Preview"
              >
                <i class="ion ion-eye"></i>
              </a>
              <a href="#" class="link-details" title="More Details">
                <i class="ion ion-android-open"></i>
              </a>
            </figure>

            <div class="portfolio-info">
              <h4>
                <a href="#">{{ post.title }}</a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import get from "axios";

export default {
  data() {
    return {
      posts: []
    };
  },
  methods: {
    fetchPosts() {
      get(
        "https://public-api.wordpress.com/rest/v1/sites/fluindocomoaguasystems.design.blog/posts"
      ).then(res => {
        this.posts = res.data.posts;
      });
    }
  },
  created() {
    this.fetchPosts();
  }
};
</script>

<style>
</style>