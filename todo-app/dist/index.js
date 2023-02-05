"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
const dotenv_1 = __importDefault(require("dotenv"));
const todo_controller_1 = require("./modules/todo/todo.controller");
const goal_controller_1 = require("./modules/goal/goal.controller");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: true
}));
// connect to database
(0, mongoose_1.connect)(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, () => {
    console.log('Connected to database');
});
// endpoint entry
app.use('/todo', todo_controller_1.todoRouter);
app.use('/goal', goal_controller_1.goalRouter);
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
