<template>
  <div class="container top-0 position-sticky z-index-sticky">
    <div class="row">
      <div class="col-12">
        <!-- <navbar isBtn="bg-gradient-light" /> -->
      </div>
    </div>
  </div>
  <main class="main-content mt-0">
    <div
      class="page-header align-items-start min-vh-50 pt-4 pb-11 border-radius-lg"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5 text-center mx-auto">
            <h1 class="text-black mb-0 mt-0">Welcome!</h1>
            <p class="text-lead text-black">
              Use these awesome forms to login or create new account in your
              project for free.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
        <div class="col-xl-4 col-lg-5 col-md-7 mx-auto">
          <div class="card z-index-0">
            <div class="card-header text-center pt-4 pb-0">
              <h5>Register</h5>
            </div>
            <div class="card-body">
              <form role="form">
                <argon-input type="text" placeholder="Name" aria-label="Name" />
                <argon-input
                  type="email"
                  placeholder="Email"
                  aria-label="Email"
                />
                <argon-input
                  type="password"
                  placeholder="Password"
                  aria-label="Password"
                />
                <argon-checkbox checked>
                  <label class="form-check-label" for="flexCheckDefault">
                    I agree the
                    <a href="javascript:;" class="text-dark font-weight-bolder"
                      >Terms and Conditions</a
                    >
                  </label>
                </argon-checkbox>
                <div class="text-center">
                  <argon-button
                    fullWidth
                    color="dark"
                    variant="gradient"
                    class="my-4 mb-2"
                    >Sign up</argon-button
                  >
                </div>
                <p class="text-sm mt-3 mb-0">
                  Already have an account?
                  <router-link to="/signin" class="text-dark font-weight-bolder"
                    >Sign in</router-link
                  >
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <!-- <app-footer /> -->
</template>

<script>
// import Navbar from "@/examples/PageLayout/Navbar.vue";
// import AppFooter from "@/examples/PageLayout/Footer.vue";
import ArgonInput from "../components/argon/ArgonInput.vue";
import ArgonCheckbox from "../components/argon/ArgonCheckbox.vue";
import ArgonButton from "../components/argon/ArgonButton.vue";
const body = document.getElementsByTagName("body")[0];

export default {
  name: "SignupPage",
  components: {
    // Navbar,
    // AppFooter,
    ArgonInput,
    ArgonCheckbox,
    ArgonButton,
  },
  created() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    body.classList.add("bg-gray-100");
  },
};
</script>
