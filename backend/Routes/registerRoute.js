import express from 'express'
import register from '../Database/Model/register.js'

const registerRouter = express.Router();

//Register Route
registerRouter.post('/register', (req, res) => {
    const usn = req.body.registrationNum
    const pass = req.body.pass
    const newUser = new register({
        username: usn,
        password: pass
    })

    register.findOne({ username: usn }, async (err, user) => {
        if (err) {
            res.send(err)
        }
        else if (user) {
            res.send('User already exists!!! Please Login')
        } else {
            const token = newUser.generateAuthToken();
            try {
                newUser.save()
                res.send("Voila! Registraion Successfull !!! Login using your credentials")

            } catch (err) {
                res.send("Couldnot register. Contact the developer")
            }
        }
    }).catch((err) => {
        console.log("Catch block executed",err)
    })
})

export default registerRouter;