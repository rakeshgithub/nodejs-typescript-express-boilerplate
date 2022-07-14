import "dotenv/config";
import express, { Application } from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import { RegisterRoutes } from "./routes/routes";
import swaggerUi from "swagger-ui-express";

const PORT = process.env.PORT || 8002;

const app: Application = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);

//app.use(Router);
RegisterRoutes(app);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
