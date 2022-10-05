export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "local" | "staging" | "production";
      POSTGRES_HOST: "localhost";
      POSTGRES_PORT: 3306;
      POSTGRES_USER: "root";
      POSTGRES_PASSWORD: "password";
      POSTGRES_DB: "database_name";
    }
  }
}
