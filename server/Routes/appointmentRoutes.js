import express from 'express';
import { createAppointmentController, deleteAppointmentController, getAppointmentsController, updateAppoinmentController } from '../controllers/appointmentsController.js';

const appointmentsRouter = express.Router();

appointmentsRouter.get('/', getAppointmentsController);
appointmentsRouter.post('/create', createAppointmentController);
appointmentsRouter.delete('/delete', deleteAppointmentController);
appointmentsRouter.patch('/update', updateAppoinmentController)

export {appointmentsRouter};