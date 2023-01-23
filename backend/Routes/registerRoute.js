import express from 'express'
import register from '../Database/Model/register.js'

const registerRouter = express.Router();

//Register Route
registerRouter.post('/register', async (req, res) => {
   const usn = req.body.registrationNum
   const pass = req.body.pass
    const newUser = new register({
        username:  usn,
        password: pass
    })
    const token = newUser.generateAuthToken();
    
    await newUser.save()
    res.send("Voila! Registraion Successfull !!! Login using your credentials")
})

export default registerRouter;