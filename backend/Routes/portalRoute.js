import express from 'express'

const portalRoute = express.Router();

//Register Route
portalRoute.get('/userPortal', (req, res) => {
    res.render('../public/views/userPortal', {title: 'User-Portal'})
})

export default portalRoute;