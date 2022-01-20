<template>
<nav class="navbar navbar-expand-lg navbar-light bg-info">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">MUSLIM PRO</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         <li class="nav-item active" v-if="checkLogin">
      <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item" v-if="checkLogin">
      <router-link class="nav-link" to="/listquran">Al-Quran</router-link>
        </li>
        <li class="nav-item" v-if="checkLogin" >
      <router-link class="nav-link" to="/bookmark">Bookmark</router-link>
        </li>
        <li class="nav-item" v-if="!checkLogin">
      <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <li class="nav-item" v-if="!checkLogin">
      <router-link class="nav-link" to="/register">Register</router-link>
        </li>
        <li class="nav-item" v-if="checkLogin" >
          <a class="nav-link" href="#" @click.prevent="logout">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      access_token: localStorage.getItem('access_token')
    }
  },
  computed: {
    checkLogin () {
      return this.$store.state.checkLogin
    }
  },
  methods: {
    logout () {
      this.$store.commit('CHECK_LOGIN', { access_token: '', status: false })
      if (this.$route.path !== '/') {
        localStorage.removeItem('access_token')
        this.access_token = null
        this.$router.push('/login')
      } else {
        localStorage.removeItem('access_token')
        this.access_token = null
      }
    },
    // getAllSurah () {
    //   this.$store.dispatch('getAllSurah')
    // }
  }
}
</script>
