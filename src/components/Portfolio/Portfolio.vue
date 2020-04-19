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
            <router-link :to="{ path: '/post/'+ post.ID, params: {params: post } }">
              <figure>
                <img :src="post.featured_image" class="img-fluid" alt />
              </figure>

              <div class="portfolio-title">
                <h6>
                  <strong>{{ post.title }}</strong>
                </h6>
              </div>
            </router-link>
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
.portfolio-title {
  color: black;
  background: #fff;
  text-align: center;
  padding: 30px;
  height: 90px;
  border-radius: 0 0 3px 3px;
}
</style>