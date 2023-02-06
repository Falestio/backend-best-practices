import { Todo, ITodo } from "./todo.model";
import { Goal } from "../goal/goal.model";

export async function createTodo(goalId: string, todo: ITodo) {
    const newTodo = await Todo.create(todo);
    const updatedGoal = await Goal.findByIdAndUpdate(
        goalId,
        {
            $push: { todos: newTodo._id },
        },
        { new: true, useFindAndModify: false }
    );

    return newTodo;
}

export async function updateTodo(todoId: string, todo: Object) {
    const updateTodo = await Todo.findByIdAndUpdate(todoId, todo, {
        new: true,
    });
    return updateTodo;
}

export async function getAllTodo() {
    const todos = await Todo.find();
    return todos;
}

export async function getOneTodo(todoId: string) {
    const todo = await Todo.findById(todoId);
    return todo;
}

export async function deleteTodo(todoId: string) {
    const deletedTodo = await Todo.findByIdAndDelete(todoId);   
    return deletedTodo;
}
