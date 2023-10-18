import { doctorLoginService } from "../services/doctorService.js";
import jwt from 'jsonwebtoken';

async function loginController(req, res){
    const jwt_Secret_Key="asghgaf789eerKf";
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

export {loginController};