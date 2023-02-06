import { Goal, IGoal } from "./goal.model";

export async function createGoal(goal: IGoal) {
    const newGoal = await Goal.create(goal);
    return newGoal;
}

export async function getAllGoal() {
    const goals = await Goal.find().populate("todos");
    return goals;
}

export async function getOneGoal(goalId: string) {
    const goal = await Goal.findById(goalId).populate("todos");
    return goal;
}

export async function deleteGoal(goalId: string) {
    const goal = await Goal.findByIdAndDelete(goalId);
    return goal;
}

export async function updateGoal(goalId: string, goal: Object) {
    const updatedGoal = await Goal.findByIdAndUpdate(goalId, goal, {
        new: true,
    });

    return updatedGoal;
}
