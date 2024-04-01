import { defineConfig } from "astro/config";

import webmanifest from "astro-webmanifest";

// https://astro.build/config
export default defineConfig({
  integrations: [
    webmanifest({
      name: "Gartenbau Felsberg GmbH",
      short_name: "Gartenbau Felsberg",
      icon: "src/images/felsberg-icon-round.png",
      start_url: "/",
      theme_color: "#245d24",
      background_color: "#245d24",
      display: "standalone",
      lang: "de",
      dir: "ltr",
      id: "gartenbau-felsberg",
      config: {
        insertAppleTouchLinks: true,
      },
    }),
  ],
});
