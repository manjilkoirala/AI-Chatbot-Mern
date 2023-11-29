import { connect, disconnect } from "mongoose";
async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL);
    }
    catch (error) {
        console.log(error);
        throw new Error("Could not connect to database");
    }
}
async function disconnectfromDatabase() {
    try {
        await disconnect();
    }
    catch (error) {
        console.log(error);
        throw new Error("Could not disconnect to database");
    }
}
export { connectToDatabase, disconnectfromDatabase };
//# sourceMappingURL=connection.js.map