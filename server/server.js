import express from "express";
import cors from "cors";
import mongoose from "mongoose"
import Pusher from "pusher"

//app config
const app = express()
const port = process.env.PORT || 5001

//middlewares
app.use(express.json())
app.use(cors())

//DB config
const connection_url = 'mongodb+srv://instagramclone:instagramclone@cluster0.0x9ex.mongodb.net/instagram-clone-db?retryWrites=true&w=majority'
mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.once('open', () => {
    console.log('DB connected!')
})

//api routes
app.get("/", (req, res) => {
    res.status(200)
        .send("Hello world")
});

app.listen(port, () => {
    console.log(`Listeng to ${port}`)
});