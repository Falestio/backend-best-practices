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
exports.updateGoal = exports.deleteGoal = exports.getOneGoal = exports.getAllGoal = exports.createGoal = void 0;
const goal_model_1 = require("./goal.model");
function createGoal(goal) {
    return __awaiter(this, void 0, void 0, function* () {
        const newGoal = yield goal_model_1.Goal.create(goal);
        return newGoal;
    });
}
exports.createGoal = createGoal;
function getAllGoal() {
    return __awaiter(this, void 0, void 0, function* () {
        const goals = yield goal_model_1.Goal.find().populate("todos");
        return goals;
    });
}
exports.getAllGoal = getAllGoal;
function getOneGoal(goalId) {
    return __awaiter(this, void 0, void 0, function* () {
        const goal = yield goal_model_1.Goal.findById(goalId).populate("todos");
        return goal;
    });
}
exports.getOneGoal = getOneGoal;
function deleteGoal(goalId) {
    return __awaiter(this, void 0, void 0, function* () {
        const goal = yield goal_model_1.Goal.findByIdAndDelete(goalId);
        return goal;
    });
}
exports.deleteGoal = deleteGoal;
function updateGoal(goalId, goal) {
    return __awaiter(this, void 0, void 0, function* () {
        const updatedGoal = yield goal_model_1.Goal.findByIdAndUpdate(goalId, goal, {
            new: true,
            useFindAndModify: false,
        });
        return updatedGoal;
    });
}
exports.updateGoal = updateGoal;
