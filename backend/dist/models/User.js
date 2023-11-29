import mongoose from 'mongoose';
import { randomUUID } from 'crypto';
const chatSchema = new mongoose.Schema({
    id: {
        type: String,
        default: randomUUID(),
    },
    roles: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
});
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    chats: [chatSchema]
});
const User = mongoose.model("User", userSchema);
export default User;
//# sourceMappingURL=User.js.map