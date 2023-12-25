import express, { Application, Request, Response } from "express";
import cors from "cors";
import routes from "./app/routes";
import globalErrorHanlders from "./app/middlewares/globalErrorHandler";
import notFoundHandler from "./app/middlewares/notFound";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1", routes);

// testing api
app.get("/", (req: Request, res: Response) => {
  res.send("api is working....");
});

// global error handler to handle error centrally
app.use(globalErrorHanlders)
app.use(notFoundHandler)
export default app;
