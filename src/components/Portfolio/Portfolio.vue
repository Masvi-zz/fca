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
            <!-- <router-link :to="{ name: 'post', params: { post: post} }">TESTE: {{post.ID}}</router-link> -->
            <!-- <router-link :to="'/post/' +post.ID">TESTE: {{post.ID}}</router-link> -->
            <router-link :to="{ path: '/post/'+ post.ID, params: {params: post } }">more..</router-link>
            <!-- :to="'/post/' +post.ID">Teste {{post.ID}} -->
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
      <!-- <pagination :pagination="meta.pagination" @page="changePage" /> -->
    </div>
  </section>
</template>

<script>
import get from "axios";
// import Pagination from "../Pagination/Pagination";
export default {
  components: {
    // Pagination
  },
  data() {
    return {
      postUrl:
        "https://public-api.wordpress.com/rest/v1/sites/fluindocomoaguasystems.design.blog/posts",
      posts: [],
      postsData: {
        per_page: 2,
        page: null,
        totalPages: ""
      }
    };
  },
  methods: {
    fetchPosts() {
      get(this.postUrl, { params: this.postsData })
        .then(res => {
          this.posts = res.data.posts;
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    },
    changePage({ page }) {
      this.fetchPosts(page);
    }
  },
  created() {
    this.fetchPosts();
  }
};
</script>

<style>
</style>