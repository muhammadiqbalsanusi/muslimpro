<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-lg-6 offset-lg-3">
        <div
          class="section-heading wow fadeIn"
          data-wow-duration="1s"
          data-wow-delay="0.5s"
        >
          <h4>Register <em>Now</em></h4>
          <div class="line-dec"></div>
        </div>
      </div>
      <div
        class="col-lg-12 wow fadeInUp"
        data-wow-duration="0.5s"
        data-wow-delay="0.25s"
      >
        <form id="contact" @submit.prevent="handleRegister">
          <div class="row">
            <div class="col-lg-12">
              <div class="contact-dec">
                <img src="assets/images/register-svg.svg" alt="" />
              </div>
            </div>
            <div class="col-lg-5">
              <div id="map">
                <img src="../assets/images/about-dec-v2.png" alt="" />
              </div>
            </div>
            <div class="col-lg-7">
              <div class="fill-form">
                <div class="row">
                  <div class="col-lg-10">
                    <fieldset>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        v-model="userRegister.username"
                        required
                      />
                    </fieldset>
                    <fieldset>
                      <input
                        type="subject"
                        name="passwrord"
                        id="subject"
                        placeholder="Password"
                        v-model="userRegister.password"
                      required
                      />
                    </fieldset>
                  </div>
                  <div class="col-lg-3">
                    <fieldset>
                      <button
                        type="submit"
                        id="form-submit"
                        class="main-button"
                      >
                        Register
                      </button>
                    </fieldset>
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
export default {
  name: "Register",
  data() {
    return {
      userRegister: {
        email: "",
        password: "",
      },
    };
  },
  components: {},
  methods: {
    handleRegister() {
      this.$store.dispatch("handleRegister", {
        email: this.userRegister.email,
        password: this.userRegister.password,
      });
    },
  },
};
</script>
