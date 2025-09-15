import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    logo: "/sketchbox_logo.png",
    logoDark: "/sketchbox_logo_dark_mode.png",
    sidebar: [
      "/index.md",
      "/getting-started",
      "/tutorials",
      "/faq.md",
      "/troubleshooting.md",
      "/resources",
      "/version-history",
    ],
    contributors: false,
  }),
  lang: "en-US",
  title: "Sketchbox Documentation",
  description:
    "Documentation for Sketchbox, a simple building energy modeling tool, by Slipstream",
});
