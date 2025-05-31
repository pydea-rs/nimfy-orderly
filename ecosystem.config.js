export default {
  apps: [
    {
      name: "NincoFi",
      script: "build",
      args: "-s build -l 5173",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
