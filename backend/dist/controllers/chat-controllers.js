import User from "../models/User.js";
import { configureOpenAI } from "../config/openai-config.js";
import { OpenAIApi } from "openai";
export const generateChatCompletion = async (req, res, next) => {
    const { message } = req.body;
    const user = await User.findById(res.locals.jwtData.id);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    //grab chats of user
    const chats = user.chats.map(({ roles, content }) => ({ roles, content }));
    chats.push({ content: message, roles: "user" });
    user.chats.push({ content: message, roles: "user" });
    //send all chats with new one to openai
    const config = configureOpenAI();
    const openai = new OpenAIApi(config);
    //get response from openai
};
//# sourceMappingURL=chat-controllers.js.map