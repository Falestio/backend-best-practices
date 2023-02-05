import { Schema, model } from 'mongoose';

export interface IGoal {
    title: string;
    description: string;
    status: boolean;
    deadline: Date;
    todos: string[];
}

const goalSchema = new Schema<IGoal>({
    title: {type: String, required: true},
    description: {type: String, required: true},
    status: {type: Boolean, required: true, default: false},
    deadline: {type: Date, required: true},
    todos: [{type: Schema.Types.ObjectId, ref: 'Todo'}]
})

export const Goal = model<IGoal>('Goal', goalSchema);