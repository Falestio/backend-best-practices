import { Router, Request, Response } from "express";
import { createTodo, getAllTodo, getOneTodo, deleteTodo } from "./todo.service";

export const todoRouter = Router();

todoRouter.get("/get-one", async (req: Request, res: Response) => {
    const todo = await getOneTodo(req.body.todoId);
    res.send(todo);
});

todoRouter.get("/get-all", async (req: Request, res: Response) => {
    const todos = getAllTodo();
    res.send(todos);
});

todoRouter.post("/create", async (req: Request, res: Response) => {
    const newTodo = await createTodo(req.body.goalId, req.body.todo);
    res.send(newTodo);
});

todoRouter.delete('/delete', async (req: Request, res: Response) => {
    const deletedTodo = await deleteTodo(req.body.todoId);
    res.send(deletedTodo);
});