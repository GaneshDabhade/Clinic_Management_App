import { APPOINTMENT } from "../models/AppointmentsModel.js";


async function createAppointmentService(req){
    const appointment = await APPOINTMENT.create(req);
    return appointment;
}

async function getAppointmentsService(){
    const appointments = await APPOINTMENT.find();
    return appointments;
}

async function deleteAppointmentSerivice(req){
    const resp = APPOINTMENT.findOneAndDelete(req.body);
    return resp;
}

async function updateAppoinmentService(req){
    const body = {doctor: req.body.doctor, patient: req.body.patient}
    const resp = await APPOINTMENT.findByIdAndUpdate(req.body._id, body);
    console.log("resp: ", resp);
    return resp;
}

export {createAppointmentService, getAppointmentsService, deleteAppointmentSerivice, updateAppoinmentService};