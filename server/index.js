import express from 'express';
import cors from 'cors';
import { ConnectDB } from './db/dbConnect.js';
import {patientRouter} from './Routes/patientRoutes.js'
import {doctorRouter} from './Routes/doctorRoutes.js'
import { authRouter } from './Routes/authRoutes.js';
import { appointmentsRouter } from './Routes/appointmentRoutes.js';


const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/patient', patientRouter);
app.use('/doctor', doctorRouter);
app.use('/', authRouter);
app.use('/appointments', appointmentsRouter);

ConnectDB();

app.listen(PORT, (error)=>{
    if(!error){
        console.log(`Server started Successfully. http://localhost:${PORT}/`);
    }else{
        console.log("Failed to start the server.");
    }
});

