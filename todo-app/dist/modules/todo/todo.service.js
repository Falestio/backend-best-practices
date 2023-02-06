"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.getOneTodo = exports.getAllTodo = exports.updateTodo = exports.createTodo = void 0;
const todo_model_1 = require("./todo.model");
const goal_model_1 = require("../goal/goal.model");
function createTodo(goalId, todo) {
    return __awaiter(this, void 0, void 0, function* () {
        const newTodo = yield todo_model_1.Todo.create(todo);
        const updatedGoal = yield goal_model_1.Goal.findByIdAndUpdate(goalId, {
            $push: { todos: newTodo._id },
        }, { new: true, useFindAndModify: false });
        return newTodo;
    });
}
exports.createTodo = createTodo;
function updateTodo(todoId, todo) {
    return __awaiter(this, void 0, void 0, function* () {
        const updateTodo = yield todo_model_1.Todo.findByIdAndUpdate(todoId, todo, {
            new: true,
        });
        return updateTodo;
    });
}
exports.updateTodo = updateTodo;
function getAllTodo() {
    return __awaiter(this, void 0, void 0, function* () {
        const todos = yield todo_model_1.Todo.find();
        return todos;
    });
}
exports.getAllTodo = getAllTodo;
function getOneTodo(todoId) {
    return __awaiter(this, void 0, void 0, function* () {
        const todo = yield todo_model_1.Todo.findById(todoId);
        return todo;
    });
}
exports.getOneTodo = getOneTodo;
function deleteTodo(todoId) {
    return __awaiter(this, void 0, void 0, function* () {
        const deletedTodo = yield todo_model_1.Todo.findByIdAndDelete(todoId);
        return deletedTodo;
    });
}
exports.deleteTodo = deleteTodo;
