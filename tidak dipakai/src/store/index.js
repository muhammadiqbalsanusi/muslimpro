import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accomodationDataOne: {},
    surahAllData: [],
    BookmarkData: [],
    page: '',
    totalPage: '',
    access_token: true,
    checkLogin: false,
    qrCodeimg: '',
    sizeQrCode: ''
    // userName: ''
  },
  mutations: {
    // CHANGE_USERNAME (state, payload) {
    //   state.userName = payload
    // },
    ALL_SURAH (state, payload) {
      state.surahAllData = payload.data
    },
    CHECK_LOGIN (state, payload) {
      state.access_token = payload.access_token
      state.checkLogin = payload.status
    },
    ACCOMODATION_DETAIL (state, payload) {
      state.accomodationDataOne = payload
    },
    FETCH_BOOKMARKS (state, payload) {
      state.BookmarkData = payload
    },
    QR_CODE (state, payload) {
      state.qrCodeimg = payload.qrcode
      state.sizeQrCode = payload.size
    }
  },
  actions: {
    loginUser (context, payload) {
      axios({
        url: 'http://localhost:3000/users/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          // context.commit('CHECK_LOGIN', { access_token: true, status: true })
          router.push('/')
        })
        .catch((err) => {
          console.log(err.response.data, 'GAGAL LOGIN <<<<<<')
          // Swal.fire({
          //   icon: 'error',
          //   title: 'Error',
          //   text: err.response.data.err
          // })
        })
    },
    handleRegister (context, payload) {
      console.log('<<<<<<<< masuk proses register')
      axios({
        method: 'POST',
        url: 'http://localhost:3000/users/register',
        data: {
          email: payload.email,
          password: payload.password,
        }
      })
      .then(({ data }) => {
          console.log('<<<<<<<< register berhasil')
          router.push('/login')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getAllSurah (context, payload) {
      axios({
        url: 'https://api-alquranid.herokuapp.com/surah',
        method: 'GET'
        // headers: {
        //   access_token: localStorage.getItem('access_token')
        // }
      })
        .then(({ data }) => {
          console.log(data, '<<<<<<<<<<<<')
          context.commit('ALL_SURAH', data)
          router.push('/baca')
          
        })
        .catch((err) => {
          console.log(err.response)
          // Swal.fire({
          //   icon: 'error',
          //   title: 'Try Onother search ',
          //   text: err.response.data.err
          // })
        })
    }
    
  }
})
