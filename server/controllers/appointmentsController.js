import {createAppointmentService, deleteAppointmentSerivice, getAppointmentsService, updateAppoinmentService} from '../services/appointmentService.js'
import { findDoctorByNameService } from '../services/doctorService.js';
import { getPatientByNameService, getPatientService } from '../services/patientService.js';

async function createAppointmentController(req, res){
    try {
        const doctor = await findDoctorByNameService(req.body.doctor);
        const patient = await getPatientByNameService(req.body.patient);
        const bookingDate = Date.now();
        const body = {doctor, patient, bookingDate};
        console.log(body);
        const appointment = await createAppointmentService(body);
        res.status(201).send({Success: true, message:"Created new appointment", appointmentID: appointment._id});
    } catch (error) {
        res.status(500).send({Success: false, message: error.message});
    }
}

async function getAppointmentsController(req, res){
    try {
        const appointments = await getAppointmentsService();
        res.status(200).send({Success: true, appointments});
    } catch (error) {
        res.status(500).send({Success: false, message: "Failed to get appointments", message: error.message});
    }
}

async function deleteAppointmentController(req, res){
    try {
        console.log(req.body)
        const resp = await deleteAppointmentSerivice(req);
        if(resp==!null){
            res.status(200).send({Success: true, message: "Appointment Deleted Successfully!", resp});
        }else(
            res.status(200).send({success: false, message:"Appointment not present"})
        )
    } catch (error) {
        res.status(500).send({Success: false, error: error.message});
    }
}

async function updateAppoinmentController(req, res){
    try {
        const resp = await updateAppoinmentService(req);
        if(resp === null){
            res.status(200).send({success: false, message: "Invalid Appointment"});
        }else{
            res.status(200).send({success: true, message: "Updated Appointment Successfully!", resp});
        }   
    } catch (error) {
        res.status(500).send({success: false, error: error.message});
    }
}

export {createAppointmentController, getAppointmentsController, deleteAppointmentController, updateAppoinmentController};