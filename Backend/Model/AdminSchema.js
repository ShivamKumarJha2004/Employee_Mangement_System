import mongoose from "mongoose";
const admin = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
const Admin = mongoose.model('adminLogin', admin);
export default Admin;