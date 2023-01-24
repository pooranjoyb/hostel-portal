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
        const isMatchUsn = await usn.localeCompare(user.username)
        const isMatchPass = await pass.localeCompare(user.password)
        if (isMatchUsn == 0 || isMatchPass == 0) {
            res.send('User already exists!!! Please Login using your Registration No. and Password')
        } else {
            const token = newUser.generateAuthToken();
            try {
                newUser.save()
                res.send("Voila! Registraion Successfull !!! Login using your credentials")

            } catch (err) {
                res.send("Couldnot register. Contact the developer")
            }
        }
    }).clone().catch((err) => {
        console.log(err)
    })
})

export default registerRouter;