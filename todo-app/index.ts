import express, { Express, Request, Response } from 'express';
import { connect, ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';
import { todoRouter } from './modules/todo/todo.controller';
import { goalRouter } from './modules/goal/goal.controller';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// connect to database
connect(process.env.MONGO_URI!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
} as ConnectOptions, () => {
    console.log('Connected to database');
})

// endpoint entry
app.use('/todo', todoRouter);
app.use('/goal', goalRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});