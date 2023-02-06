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
exports.todoRouter = void 0;
const express_1 = require("express");
const todo_service_1 = require("./todo.service");
exports.todoRouter = (0, express_1.Router)();
exports.todoRouter.get("/get-one", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todo = yield (0, todo_service_1.getOneTodo)(req.body.todoId);
    res.send(todo);
}));
exports.todoRouter.get("/get-all", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todos = yield (0, todo_service_1.getAllTodo)();
    res.send(todos);
}));
exports.todoRouter.post("/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newTodo = yield (0, todo_service_1.createTodo)(req.body.goalId, req.body.todo);
    res.send(newTodo);
}));
exports.todoRouter.put("/update", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedTodo = yield (0, todo_service_1.updateTodo)(req.body.todoId, req.body.todo);
    res.send(updatedTodo);
}));
exports.todoRouter.delete('/delete', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedTodo = yield (0, todo_service_1.deleteTodo)(req.body.todoId);
    res.send(deletedTodo);
}));
