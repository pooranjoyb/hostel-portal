import express from 'express'
import register from '../Database/Model/register.js'
const portalRoute = express.Router();
import bcrypt from 'bcryptjs'

//Register Route
portalRoute.post('/userPortal', async (req, res) => {
    const usn = req.body.usernameLogin
    const pass = req.body.passwordLogin
    try {
        await register.findOne({ username: usn }, async (err, user) => {
            if(err){
                res.send(err)
            }
            if (user) {
                bcrypt.compare(pass, user.password, (err, isMatch) => {
                    if (err){
                        res.send(err)
                    }
                    if (isMatch) {
                        res.status(201).render('../public/views/userPortal', { title: `User ${user.username}`})
                    }
                    else{
                        res.send("Invalid credentials")
                    }
                })
            } else {
                res.send("User not found. Please register yourself.")
            }
        }).clone().catch((err) => {
            console.log(err)
        })
    } catch (err) {
        console.log(err)
        res.status(400).send("SERVER ERROR. Contact the Developer")
    }
})
export default portalRoute;