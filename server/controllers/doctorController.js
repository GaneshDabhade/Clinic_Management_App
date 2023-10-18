import { createDoctorService } from '../services/doctorService.js'

async function createDoctorController(req, res){
    try {
        const doctor = await createDoctorService(req);
        res.status(201).send({mobile: doctor.Mobile});
    } catch (error) {
        res.status(500).send(`Failed to create Doctor, ${error}`);
    }
}

export {createDoctorController};