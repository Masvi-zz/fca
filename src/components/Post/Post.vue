<template>
  <div id="post">
    <div class="wrapper wrapper-content animated fadeInRight article">
      <div class="row justify-content-md-center">
        <div class="col-lg-10">
          <div class="ibox">
            <div class="ibox-content">
              <div class="text-center article-title">
                <span class="text-muted">
                  <i class="fa fa-clock-o"></i> 28th Oct 2015
                </span>
                <h1>Behind the word mountains</h1>
              </div>

              <p align="justify">
                One morning, when Gregor Samsa woke from troubled dreams, he found
                himself transformed in his bed into a horrible vermin. He lay on his
                armour-like back, and if he lifted his head a little he could see his
                brown belly, slightly domed and divided by arches into stiff sections.
                The bedding was hardly able to cover it and seemed ready to slide off any
                moment. His many legs, pitifully thin compared with the size of the rest of
                him, waved about helplessly as he looked. "What's happened to me?" he
                thought. It wasn't a dream. His room, a proper human room although a
                little too small, lay peacefully between its four familiar walls.
                A collection of textile samples lay spread out on the table - Samsa was
                a travelling salesman - and above it there hung a picture that he had
                recently cut out of an illustrated magazine and housed in a nice, gilded
                frame. It showed a lady fitted out with a fur hat and fur boa who sat upright
                raising a heavy fur muff that covered the whole of her lower arm towards the
                viewer. Gregor then turned to look out the window at the dull weather. Drops
                The Big Oxmox advised her not to do so, because there were thousands
                of bad Commas, wild Question Marks and devious Semikoli, but the Little
                Blind Text didn’t listen. She packed her seven versalia, put her initial
                into the belt and made herself on the way. When she reached the first hills
                of the Italic Mountains, she had a last view back on the skyline of her
                hometown Bookmarksgrove, the headline of Alphabet Village and the subline
                of her own road, the Line Lane. Pityful a rethoric question ran over her
                cheek,
              </p>

              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  created() {
    console.log("post component");
    console.log(this.$route.params);
  }
};
</script>

<style>
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
</style>