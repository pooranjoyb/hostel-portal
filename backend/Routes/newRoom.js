import express from 'express'

const newRoom = express.Router();

//Login Route
newRoom.get('/newRoom', (req, res) => {
    res.render('../public/views/newRoom', {title: 'Apply New Room'})
})

export default newRoom;