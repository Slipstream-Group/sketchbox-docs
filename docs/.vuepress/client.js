import { defineClientConfig } from "vuepress/client";
import BuildInfo from "./components/BuildInfo.vue";

export default defineClientConfig({
  rootComponents: [BuildInfo],
});
