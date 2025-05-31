module.exports = {
  apps: [
    {
      name: "NincoFi",
      script: "serve",
      args: "-s build -l 5173",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
