import express from 'express'
import bp from'body-parser'

const app = express();

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

app.listen(3000, () => {
    console.log("App listening on port 3000")
})
