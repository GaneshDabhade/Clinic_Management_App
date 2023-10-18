import express from 'express';
import {createDoctorController} from '../controllers/doctorController.js';

const doctorRouter = express.Router();
doctorRouter.post('/register', createDoctorController);

export {doctorRouter};