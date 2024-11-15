import { createApp } from "vue";
import "./style.scss";
import router from "./router";
import App from "./App.vue";
import focusOnCtrlK from "./directives/focusOnCtrlK.ts";
import "./assets/style/main.scss";

const app = createApp(App);
app.use(router);
app.directive("focus-k", focusOnCtrlK);
app.mount("#app");
