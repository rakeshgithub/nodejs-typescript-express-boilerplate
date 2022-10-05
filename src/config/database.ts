import { DataSource } from "typeorm";
import { User, Business, Role } from "../entity";

const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.POSTGRES_HOST || "localhost",
  port: Number(process.env.POSTGRES_PORT) || 3306,
  username: process.env.POSTGRES_USER || "root",
  password: process.env.POSTGRES_PASSWORD || "password",
  database: process.env.POSTGRES_DB || "test_boilerplate",
  entities: [User, Business, Role],
  migrations: ["src/migrations/*"],
  synchronize: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

export default AppDataSource;
