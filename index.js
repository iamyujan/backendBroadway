import express from "express";
import routes from "./routes";
import mongoose from "mongoose";
import bodyParser from "body-parser";

let app = express()

mongoose.connect('mongodb://localhost:27017/broadway', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('conneted')
}).catch(err => {
    console.log(err)
})

app.use(bodyParser.json())

routes(app)

app.listen(3000, () => {
    console.log('listening to port 3000')
})