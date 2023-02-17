"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const todo_controller_1 = require("./modules/todo/todo.controller");
const goal_controller_1 = require("./modules/goal/goal.controller");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: true,
}));
// endpoint entry
app.use("/todo", todo_controller_1.todoRouter);
app.use("/goal", goal_controller_1.goalRouter);
app.get("/", (req, res) => {
    res.status(200).send("Todo API V1");
});
exports.default = app;
