import express from 'express'
import bp from'body-parser'
import Connection from './Database/db.js';
import dotenv from 'dotenv'
import registerRouter from './Routes/registerRoute.js';
import loginRouter from './Routes/loginRoute.js';
import portalRoute from './Routes/portalRoute.js';

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

//Login Route
app.use('/', loginRouter)

//Portal route
app.use('/', portalRoute)

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
    Connection();
})
