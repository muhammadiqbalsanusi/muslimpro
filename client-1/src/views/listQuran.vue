<template>
  <div class="container">
    <!-- <h1>list Al-Quran</h1> -->
    <img alt="Vue logo" src="../assets/slider-3.png">
      <div class="row mr-3 ml-3 mb-3 mt-3" >
          <CardData  v-for="(surah, index) in surahAllData" :key="index" :surahAllData="surah"/>
          <!-- <CardData/> -->
      </div>
  </div>
</template>

<script>
import CardData from '../components/cardData.vue'

export default {
  name: "listQuran",
  components : {
      CardData
  },
  created () {
      this.$store.dispatch('getAllSurah')
      // this.$store.state.allSurahData
  },
  computed: {
      surahAllData () {
          return this.$store.state.allSurahData
      },
  }
};
</script>

<style>
</style>