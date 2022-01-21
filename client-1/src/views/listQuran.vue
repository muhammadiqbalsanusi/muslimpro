<template>
  <div class="container mt-5">
    <!-- <h1>list Al-Quran</h1> -->

    <img alt="Muslim Pro Logo" src="../assets/slider-3.png" />
    <div>
      <!-- FORM -->
      <p class="h3">Search Surah by Number</p>
      <form  @submit.prevent="SearchSurahbyNumber">
        <div class="form-row">
          <div class="col-3 ml-5">
            <input
              type="text"
              class="form-control"
              placeholder="Surah : 1-114"
              min="1" max="14"
              v-model="data.surah"
            />
          </div>
          <div>
          <!-- <a> -->
            <button class="btn btn-success">Search</button>
          <!-- </a> -->
          </div>
          <!-- <div class="col-3">
            <input
              type="text"
              class="form-control"
              placeholder="Bulan (example : 4)"
            />
          </div>
          <div class="col-3">
            <input
              type="text"
              class="form-control"
              placeholder="Tahun (example : 2022)"
            />
          </div> -->
        </div>
      </form>
      <!-- FORM -->
    </div>
    <div class="row mr-3 ml-3 mb-3 mt-3">
      <CardData
        v-for="(surah, index) in surahAllData"
        :key="index"
        :surahAllData="surah"
      />
    </div>
  </div>
</template>

<script>
import CardData from "../components/cardData.vue";

export default {
  name: "listQuran",
  data () {
    return {
      data : {
        surah : ''
      }
    }
  },
  components: {
    CardData,
  },
  created() {
    this.$store.dispatch("getAllSurah");
  },
  computed: {
    surahAllData() {
      return this.$store.state.allSurahData;
    },
  },
  methods: {
    SearchSurahbyNumber () {
      this.$store.dispatch("SearchSurahbyNumber", {surah : this.data.surah});
    }
  }
};
</script>

<style>
</style>