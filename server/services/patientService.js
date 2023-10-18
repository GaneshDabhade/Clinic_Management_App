import {PATIENT} from '../models/PatientModel.js';

async function createPatientService(req){
    try {
        console.log("New Patient creation request.", req.body);
        const patient = await PATIENT.create(req.body);
        return patient;
    } catch (error) {
        console.log("createPatientService: Failed to create patient");
        return null;
    }
}

async function getPatientByNameService(username){
    const patient = await PATIENT.findOne({username:username});
    return patient;
}

async function getPatientService(req){
    try {
        const patient = await PATIENT.findOne(req.body);
        return patient;   
    } catch (error) {
        console.log("getPatientService: Failed to find the patient.")
        return null
    }
}

export {createPatientService, getPatientService, getPatientByNameService};