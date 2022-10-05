// Contents of src/config.ts

import { config as configDotenv } from "dotenv";
import { resolve } from "path";

switch (process.env.NODE_ENV) {
  case "local":
    console.log("Environment is 'local'", __dirname);
    configDotenv({
      path: resolve(__dirname, "../../.env.local"),
    });
    break;
  case "staging":
    configDotenv({
      path: resolve(__dirname, "../../.env.staging"),
    });
    break;
  case "production":
    configDotenv({
      path: resolve(__dirname, "../../.env.production"),
    });
    break;
  // Add 'staging' and 'production' cases here as well!
  default:
    throw new Error(`'NODE_ENV' ${process.env.NODE_ENV} is not handled!`);
}
