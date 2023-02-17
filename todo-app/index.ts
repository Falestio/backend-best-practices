import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { todoRouter } from "./modules/todo/todo.controller";
import { goalRouter } from "./modules/goal/goal.controller";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

// endpoint entry
app.use("/todo", todoRouter);
app.use("/goal", goalRouter);

app.get("/", (req: Request, res: Response) => {
    res.status(200).send({ message: 'Todo API V1' });
});

export default app;
