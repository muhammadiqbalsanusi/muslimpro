import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
import Swal from 'sweetalert2'

// https://muslim-pro.herokuapp.com/users/login

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allSurahData: [],
    allHaditsData: [],
    oneHaditsData: [],
    oneSurahData: [],
    jadwalShalatData: [],
    BookmarkData: [],
    checkLogin: false
  },
  mutations: {
    NAVBAR_LOGIN(state, payload) {
      state.checkLogin = payload
    },
    CHECK_LOGIN(state, payload) {
      state.access_token = payload.access_token
      state.checkLogin = payload.status
    },
    ALL_SURAH(state, payload) {
      state.allSurahData = payload
    },
    ALL_HADITS(state, payload) {
      state.allHaditsData = payload
    },
    ONE_HADITS(state, payload) {
      state.oneHaditsData = payload
    },
    ONE_SURAH(state, payload) {
      state.oneSurahData = payload
    },
    JADWAL_SHALAT(state, payload) {
      state.jadwalShalatData = payload
    },
    FETCH_BOOKMARKS(state, payload) {
      state.BookmarkData = payload
    },
  },
  actions: {
    loginUser(context, payload) {
      axios({
        url: 'https://muslim-pro.herokuapp.com/users/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          // console.log(data.data.email, '<<<<<<<<<<<<<<<<<<')
          localStorage.setItem('access_token', data.access_token)
          context.commit('CHECK_LOGIN', { access_token: true, status: true })
          // context.commit('CHANGE_USERNAME', data.role)
          router.push('/')
          // .catch(() => {})
        })
        .catch((err) => {
          console.log(err.response, '<<<<<<')
        })
    },
    handleRegister(context, payload) {
      axios({
        method: 'POST',
        url: 'https://muslim-pro.herokuapp.com/users/register',
        data: {
          username: payload.username,
          email: payload.email,
          password: payload.password,
          role: payload.role,
          phoneNumber: payload.phoneNumber,
          address: payload.address
        }
      })
        .then(({ data }) => {

          // localStorage.setItem('access_token', data.access_token)
          router.push('/login')
        })
        .catch((err) => {
          console.log(err.response.data.err, '<<<<<<')
        })
    },
    getAllSurah(context, payload) {
      axios({
        url: 'https://api-alquranid.herokuapp.com/surah',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          // console.log(data.data, '<<<<<<<<<<<<')
          context.commit('ALL_SURAH', data.data)
          // router.push('/listquran')

        })
        .catch((err) => {
          console.log(err.response)
          // Swal.fire({
          //   icon: 'error',
          //   title: 'Try Onother search ',
          //   text: err.response.data.err
          // })
        })
    },
    getAllHadits(context, payload) {
      axios({
        url: 'https://api-hadits.azharimm.site/books',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('ALL_HADITS', data.data)
          // router.push('/listquran')

        })
        .catch((err) => {
          console.log(err.response)
          // Swal.fire({
          //   icon: 'error',
          //   title: 'Try Onother search ',
          //   text: err.response.data.err
          // })
        })
    },
    SearchHadits(context, payload) {
      axios({
        url: `https://api-hadits.azharimm.site/books/${payload.imam}/${payload.number}`,
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          // console.log(data.data.hadith, '<<<<<<<<<<<<')
          context.commit('ONE_HADITS', data.data.hadith)
          router.push('/detailhadits')
        })
        .catch((err) => {
          console.log(err.response)
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: err.response.status
          })
        })
    },
    getOneSurah(context, id) {
      axios({
        url: `https://api-alquranid.herokuapp.com/surah/${id}`,
        method: 'GET'
      })
        .then(({ data }) => {
          context.commit('ONE_SURAH', data.data)
        })
        .catch((err) => {
          console.log(err,'<<<<<<<<<<<<<<<<<,')
        })
    },
    SearchSurahbyNumber(context, id) {
      // console.log(id.surah, '<<<<<<<<<')
      // const id = id.surah
      axios({
        url: `https://api-alquranid.herokuapp.com/surah/${id.surah}`,
        method: 'GET'
      })
        .then(({ data }) => {
          // console.log(data, '<<<<<<<<<<<<<<<<<<<')
          context.commit('ONE_SURAH', data.data)
          router.push('/detailquran2')

        })
        .catch((err) => console.log(err))
    },
    getJadwalShalat(context, payload) {

      axios({
        url: `https://api.myquran.com/v1/sholat/jadwal/${payload.kota}/${payload.year}/${payload.month}`,
        // url: `https://api.myquran.com/v1/sholat/jadwal/${payload.kota}/2022/01`,
        method: 'GET'
      })
        .then(({ data }) => {
          // console.log(data.data.jadwal, '<<<<<<<<<<<<<<<<<<<')
          context.commit('JADWAL_SHALAT', data.data.jadwal)
        })
        .catch((err) => console.log(err))
    },
    addBookmark(context, payload) {
      axios({
        url: 'https://muslim-pro.herokuapp.com/bookmark',
        method: 'POST',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          SurahId: payload.nomor,
          nama: payload.nama,
          arti: payload.arti,
          type: payload.type,
          ayat: payload.ayat
        }
      })
        .then(({ data }) => {
          // console.log('berhasil addbookmarked di mutation addbookmarked')
          // console.log(data)
          router.push('/bookmark')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    fetchBookmark(context, payload) {
      // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>ini didalam fetch bookmark')
      axios({
        url: 'https://muslim-pro.herokuapp.com/bookmark',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          // console.log(data, '<<<<<<<< hasil bookmarked')
          context.commit('FETCH_BOOKMARKS', data.Bookmark)
        })
        .catch((err) => {
          // console.log('????????error fetch BOOKMARK')
          console.log(err.response)
        })
    },
    deleteBookmark(context, payload) {
      // console.log(payload, '<<<<<<<<<<<<<')
      axios({
        url: 'https://muslim-pro.herokuapp.com/bookmark',
        method: 'DELETE',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          SurahId: payload
        }
      })
        .then(({ data }) => {
          console.log('!!!!!! Berhasil delete bookmarked')
          // console.log(data)
          router.push('/listquran')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    googleLogin(context, googleUser) {

      // console.log('---------------PROSES LOGIN GOOGLE MUTATION----------')
      
      var idToken = googleUser.getAuthResponse().id_token
      axios({
        method: 'POST',
        url: 'https://muslim-pro.herokuapp.com/loginGoogle',
        data: {
          token_google: idToken
        }
      })
      .then(({ data }) => {
        localStorage.setItem('access_token', data.access_token)
        router.push('/')
      })
      .catch((err) => {
          // console.log('---------------PROSES LOGIN GOOGLE GAGAL----------')
          console.log(err)
        })
    }
  }
})
