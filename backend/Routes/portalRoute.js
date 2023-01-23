import express from 'express'
import register from '../Database/Model/register.js'
const portalRoute = express.Router();

//Register Route
portalRoute.post('/userPortal', async (req, res) => {
    try {
        const usn = req.body.usernameLogin
        const pass = req.body.passwordLogin
        await register.findOne({ username: usn }, async (err, user) => {
            const isMatchUsn = await usn.localeCompare(user.username)
            const isMatchPass = await pass.localeCompare(user.password)
            if (isMatchUsn == 0 && isMatchPass == 0) {
                res.status(201).render('../public/views/userPortal', { title: `User ${user.username}`})
            } else {
                res.send("Invalid credentials")
            }
        }).clone().catch((err) => {
            console.log(err)
        })
    } catch (err) {
        console.log(err)
        res.status(400).send("Invalid login details")
    }
})
export default portalRoute;