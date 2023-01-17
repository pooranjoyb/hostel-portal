import express from 'express'

const loginRoute = express.Router();

//Register Route
loginRoute.get('/login', (req, res) => {
    res.render('../public/views/login', {title: 'Login'})
})

export default loginRoute;