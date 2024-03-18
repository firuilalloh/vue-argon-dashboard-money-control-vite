import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import ArgonDashboard from "./argon-dashboard";
import { createPinia } from "pinia"
import installAxios from "./plugins/axios.js"
import theme from "./plugins/theme.js";
 
const appInstance = createApp(App);
appInstance.use(theme)
appInstance.use(installAxios)
appInstance.use(createPinia())
appInstance.use(store);
appInstance.use(router);
appInstance.use(ArgonDashboard);
appInstance.mount("#app");
