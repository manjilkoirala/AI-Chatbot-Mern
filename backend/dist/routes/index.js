import { Router } from "express";
import userRoutes from "./user-routers.js";
import chatsRoutes from "./chats-routes.js";
const appRouter = Router();
appRouter.use("/user", userRoutes); //domain/api/v1/user
appRouter.use("/chats", chatsRoutes); //domain/api/v1/chats
export default appRouter;
//# sourceMappingURL=index.js.map