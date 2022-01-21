<template>
  <div class="container mt-5">
    <img alt="Vue logo" src="../assets/slider-2.png" />

    <!-- <h2 class="mt-4">BOOKMARK</h2> -->
    <div>
      <router-link to="/listquran">
      <button class="btn btn-primary mr-4">Back</button>
      </router-link>
      <router-link to="/">
      <button class="btn btn-info mr-4">Home</button>
      </router-link>
      </div>
      
    <div class="row mr-3 ml-3 mb-3 mt-3 mr-3">
      <!-- <CardBookmark/> -->
      <CardBookmark
        v-for="(bookmark, index) in BookmarkData"
        :key="index"
        :bookmarkData="bookmark"
      ></CardBookmark>
    </div>
  </div>
</template>

<script>
// import Navbar from '../components/navbar.vue'
// import Footer from '../components/footer.vue'
import CardBookmark from "../components/cardBookmark.vue";

export default {
  name: "Bookmark",
  data() {
    return {};
  },
  components: {
    // Navbar,
    // Footer,
    CardBookmark,
  },
  methods: {},
  created() {
    this.$store.dispatch("fetchBookmark");
  },
  computed: {
    BookmarkData() {
      return this.$store.state.BookmarkData;
    },
  },
};
</script>
