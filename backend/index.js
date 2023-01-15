import express from 'express'
// import cors from 'cors'

const app = express();

// app.use(cors());

app.use(express.static("./public"))

app.listen(3000, () => {
    console.log("App listening on port 3000")
})
