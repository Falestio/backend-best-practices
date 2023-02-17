import { Router, Request, Response } from "express";
import { getAllGoal, createGoal, getOneGoal, deleteGoal, updateGoal } from "./goal.service";
import { mongoIdValidator } from "../../helper/validator";
import { validateCreateGoal, validateEditGoal } from "./goal.validator";

export const goalRouter = Router();

goalRouter.get("/get-one/", mongoIdValidator("goalId"), async (req: Request, res: Response) => {
    const goal = await getOneGoal(req.body.goalId);
    res.status(200).send(goal);
});

goalRouter.get("/get-all", async (req: Request, res: Response) => {
    const goals = await getAllGoal();
    res.status(200).send(goals);
});

goalRouter.post("/create", validateCreateGoal(), async (req: Request, res: Response) => {
    const newGoal = await createGoal(req.body); 
    res.status(201).send(newGoal);
});

goalRouter.put("/update", mongoIdValidator("goalId"), validateEditGoal(), async (req: Request, res: Response) => {
    const updatedGoal = await updateGoal(req.body.goalId, req.body.goal);
    res.send(updatedGoal);
});

goalRouter.delete("/delete", mongoIdValidator("goalId"), async (req: Request, res: Response) => {
    const deletedGoal = await deleteGoal(req.body.goalId);
    res.send(deletedGoal);
});
