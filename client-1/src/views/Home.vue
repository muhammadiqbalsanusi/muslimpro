<template>
  <!-- <div class="home"> -->
  <div class="container">
    <img src="../assets/slider-1.png" class="d-block w-100" alt="..." />

    <!-- TABLE JADWAL SHALAT -->
    <div class="mt-4">
      <p class="text-center h3">JADWAL SHALAT BULAN INI</p>
      <div class="mt-4">
        <!-- FORM -->
        <!-- <form>
          <div class="form-row">
            <div class="col-3 mr-3">
              <input type="text" class="form-control" placeholder="Kota (example : jakarta)" />
            </div>
            <div class="col-3">
              <input type="text" class="form-control" placeholder="Bulan (example : 4)" />
            </div>
            <div class="col-3">
              <input type="text" class="form-control" placeholder="Tahun (example : 2022)" />
            </div>
          </div>
        </form> -->
        <!-- FORM -->
        <a @click.prevent="jakarta">
          <button class="btn btn-primary mr-4">Jakarta</button>
        </a>
        <a @click.prevent="surabaya">
          <button class="btn btn-primary mr-4">Surabaya</button>
        </a>
        <a @click.prevent="mataram">
          <button class="btn btn-primary mr-4">Mataram</button>
        </a>
        <a @click.prevent="aceh">
          <button class="btn btn-primary mr-4">Aceh</button>
        </a>
        <a @click.prevent="ksb">
          <button class="btn btn-primary mr-4">Sumbawa Barat</button>
        </a>
      </div>

      <p class="text-right h6"><em>Sumber : Kemenag.go.id </em></p>
      <table class="table mt-4">
        <thead>
          <tr>
            <th scope="col">TANGGAL</th>
            <th scope="col">IMSAK</th>
            <th scope="col">SUBUH</th>
            <th scope="col">DHUHA</th>
            <th scope="col">DZUHUR</th>
            <th scope="col">ASHAR</th>
            <th scope="col">MAGHRIB</th>
            <th scope="col">ISYA</th>
          </tr>
        </thead>
        <tbody>
          <TableShalat v-for="(el, index) in jadwalShalat" :key="index" :dataShalat="el" />
          
          <!-- <CardData  v-for="(surah, index) in surahAllData" :key="index" :surahAllData="surah"/> -->
          <!-- <tr>
            <td>SENIN, 1 JANUARI 2022</td>
            <td>04:00</td>
            <td>04:00</td>
            <td>04:00</td>
            <td>04:00</td>
            <td>04:00</td>
          </tr> -->
        </tbody>
      </table>
    </div>
    <!-- JADWAL SHALAT -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import TableShalat from "../components/tableShalat.vue";
export default {
  name: "Home",
  data() {
    return {
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().getMonth()+1
    };
  },
  components: {
    TableShalat,
  },
  computed: {
    jadwalShalat() {
      return this.$store.state.jadwalShalatData;
    }
  },
  created () {
    // jakarta() {
      this.$store.dispatch("getJadwalShalat", {
        kota: 1301,
        year : this.currentYear,
        month : this.currentMonth
      })
    // }
  },
  methods: {
    jakarta() {
      this.$store.dispatch("getJadwalShalat", {
        kota: 1301,
         year : this.currentYear,
        month : this.currentMonth
      });
    },
    surabaya() {
      this.$store.dispatch("getJadwalShalat", {
        kota: 1638,
         year : this.currentYear,
        month : this.currentMonth

      });
    },
    mataram() {
      this.$store.dispatch("getJadwalShalat", {
        kota: 1810,
         year : this.currentYear,
        month : this.currentMonth
      })
    },
    aceh() {
      this.$store.dispatch("getJadwalShalat", {
        kota: '0103',
         year : this.currentYear,
        month : this.currentMonth
      })
    },
    ksb() {
      this.$store.dispatch("getJadwalShalat", {
        kota: 1808,
         year : this.currentYear,
        month : this.currentMonth

      })
    },
  },
};
</script>
