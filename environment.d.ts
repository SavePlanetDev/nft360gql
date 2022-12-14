declare global {
  namespace NodeJs {
    interface ProcessEnv {
      NODE_ENV: "dev" | "prod";
      PORT?: string;
    }
  }
}

export {};
