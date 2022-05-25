const { defaultTheme } = require("@vuepress/theme-default");

module.exports = {
  theme: defaultTheme({
    logo: "/sketchbox_logo.png",
    logoDark: "/sketchbox_logo_dark_mode.png",
    sidebar: [
      "/index.md",
      "/getting-started",
	  "/funamentals",
      "/tutorials",
      "/faq.md",
      "/troubleshooting.md",
    ],
  }),
};
