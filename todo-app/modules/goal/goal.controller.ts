import { Router, Request, Response } from "express";
import { getAllGoal, createGoal, getOneGoal, deleteGoal } from "./goal.service";
import { IGoal } from "./goal.model";

export const goalRouter = Router();

goalRouter.get("/get-one/", async (req: Request, res: Response) => {
    const goal = await getOneGoal(req.body.goalId);
    res.send(goal);
});

goalRouter.get("/get-all", async (req: Request, res: Response) => {
    const goals = await getAllGoal();
    res.send(goals);
});

goalRouter.post("/create", async (req: Request, res: Response) => {
    const newGoal = await createGoal(req.body);
    res.send(newGoal);
});

goalRouter.delete("/delete", async (req: Request, res: Response) => {
    const deletedGoal = await deleteGoal(req.body.goalId);
    res.send(deletedGoal);
});