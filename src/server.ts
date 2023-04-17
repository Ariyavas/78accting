import express from "express";
import mongoose from "mongoose";
import http from "http";
import cors from "cors";
import Logging from "./library/logging";
import { config } from "./config/config";

import PDFDocument from 'pdfkit';

const app = express();
const server = http.createServer(app);

// ? routers
import invoice from "./routers/invoice.routes"
import user from "./routers/user.routes"

app.use(cors());

mongoose.set("strictQuery", false);

mongoose
  .connect(config.mongo.url, { retryWrites: true, w: "majority" })
  .then(() => {
    Logging.info("Connect DB");
    StartServer();
  })
  .catch((err) => {
    Logging.error("Unable to coonect: ");
    Logging.error(err);
  });

const StartServer = () => {
  app.use((req, res, next) => {
    Logging.info(
      `Incooming -> Method: [${req.method}] - Url: [${req.url}] - IP: ${req.socket.remoteAddress}`
    );

    res.on("finish", () => {
      Logging.info(
        `Incooming -> Method: [${req.method}] - Url: [${req.url}] - IP: ${req.socket.remoteAddress} - Status: [${req.statusCode}]`
      );
    });
    next();
  });

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );

    if (req.method == "OPTIONS") {
      res.header(
        "Access-Control-Allow-Methods",
        "PUT, POST, PATCH, DELETE, GET"
      );
      return res.status(200).json({});
    }
    next();
  });

  app.use("/api/invoice", invoice);
  app.use("/api/user", user)

  server.listen(config.server.port, () => {
    Logging.info(`Server is running on port: ${config.server.port}`);
  });
};
