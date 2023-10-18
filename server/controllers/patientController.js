import {createPatientService, getPatientService} from '../services/patientService.js'

async function createPatientController(req, res){
    try {
        const patient = await createPatientService(req);
        console.log(patient);
        res.status(201).send(patient);
    } catch (error) {
        res.status(500).send("createPatientController: Failed to create Patient");
    }
}

async function getPatientController(req,res){
    try {
        const patient = await getPatientService(req);
        res.status(200).send(patient);
    } catch (error) {
        res.status(500).send("Failed to find patient");
    }
}

export {createPatientController, getPatientController} 