import { DOCTOR } from "../models/DoctorModel.js";

async function createDoctorService(req){
    const doctor = await DOCTOR.create(req.body);
    return doctor;
}

async function doctorLoginService(req){
    console.log("req.body", req.body);
    const doctor = await DOCTOR.findOne(req.body).exec();
    return doctor;
}

async function updateTreatedPatientService(patient, doctor){
    try {
        await doctor.patientsTreated.push(patient);
    } catch (error) {
        throw error;
    }
}

async function findDoctorByNameService(name){
    const doctor = await DOCTOR.findOne({username: name}).exec();
    return doctor;
}

export {createDoctorService, findDoctorByNameService, updateTreatedPatientService, doctorLoginService};