<template>
  <div class="container mt-5">
    <img alt="Vue logo" src="../assets/slider-2.png" />
      <div>
      <router-link to="/listhadits">
      <button class="btn btn-primary mr-4">Back</button>
      </router-link>
      <router-link to="/">
      <button class="btn btn-info mr-4">Home</button>
      </router-link>
      </div>
    <table class="table table-hover mt-5">
      <thead class="table-light">
        <tr>
          <!-- <th scope="col">Number</th>
          <th scope="col">arab</th> -->
          <!-- <th scope="col">Ayat</th> -->
          <!-- <th scope="col">Audio</th> -->
          <th>
            <p class="h2">
            Hadits Number :   {{oneHaditsData.number}}
            </p>
            </th>
        </tr>
      </thead>
      <tbody>
        <td>
          <p class="h2 text-right">
          {{oneHaditsData.arab}}
          </p>
          <p class="h4 text-left font-weight-light"> <em>
          {{oneHaditsData.id}} </em>
          </p>
          </td>
        <!-- looping per ayat di sini -->
      </tbody>
    </table>
  </div>
</template>

<script>
// import CardHadits from "../components/cardHadits.vue";
export default {
  name: "DetailHadits",
  components: {
    // CardHadits,
  },
  created() {
    // const id = this.$route.params.id;
    // this.$store.dispatch("getOneSurah", id);
  },
  computed: {
    oneHaditsData() {
      return this.$store.state.oneHaditsData;
    },
  },
};
</script>

<style>
</style>