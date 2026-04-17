import { onMounted } from "vue";
import type { ClientConfig } from "vuepress/client";
import { defineClientConfig } from "vuepress/client";
import DeveloperHome from "./components/DeveloperHome.vue";

export default <ClientConfig>defineClientConfig({
  enhance({ app }) {
    app.component("DeveloperHome", DeveloperHome);
  },
  setup() {
    onMounted(() => {
      console.log(String.raw`

__          __  _                            _                            _     _             _ 
\ \        / / | |                          | |                          | |   | |           | |
 \ \  /\  / /__| | ___ ___  _ __ ___   ___  | |_ ___    _ __ ___  _   _  | |__ | | ___   __ _| |
  \ \/  \/ / _ \ |/ __/ _ \| '_ ${"`"} _ \ / _ \ | __/ _ \  | '_ ${"`"} _ \| | | | | '_ \| |/ _ \ / _${"`"} | |
   \  /\  /  __/ | (_| (_) | | | | | |  __/ | || (_) | | | | | | | |_| | | |_) | | (_) | (_| |_|
    \/  \/ \___|_|\___\___/|_| |_| |_|\___|  \__\___/  |_| |_| |_|\__, | |_.__/|_|\___/ \__, (_)
                                                                   __/ |                 __/ |  
                                                                  |___/                 |___/   

`);
    });
  },
});
