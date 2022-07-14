export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_PORT: number;
      DB_USER: string;
      NODE_ENV: "staging" | "development" | "production";
    }
  }
}
