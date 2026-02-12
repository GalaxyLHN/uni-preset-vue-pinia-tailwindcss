import { createSSRApp } from "vue";
import App from "./App.vue";
import * as Pinia from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
export function createApp() {
  const app = createSSRApp(App);
  const pinia = Pinia.createPinia();
  pinia.use(piniaPluginPersistedstate); // 使用持久化插件，确保用户登录信息等数据不会因为关掉小程序而丢失
  app.use(pinia);
  return {
    app,
    Pinia,
  };
}
