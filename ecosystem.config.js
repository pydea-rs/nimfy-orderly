export default {
  apps: [
    {
      name: "NincoFi",
      script: "serve",
      args: "-s build -l 5173",
      exec_mode: "fork", // important!
      interpreter: "bash", // treat as shell command
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
