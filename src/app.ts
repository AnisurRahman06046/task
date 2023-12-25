import express, { Application, Request, Response } from "express";
import cors from "cors";
import routes from "./app/routes";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1", routes);

// testing api
app.get("/", (req: Request, res: Response) => {
  res.send("api is working....");
});

export default app;
