import app from "../../index";
import supertest from "supertest";
import { connect, ConnectOptions, connection, model } from "mongoose";
const request = supertest(app);

const Goal = model("Goal")

describe("Goal API", () => {
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
        await Goal.deleteMany({});
        await connection.close().then(() => {
            console.log("Connection closed");
        });
    });

    describe("GET /goal/get-all - test get all goal endpoint", () => {
        it("Return array of goals", async () => {
            const response = await request.get("/goal/get-all");
            expect(response.status).toBe(200);
            expect(response.body).toBeDefined();
            expect(Array.isArray(response.body)).toBe(true);
        });
    });

    describe("POST /goal/create - test create goal endpoint", () => {
        it("Return created goal", async () => {
            const newGoal = {
                title: "Goal 1",
                description: "Goal 1 description",
                deadline: "2023-12-31T00:00:00.000Z",
            };

            const response = await request.post("/goal/create").send(newGoal);

            expect(response.status).toBe(201);
            expect(response.body).toBeDefined();
            expect(response.body).toHaveProperty("title", newGoal.title);
            expect(response.body).toHaveProperty("description", newGoal.description);
            expect(response.body).toHaveProperty("deadline", newGoal.deadline);
        });
    });

    describe("PUT /goal/update - test update goal endpoint", () => {
        it("Return updated goal", async () => {
            const newGoal = {
                title: "Goal 1",
                description: "Goal 1 description",
                deadline: "2023-12-31T00:00:00.000Z",
            };

            const createdGoal = await request.post("/goal/create").send(newGoal);

            const updatedGoal = {
                goalId: createdGoal.body._id,
                goal: {
                    title: "Goal 1 updated",
                    description: "Goal 1 description updated",
                    deadline: "2024-12-31T00:00:00.000Z",
                },
            };

            const response = await request.put("/goal/update").send(updatedGoal);

            expect(response.status).toBe(200);
            expect(response.body).toBeDefined();
            expect(response.body).toHaveProperty("title", updatedGoal.goal.title);
            expect(response.body).toHaveProperty("description", updatedGoal.goal.description);
            expect(response.body).toHaveProperty("deadline", updatedGoal.goal.deadline);
        });
    });

    describe("DELETE /goal/delete - test delete goal endpoint", () => {
        it("Return deleted goal", async () => {
            const newGoal = {
                title: "Goal 1",
                description: "Goal 1 description",
                deadline: "2023-12-31T00:00:00.000Z",
            };

            const createdGoal = await request.post("/goal/create").send(newGoal);

            const deletedGoal = {
                goalId: createdGoal.body._id,
            };

            const response = await request.delete("/goal/delete").send(deletedGoal);

            expect(response.status).toBe(200);
            expect(response.body).toBeDefined();
            expect(response.body).toHaveProperty("title", newGoal.title);
            expect(response.body).toHaveProperty("description", newGoal.description);
            expect(response.body).toHaveProperty("deadline", newGoal.deadline)
        });
    });

});