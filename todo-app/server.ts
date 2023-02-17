import { connect, ConnectOptions } from "mongoose";
import app from "./index";

// connect to database
connect(
    process.env.MONGO_URI!,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    } as ConnectOptions,
    () => {
        console.log("Connected to database");
    }
);

const server = app.listen(process.env.PORT, () => {
    console.log("App is running on http://localhost:8080");
});

export default server;
