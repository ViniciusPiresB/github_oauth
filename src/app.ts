import express from "express";
import cors from "cors";
import { renderHtmlRouter } from "./routes/renderHtml.routes";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(express.static("static"));
  }

  routes() {
    this.app.use("/", renderHtmlRouter);
  }
}

export default new App().app;
