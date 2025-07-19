//https://nitro.unjs.io/config
export default defineNitroConfig({
  routeRules: {
    "/**": {
      proxy: "https://www2.deepl.com/**",
    },
  },
});
