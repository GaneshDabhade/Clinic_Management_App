import { createDoctorService, doctorLoginService } from "../services/doctorService.js";
import jwt from 'jsonwebtoken';
import { createPatientService } from "../services/patientService.js";

const jwt_Secret_Key="asghgaf789eerKf";

async function loginController(req, res){
    try {
        // Check the user type and based on that call the respective login service.
        const userType = req.body.userType;
        let loginResp = "";
        if(userType === "Doctor"){
            loginResp = await doctorLoginService(req);
        }else if(userType === "Patient"){
            loginResp = "PatientREsp";
        }
        // Validate the service response.
        if(loginResp !== null){
            const token = jwt.sign({_id: loginResp._id}, jwt_Secret_Key);
            res.status(200).send({Success: true, message: loginResp, token});
        }else{
            res.status(400).send({Success: false, message: "Invalid Username or password."})
        }
    } catch (error) {
        res.status(500).send({Success: false, error: error.message});
    }
}

async function registerController(req, res){
    console.log(req.body);
    const userType = req.body.userType;
    console.log("UserType: ", userType);
    if(userType === "Doctor"){
        try {
            console.log("Inside Create doctor block")
            const doctor = await createDoctorService(req);
            console.log("DoctorID is: ",doctor._id.toString());
            const newDoctorID = doctor._id.toString();
            const token = jwt.sign({_id: newDoctorID}, jwt_Secret_Key); 
            res.status(201).send({Success: true, message: "Doctor account created Successfully!", token});
        } catch (error) {
            res.status(500).send({Success: false, message: "Failed to create Doctor account!", error});
        }
    }else if(userType === "Patient") {
        try {
            console.log("Inside Create doctor block")
            const patient = await createPatientService(req);
            console.log("PatientID is: ", patient._id.toString());
            const newPatientID = patient._id.toString();
            const token = jwt.sign({_id: newPatientID}, jwt_Secret_Key);
            res.status(201).send({Success: true, message: "Patient account created Successfully!", token});
        } catch (error) {
            res.status(500).send({Success: false, message: "Failed to create Patient account!", error});
        }
    }
}

export {loginController, registerController};