import express from 'express'
import bp from'body-parser'
import Connection from './Database/db.js';
import dotenv from 'dotenv'
import registerRouter from './Routes/register.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080
//setting up viewport for ejs
app.set('view engine', 'ejs');

//loading static asssets
app.use(express.static("./public"))

app.use(bp.json());
app.use(bp.urlencoded({extended: false}))

//home route
app.get('/', (req, res) => {
    res.render('../public/views/base', {title: "Hostel Portal"});
})

//Register Route
app.use('/', registerRouter)

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
    Connection();
})
