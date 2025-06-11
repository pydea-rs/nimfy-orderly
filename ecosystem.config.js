export default {
  apps: [
    {
      name: "NincoFi",
      script: "npx",
      args: "remix-serve ./build/server/index.js",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
