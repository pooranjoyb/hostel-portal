import express from 'express'

const complaintRoute = express.Router();

//Login Route
complaintRoute.get('/complaint', (req, res) => {
    res.render('../public/views/complaint', {title: 'Complaint'})
})

export default complaintRoute;