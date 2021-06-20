import mongoose from "mongoose"
import { UserDetailModel } from "../models/UserDetailModel.js"

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

const signupController = async (req, res) => {
    const UserDetail = new UserDetailModel({
        UserName: req.body.UserName,
        EmailId: req.body.EmailId,
        Password: req.body.Password,
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Bio: req.body.Bio})
    try {
        const userDetailsSaved = await UserDetail.save()
        res.json(userDetailsSaved)
    } catch (err) {
        res.json({message: err})      
    }
}

const loginController = async (req, res) => {
    // res.send('User Logged in!')
    console.log(req.params.userId)
    try {
        const userId = await UserDetailModel.findById(req.params.userId)
        res.json(userId)
    } catch(err) {
        res.json({
            message: err
        })
    }
}



export { 
    signupController,
    loginController, 
}