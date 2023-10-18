import mongoose from "mongoose";

const AppointmentSchema = mongoose.Schema({
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctors',
        required: true
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patients',
        required: true
    },
    // appointmentScheduled: {
    //     type: Date
    // },
    bookingDate: {
        type: Date
    }
})

const APPOINTMENT = mongoose.model('Appointments', AppointmentSchema);

export {APPOINTMENT};