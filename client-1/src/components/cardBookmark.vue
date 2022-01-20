<template>
  <div class="card ml-4 mt-4 mr-3" style="width: 18rem;">
  <img class="card-img-top mt-3 mr-4" src="https://i.pinimg.com/originals/e8/be/31/e8be31140445890de831cc2a3a6e590b.jpg" alt="Card image cap">
    <div class="card-body">
      <h4 class="card-title">{{bookmarkData ? bookmarkData.nama : 'Not Found Nama'}}</h4>
      <p class="h6"><em>
        ({{bookmarkData ? bookmarkData.arti : 'Not Found arti'}})
      </em>
      </p>
      <span class="badge bg-success mr-3"> {{bookmarkData ? bookmarkData.ayat : '0'}} ayat</span>
      <p class="card-text">  Type Surah : {{bookmarkData ? bookmarkData.type : '0'}} </p>
        
        <!-- AUDIO -->
      
        <!-- AUDIO -->
        
        <router-link :to="`/detailquran/${ bookmarkData.SurahId }`">
        <button class="btn btn-primary mr-2">
        Baca
        </button>
        </router-link>

        <button class="btn btn-danger" @click="deleteBookmark(bookmarkData.SurahId)">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg> Delete
        </button>
  </div>
<!-- 
  <audio controls>
          <source :src="surahAllData.audio" type="audio/ogg">
  <source :src="surahAllData.audio" type="audio/mpeg"> -->
  <!-- <source src="{ surahAllData.audio }" type="audio/ogg">
  <source src="{ surahAllData.audio }" type="audio/mpeg"> -->
  <!-- Your browser does not support the audio element. -->
<!-- </audio> -->
</div>

</template>

<script>
export default {
  name: 'CardBookmark',
  data () {
    return {
      // access_token: localStorage.getItem('access_token'),
      // bookmarked: false,
      SurahId: ''
    }
  },
  props: ['bookmarkData'],
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
    deleteBookmark (id) {
      this.$store.dispatch('deleteBookmark', id)
      // this.bookmarked = true
    }
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
}
</script>
