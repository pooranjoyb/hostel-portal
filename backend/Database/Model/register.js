import mongoose from 'mongoose';
const { Schema } = mongoose;

const registerSchema = new Schema({
    username: Number,
    password: String
});

const register = mongoose.model('register', registerSchema)

export default register;