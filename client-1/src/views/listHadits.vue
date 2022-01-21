<template>
  <div class="container mt-5">
    <!-- <h1>list Al-Quran</h1> -->

    <img alt="Muslim Pro Logo" src="../assets/slider-3.png" />
    <div>
      <!-- FORM -->
      <p class="h3">Search Hadits in 9 Kitab</p>
      <form class="mt-4" @submit.prevent="SearchHadits">
        <div class="form-row">
          <div class="col-5 ml-5">
            <input
              type="text"
              class="form-control"
              placeholder="Name of imam ex. muslim"
              v-model="data.imam"
            />
          </div>
          <div class="col-3 ml-5 mr-5">
            <input
              type="text"
              class="form-control"
              placeholder="Range of jumlah hadits ex. 1"
              v-model="data.number"
            />
          </div>
          <div>
            <!-- <a> -->
            <button class="btn btn-success">Search Hadits</button>
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
    <!-- Table hadits -->
    <div>
      <table class="table table-hover mt-5">
        <thead class="table-light">
          <tr>
            <th scope="col">Name of Imam</th>
            <th scope="col">Kitab Riwayat</th>
            <th scope="col">Jumlah Hadits</th>
            <!-- <th scope="col">Audio</th> -->
          </tr>
        </thead>
        <tbody style="text-right">
          <!-- looping per ayat di sini -->
          <!-- <CardAyat
          v-for="(ayat, index) in oneSurahData"
          :key="index"
          :surahOneData="ayat"
        /> -->
          <TableHadits v-for="(hadits, index ) in haditsAllData" 
          :key="index" 
          :haditsData="hadits" />
          <!-- looping per ayat di sini -->
        </tbody>
      </table>
    </div>
    <!-- <div class="row mr-4 ml-4 mb-4 mt-4">
      <CardData
        v-for="(surah, index) in surahAllData"
        :key="index"
        :surahAllData="surah"
      />
    </div> -->
  </div>
</template>

<script>
// import CardData from "../components/cardDataHadits.vue";
import TableHadits from "../components/tableHadits.vue";

export default {
  name: "listQuran",
  data() {
    return {
      data: {
        imam: '',
        number: ''
      },
    };
  },
  components: {
    TableHadits,
  },
  created() {
    this.$store.dispatch("getAllHadits");
  },
  computed: {
    haditsAllData() {
      return this.$store.state.allHaditsData;
    },
  },
  methods: {
    SearchHadits() {
      this.$store.dispatch("SearchHadits", { 
        imam: this.data.imam, 
        number: this.data.number 
        });
    },
  },
};
</script>

<style>
</style>