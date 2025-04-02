import "reflect-metadata";

import express from "express";
import router from "./routes/index";
import { PostgresDataSource } from "./configs/postgres.datasource";
import { config } from "./configs/config";

const app = express();
const port = config.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.use((req, res, next) => {
  res.status(404).json({message: `[${req.method}] ${req.url} Not found`})
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
  PostgresDataSource.initialize()
    .then(() => {
      // here you can start to work with your database
    })
    .catch((error) => console.log("PostgresDataSource Error: ", error));
});
