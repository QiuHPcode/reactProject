import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", redirect: "/index" },
    {path: "/index", component:'./index'},
    { path: "/docs", component: "./docs" },
    { path: "/app", component: "./App"}
  ],
  npmClient: 'pnpm',
  alias: {

  },
  // proxy: {
  //   '/api': {
  //     'target': 'http://jsonplaceholder.typicode.com/',
  //     'changeOrigin': true,
  //     'pathRewrite': { '^/api' : '' },
  //   }
  // }
  
});
