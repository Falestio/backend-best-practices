"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Goal = void 0;
const mongoose_1 = require("mongoose");
const goalSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: Boolean, required: true, default: false },
    deadline: { type: Date, required: true },
    todos: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Todo' }]
});
exports.Goal = (0, mongoose_1.model)('Goal', goalSchema);
