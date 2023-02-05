"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
const mongoose_1 = require("mongoose");
const todoSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: Boolean, required: true, default: false },
});
exports.Todo = (0, mongoose_1.model)('Todo', todoSchema);
