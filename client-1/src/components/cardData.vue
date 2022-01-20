<template>
  <div class="card ml-4 mt-4 mr-3" style="width: 18rem">
    <img
      class="card-img-top mt-3 mr-4"
      src="https://i.pinimg.com/originals/e8/be/31/e8be31140445890de831cc2a3a6e590b.jpg"
      alt="Card image cap"
    />
    <div class="card-body">
      <h4 class="card-title">
        {{ surahAllData ? surahAllData.nama : "AlFatihah" }}
      </h4>
      <p class="h6">
        <em> ({{ surahAllData ? surahAllData.arti : "AlFatihah" }}) </em>
      </p>
      <span class="badge bg-success mr-3">
        Nomor : {{ surahAllData ? surahAllData.nomor : "Makkiyah" }}</span
      >
      <p class="card-text">
        {{ surahAllData ? surahAllData.ayat : "7 Ayat" }} Ayat
      </p>

      <!-- AUDIO -->

      <!-- AUDIO -->

      <router-link :to="`/detailquran/${surahAllData.nomor}`">
        <button class="btn btn-primary mr-2">Baca</button>
      </router-link>
      <button class="btn btn-info" @click="addBookmark(surahAllData)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-bookmarks"
          viewBox="0 0 16 16"
        >
          <path
            d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z"
          />
          <path
            d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z"
          />
        </svg>
        Bookmark
      </button>
    </div>

    <audio controls>
      <source :src="surahAllData.audio" type="audio/ogg" />
      <source :src="surahAllData.audio" type="audio/mpeg" />
      <!-- <source src="{ surahAllData.audio }" type="audio/ogg">
  <source src="{ surahAllData.audio }" type="audio/mpeg"> -->
      <!-- Your browser does not support the audio element. -->
    </audio>
  </div>
</template>

<script>
export default {
  name: "CardData",
  data() {
    return {
      // access_token: localStorage.getItem('access_token'),
      // bookmarked: false,
      SurahId: "",
    };
  },
  props: ["surahAllData"],
  // computed: {
  //   checkLogin () {
  //     return this.$store.state.checkLogin
  //   },
  //   bookmark () {
  //     return this.$store.state.BookmarkData
  //   }
  // },
  // watch: {
  //   bookmark () {
  //     if (this.bookmark.length !== 0) {
  //       this.checkBookmark()
  //     }
  //   }
  // },
  methods: {
    // checkBookmark () {
    //   for (let i = 0; i < this.bookmark.length; i++) {
    //     if (this.accomodationData.id === this.bookmark[i].AccomodationId) {
    //       this.bookmarked = true
    //       break
    //     }
    //   }
    // },
    addBookmark(data) {
      this.$store.dispatch("addBookmark", data);
      // this.bookmarked = true
    },
  },
  // created () {
  //   this.checkBookmark()
  //   if (!localStorage.getItem('access_token')) {
  //     this.access_token = null
  //     this.$store.commit('CHECK_LOGIN', { access_token: '', status: false })
  //   } else {
  //     this.access_token = localStorage.getItem('access_token')
  //     this.$store.commit('CHECK_LOGIN', { access_token: '', status: true })
  //   }
  // }
};
</script>
