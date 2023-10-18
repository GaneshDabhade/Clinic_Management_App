// const DOCTOR = require("../models/DoctorModel");
// const PATIENT = require("../models/PatientModel");
// const USER = require("../models/user")

// const getSingleUserService = async(userObject)=>{
//     try {
//         console.log("getSingleUserService Reqeust recieved: ", userObject.body);
//         const user = await USER.findOne(userObject.body).exec();
//         return user;
//     } catch (error) {
//         console.log("Issue with fetching from DB!");
//         return null;
//     }
// }

// const createNewUserService = async(userObject)=>{
//     try {
//         const response = await USER.create(userObject.body);
//         console.log("createNewUserService Details fetched: ", response);
//         return response;
//     } catch (error) {
//         console.log("User Not Created!", error);
//         return null;
//     }
// }

// const deleteUserService = async(userObject)=>{
//     try {
//         const response = await USER.findOneAndDelete(userObject.body);
//         console.log("Delete DB Response: ", response);
//     } catch (error) {
//         console.log("User Not Deleted!", error);
//         return null;
//     }
// }

// const getAllUsersService = async()=>{
//     try {
//         const usersList = await USER.find();
//         return usersList;
//     } catch (error) {
//         console.log("Errors finding users.");
//         return null;
//     }
// }

// const getAllPatientsService = async()=>{
//     try {
//         const patientsList = await PATIENT.find();
//         return patientsList;
//     } catch (error) {
//         console.log("Errors finding patientsList.");
//         return null;
//     }
// }

// const getAllDoctorsService = async()=>{
//     try {
//         const doctorsList = await USER.find({userType:"doctor"});
//         return doctorsList;
//     } catch (error) {
//         console.log("Errors finding doctorsList.");
//         return null;
//     }
// }


// const updateUserService = async(req)=>{
//     try {
//         console.log("Request Body: ", req.body.username);
//         const updateUserResp = await USER.findOneAndUpdate({username: req.body.username}, {email:req.body.email});
//         // console.log("DB updateUserService: ", updateUserResp);
//         return updateUserResp;
//     } catch (error) {
//         console.log(`Error observed while updaing user: ${error.message}`);
//         return null;
//     }
// }

// module.exports = {getSingleUserService, createNewUserService, deleteUserService, getAllUsersService, updateUserService, getAllPatientsService, getAllDoctorsService};