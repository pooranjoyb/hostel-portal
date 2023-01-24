import express from 'express'
import register from '../Database/Model/register.js'

const registerRouter = express.Router();

//Register Route
registerRouter.post('/register', (req, res) => {
   const usn = req.body.registrationNum
   const pass = req.body.pass
    const newUser = new register({
        username:  usn,
        password: pass
    })
    const token = newUser.generateAuthToken();
    try{
         newUser.save()
        res.send("Voila! Registraion Successfull !!! Login using your credentials")
        
    }catch(err){
        res.send("Couldnot register to database. Parallel saves not allowed")
    }
})

export default registerRouter;