import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    Mobile: {
        type: Number,
        required: true
    },
    userType: {
        type: String,
        required: true
    },
    FirstName: {
        type: String,
    },
    LastName: {
        type: String,
    }
})

const DOCTOR = mongoose.model('Doctors', doctorSchema);

export {DOCTOR};