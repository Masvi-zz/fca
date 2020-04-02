<template>
  <div id="post">
    <Header />
    <div class="wrapper wrapper-content animated fadeInRight article">
      <div class="row justify-content-md-center">
        <div class="col-lg-10">
          <div class="ibox">
            <div class="ibox-content">
              <div class="text-center article-title">
                <img class="img img-responsive img-fluid" :src="post.featured_image" alt />
                <div class="date">
                  <span class="text-muted">
                    <i class="fa fa-clock-o"></i> 28th Oct 2015
                  </span>
                </div>
                <h1>{{post.title}}</h1>
              </div>
              <hr />
              <div align="justify" v-html="post.content"></div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import get from "axios";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      param: null,
      post: {}
    };
  },
  methods: {
    fetchPost() {
      let id = JSON.parse(JSON.stringify(this.param.id));
      get(
        "https://public-api.wordpress.com/rest/v1/sites/fluindocomoaguasystems.design.blog/posts/" +
          id
      )
        .then(res => {
          console.log("here...");
          console.log(res);
          this.post = res.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {
    this.param = this.$route.params;
    this.fetchPost();
  }
};
</script>

<style scoped>
.inbox-content {
  background-color: #ffffff;
  color: inherit;
  padding: 15px 20px 20px 20px;
  border-color: #e7eaec;
  border-image: none;
  border-style: solid;
  border-width: 1px;
}

.article .ibox-content {
  padding: 40px;
}
.article h1 {
  font-size: 48px;
  font-weight: 700;
  color: #2f4050;
}

.article p {
  font-size: 15px;
  line-height: 26px;
}

.ibox {
  clear: both;
  margin-bottom: 25px;
  margin-top: 0;
  padding: 0;
}

/* @media (min-width: 992px) */
.col-lg-10 {
  -ms-flex: 0 0 83.333333%;
  flex: 0 0 83.333333%;
  max-width: 83.333333%;
}
/* 
.img-fluid {
  max-width: 30% !important;
  height: auto !important;
} */

.img {
  width: 100%;
  max-width: 680px;
}

.wrapper-content {
  padding: 20px 10px 40px;
}
</style>