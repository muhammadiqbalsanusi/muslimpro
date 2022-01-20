<template>
  <div class="card ml-4 mt-4" style="width: 18rem;">
  <img class="card-img-top mt-3" src="" alt="Card image cap">
    <div class="card-body">
      <h4 class="card-title">Nama Surah</h4>
      <!-- <h4 class="card-title">{{  accomodationData ? accomodationData.name : '' }}</h4> -->
      <span class="badge bg-success">{{ accomodationData.Type ? accomodationData.Type.name : '' }}</span>
      <!-- <p class="card-text">{{ accomodationData.facility }}</p> -->
      <p class="card-text">Makkiyah</p>
      <p class="card-text fw-bold ">Total Ayat</p>
        <router-link :to="`/detail/1`">
        <!-- <router-link :to="`/detail/${ accomodationData.id }`"> -->
        <button class="btn btn-primary mr-2">
        Detail
        </button>
        </router-link>
        <button class="btn btn-info" @click="addBookmark(accomodationData.id)">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmarks" viewBox="0 0 16 16">
  <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z"/>
  <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z"/>
</svg> Bookmark
        </button>
  </div>
</div>
</template>
<script>
export default {
    name : 'CardData'
}
</script>

<style>

</style>