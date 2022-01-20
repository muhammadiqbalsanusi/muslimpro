<template>
  <div class="container">
    <img alt="Vue logo" src="../assets/slider-2.png" />
    <table class="table table-hover">
      <thead class="table-light">
        <tr>
          <th scope="col">Number</th>
          <th scope="col">Ayat</th>
          <!-- <th scope="col">Audio</th> -->
        </tr>
      </thead>
      <tbody style="text-right">
        <!-- looping per ayat di sini -->
        <CardAyat
          v-for="(ayat, index) in oneSurahData"
          :key="index"
          :surahOneData="ayat"
        />
        <!-- looping per ayat di sini -->
      </tbody>
    </table>
  </div>
</template>

<script>
import CardAyat from "../components/cardAyat.vue";
export default {
  name: "Detail",
  components: {
    CardAyat,
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch("getOneSurah", id);
  },
  computed: {
    oneSurahData() {
      return this.$store.state.oneSurahData;
    },
  },
};
</script>

<style>
</style>