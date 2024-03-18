<template>
  <div class="container top-0 position-sticky z-index-sticky">
    <div class="row">
      <div class="col-12">
        <navbar
          isBlur="blur  border-radius-lg my-3 py-2 start-0 end-0 mx-4 shadow"
          v-bind:darkMode="true"
          isBtn="bg-gradient-success"
        />
      </div>
    </div>
  </div>
  <main class="mt-0 main-content">
    <section>
      <div class="page-header min-vh-100">
        <div class="container">
          <div class="row">
            <div
              class="mx-auto col-xl-4 col-lg-5 col-md-7 d-flex position-absolute top-50 start-50 translate-middle flex-column mx-lg-0"
            >
              <div class="card">
                <div class="pb-0 p-4 text-start">
                  <h4 class="font-weight-bolder">Sign In</h4>
                  <p class="mb-0">Enter your email and password to sign in</p>
                </div>
                <div class="card-body">
                  <form role="form">
                    <div class="mb-3">
                      <input-comp
                        :label="user"
                        :placeholder="user"
                        :required="required"
                      />
                    </div>
                    <div class="mb-3">
                      <input-comp
                        :label="pass"
                        :placeholder="pass"
                        :required="required"
                      />
                    </div>
                    <div class="text-center">
                      <argon-button
                        class="mt-4"
                        variant="gradient"
                        color="success"
                        fullWidth
                        size="lg"
                        >Sign in</argon-button
                      >
                    </div>
                  </form>
                </div>
                <div class="px-1 pt-0 text-center card-footer px-lg-2">
                  <p class="mx-auto mb-4 text-sm">
                    Don't have an account?
                    <router-link
                      to="/signup"
                      href="javascript:;"
                      class="text-success text-gradient font-weight-bold"
                      >Sign up</router-link
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Navbar from "@/examples/PageLayout/Navbar.vue";
import ArgonButton from "../components/argon/ArgonButton.vue";
import { inject, reactive } from "vue";
import { useRoute } from "vue-router";
import { object as y$object, string as y$string } from "yup";
import st$auth from "../store/auth.js";
const body = document.getElementsByTagName("body")[0];

export default {
  name: "SigninPage",
  setup() {
    const router = useRoute();
    const notify = inject("notify");

    const initialForm = {
      username: "",
      password: "",
    };

    const form = reactive({ ...initialForm });

    const schema = y$object({
      username: y$string().required().label("username"),
      password: y$string().min(5).required().label("password"),
    });

    const onSubmit = async (values) => {
      try {
        const login = await st$auth().a$login(values);
        notify(login);
        router.push({ name: "home" });
      } catch ({ error, message }) {
        throw error ?? "error";
      }
    };

    return {
      form,
      schema,
      onSubmit,
    };
  },
  components: {
    Navbar,
    ArgonButton,
  },
  data: () => ({
    user: "Username",
    pass: "Password",
    required: true,
  }),
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
