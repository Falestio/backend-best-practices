import app from "../../index";
import supertest from "supertest";
import { connect, ConnectOptions, connection, model } from "mongoose";
const request = supertest(app);

const Todo = model("Todo");
const Goal = model("Goal")

describe("Todo API", () => {
    beforeAll(async () => {
        await connect(
            process.env.TEST_MONGO_URI!,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            } as ConnectOptions,
            () => {
                console.log("Connected to database");
            }
        );
    });

    afterAll(async () => {
        await Todo.deleteMany({});
        await connection.close().then(() => {
            console.log("Connection closed");
        });
    });

    afterEach(async () => {
        await Todo.deleteMany({});
    });

    describe("GET /todo/get-all - test get all todo endpoint", () => {
        it("Return array of todos", async () => {
            const response = await request.get("/todo/get-all");
            expect(response.status).toBe(200);
            expect(response.body).toBeDefined();
            expect(Array.isArray(response.body)).toBe(true);
        });
    });

    describe("GET /todo/get-one - test get one todo endpoint", () => {
        it("Return one todo", async () => {

            const newTodo = {
                title: "Todo 1",
                description: "Todo 1 description",
            };

            const createdTodo = await Todo.create(newTodo);

            const response = await await request.get("/todo/get-one").send({ todoId: createdTodo._id });

            expect(response.status).toBe(200);
            expect(response.body).toBeDefined();
            expect(response.body).toHaveProperty("title", newTodo.title);
            expect(response.body).toHaveProperty("description", newTodo.description);
            expect(typeof response.body.status).toBe("boolean");
        });
    });

    describe("POST /todo/create - test create todo endpoint", () => {
        it("Return created todo", async () => {
            const newGoal = {
                title: "Goal 1",
                description: "Goal 1 description",
                deadline: "2023-12-31T00:00:00.000Z",
            };

            const createdGoal = await Goal.create(newGoal);
            console.log(createdGoal);
            

            const newTodo = {
                goalId: createdGoal._id,
                todo: {
                    title: "Todo 1",
                    description: "Todo 1 description",
                }
            }

            const response = await request.post("/todo/create").send(newTodo);

            console.log(response.body);

            expect(response.status).toBe(201);
            expect(response.body).toBeDefined();
            expect(response.body).toHaveProperty("title", newTodo.todo.title);
            expect(response.body).toHaveProperty("description", newTodo.todo.description);
            expect(response.body.status).toBe(false);
        });
    });

    describe("PUT /todo/update - test update todo endpoint", () => {
        it("Return updated todo", async () => {
            const newTodo = {
                title: "Todo 1",
                description: "Todo 1 description",
            };

            const createdTodo = await Todo.create(newTodo);

            const updatedTodo = {
                todoId: createdTodo._id,
                todo: {
                    title: "Todo 1 updated",
                    description: "Todo 1 description updated",
                },
            };

            const response = await request.put("/todo/update").send(updatedTodo);

            expect(response.status).toBe(200);
            expect(response.body).toBeDefined();
            expect(response.body).toHaveProperty("title", updatedTodo.todo.title);
            expect(response.body).toHaveProperty("description", updatedTodo.todo.description);
        });
    });

    describe("DELETE /todo/delete - test delete todo endpoint", () => {
        it("Return deleted todo", async () => {
            const newTodo = {
                title: "Todo 1",
                description: "Todo 1 description",
            };

            const createdTodo = await Todo.create(newTodo);

            const response = await await request.delete('/todo/delete').send({ todoId: createdTodo._id });

            expect(response.status).toBe(200);
            expect(response.body).toBeDefined();
            expect(response.body).toHaveProperty("title", newTodo.title);
            expect(response.body).toHaveProperty("description", newTodo.description);
        });
    });
});
