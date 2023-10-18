import express from 'express';
import {createPatientController} from '../controllers/patientController.js';

const patientRouter = express.Router();
patientRouter.post('/register', createPatientController);

export {patientRouter};