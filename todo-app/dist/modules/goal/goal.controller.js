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
exports.goalRouter = void 0;
const express_1 = require("express");
const goal_service_1 = require("./goal.service");
exports.goalRouter = (0, express_1.Router)();
exports.goalRouter.get("/get-one/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const goal = yield (0, goal_service_1.getOneGoal)(req.body.goalId);
    res.send(goal);
}));
exports.goalRouter.get("/get-all", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const goals = yield (0, goal_service_1.getAllGoal)();
    res.send(goals);
}));
exports.goalRouter.post("/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newGoal = yield (0, goal_service_1.createGoal)(req.body);
    res.send(newGoal);
}));
