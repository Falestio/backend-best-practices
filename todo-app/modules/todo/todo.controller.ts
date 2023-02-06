import { Router, Request, Response } from "express";
import { createTodo, getAllTodo, getOneTodo, deleteTodo, updateTodo } from "./todo.service";

export const todoRouter = Router();

todoRouter.get("/get-one", async (req: Request, res: Response) => {
    const todo = await getOneTodo(req.body.todoId);
    res.send(todo);
});

todoRouter.get("/get-all", async (req: Request, res: Response) => {
    const todos = await getAllTodo();
    res.send(todos);
});

todoRouter.post("/create", async (req: Request, res: Response) => {
    const newTodo = await createTodo(req.body.goalId, req.body.todo);
    res.send(newTodo);
});

todoRouter.put("/update", async (req: Request, res: Response) => {
    const updatedTodo = await updateTodo(req.body.todoId, req.body.todo);
    res.send(updatedTodo);
});

todoRouter.delete('/delete', async (req: Request, res: Response) => {
    const deletedTodo = await deleteTodo(req.body.todoId);
    res.send(deletedTodo);
});