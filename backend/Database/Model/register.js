import mongoose from 'mongoose';
const { Schema } = mongoose;
import jwt from 'jsonwebtoken'

const registerSchema = new Schema({
    username: Number,
    password: String,
    tokens: [{
        token: {
            type:String,
            required: true
        }
    }]
});

//generating token
registerSchema.methods.generateAuthToken = async function(){
    try{
        const token = jwt.sign({_id:this._id.toString()}, "mynameispooranjoybhattacharya")
        this.tokens = this.tokens.concat({token:token})  
        await this.save();   
    }
    catch(err){
        res.send("Error")
    }
}

const register = mongoose.model('register', registerSchema)

export default register;