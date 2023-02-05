import { Schema, model } from 'mongoose';

export interface ITodo {
    title: string;
    description: string;
    status: boolean;
}

const todoSchema = new Schema<ITodo>({
    title: {type: String, required: true},
    description: {type: String, required: true},
    status: {type: Boolean, required: true, default: false},  
})

export const Todo = model<ITodo>('Todo', todoSchema);