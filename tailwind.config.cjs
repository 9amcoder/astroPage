// tailwind.config.cjs
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}",
  ],
  // more options here
  plugins: [require("daisyui")],

  // config (optional)
  daisyui: {
    styled: true,
    themes: [
      "emerald", // first one will be the default theme
      "dark",
      "forest",
      "synthwave",
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
};
