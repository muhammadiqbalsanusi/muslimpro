<template>
  <div class="container mt-5">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <div class="section-heading wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
            <!-- <h6>Contact Us</h6> -->
            <h4>Login  <em>Now</em></h4>
            <div class="line-dec"></div>
          </div>
        </div>
        <div class="col-lg-12 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.25s">
          <form id="contact" @submit.prevent="handleLogin">
            <div class="row">
              <div class="col-lg-12">
                <div class="contact-dec">
                  <img src="assets/images/contact-dec-v3.png" alt="">
                </div>
              </div>
              <div class="col-lg-5">
                <div id="map">
                    <img src="../assets/images/about-dec-v3.png" alt="">
                </div>
              </div>
              <div class="col-lg-7">
                <div class="fill-form">
                  <div class="row">
                    <div class="col-lg-10">
                      <fieldset>
                        <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email" v-model="loginInput.email" required>
                      </fieldset>
                      <fieldset>
                        <input type="subject" name="passwrord" id="subject" placeholder="Password" v-model="loginInput.password" required>
                      </fieldset>
                    </div>
                    <div class="col-lg-3">
                      <!-- <fieldset> -->
                        <button type="submit" id="form-submit" class="main-button ">Login</button>
                      <!-- </fieldset> -->
                    </div>
                    <div class="col-lg-3">
                      <!-- <fieldset> -->
                         <router-link to="/register">
                        <button id="form-submit" class="main-button ">Register</button>
                         </router-link>
                      <!-- </fieldset> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
// import GoogleLogin from 'vue-google-login'

export default {
  name : 'Login',
  data () {
    return {
      loginInput: {
        email: '',
        password: ''
      }
      // params: {
      //   client_id:
      //     '438046230128-14qmut1op1ibl3ao5aid7bi4q7vfh1h9.apps.googleusercontent.com'
      // },
      // renderParams: {
      //   width: 250,
      //   height: 50,
      //   longtitle: true
      // }
    }
  },
  components: {
    // GoogleLogin
  },
  methods: {
    handleLogin () {
      this.$store.dispatch('loginUser', { email: this.loginInput.email, password: this.loginInput.password })
    }
    // onSuccess (googleUser) {
    //   this.$store.dispatch('googleLogin', googleUser)
    // },
    // onFailure (error) {
    //   console.log(error)
    // }
  }
}
</script>

<style>

</style>