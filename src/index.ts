import "reflect-metadata";

import express from "express";
import router from "./routes/index.js";
import { PostgresDataSource } from "./configs/postgres.datasource.ts";
import { config } from "./configs/config.ts";

const app = express();
const port = config.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
  PostgresDataSource.initialize()
    .then(() => {
      // here you can start to work with your database
    })
    .catch((error) => console.log("PostgresDataSource Error: ", error));
});
