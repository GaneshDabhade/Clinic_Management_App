// const USER = require('../models/user');
// const { getSingleUserService, createNewUserService, deleteUserService, getAllUsersService, updateUserService, getAllDoctorsService } = require('../services/userService');


// async function registerUserController (req, res){
//   try {
//     // Check if user already exist.
//     const existingUser = await getSingleUserService(req);
//     console.log("getUser Response: ", existingUser);
//     if(existingUser !== null){
//       console.log("User already exist.");
//       return res.status(409).send("User already exist.")
//     };
//     // User does not exist, Create new user.
//     await createNewUserService(req);
//     console.log("User Created Successfully!");

//     // Return newly created user object.
//     const newUser = await getSingleUserService(req);
//     return res.status(201).send(newUser);
//   } catch (error) {
//     res.status(500).send("Error occured while creating new user!", error);
//   }
// };

// async function getAllPatientsController (req, res){
//   try {
//     const patientsList = await getAllPatientsService();
//     return res.status(200).send(patientsList);
//   } catch (error) {
//     res.status(500).send("Error observed while getting patients list");
//   }
// }

// async function getAllDoctorsController (req, res){
//   try {
//     const doctorsList = await getAllDoctorsService();
//     return res.status(200).send(doctorsList); 
//   } catch (error) {
//     res.status(500).send(`Errors observed while getting the doctors list. ${error}`);
//   }
// }

// async function loginController (req, res) {
//   try {
//     // console.log("loginController Reqeust recieved: ", req.body);
//     // Check if user exists
//     const existingUser = await getSingleUserService(req);
//     console.log("loginController existingUser DB Responce recieved: ", existingUser);
//     if(existingUser !== null){
//       console.log("Valid User");
//       return res.status(200).send("Valid User");  
//     };
//     console.log("Invalid username or password");
//     return res.status(400).send("Invalid username or password"); 
//     // return res.status(400).render('/users/register'); 
//   } catch (error) {
//     res.status(500).status("Error occured while logging in user!");
//   }
// };

// async function deleteUserController (req, res) {
//   try {
//     // Delete the user
//     console.log("deleteUserController Reqeust recieved: ", req.body);
//     const deleteResponse = await deleteUserService(req);
//     console.log("deleteUserController response: ", deleteResponse);
//     return res.status(204).send("User deleted successfully.");
//   } catch (error) {
//     return res.status(500).send("Server Error while deleting the user.");
//   }
// };

// //Get all users
// async function getAllUsersController (req, res){
//   try {
//     console.log("getAllUsersController List users called from client.", req.body);
//     const getAllUSers = await getAllUsersService();
//     console.log("DB Response: ", getAllUSers);
//     res.status(200).send(getAllUSers);
//   } catch (error) {
//     res.send("Error in getting list of users.");
//   }
// };

// // Update single User
// async function updateUserController(req, res){
//   try {
//     // console.log("User update request: ", req.body);
//     const updateUser = await updateUserService(req);
//     // console.log("Response recieved: ", updateUser)
//     res.status(200).send(updateUser);
//   } catch (error) {
//     res.status(500).send(`Error updating user. ${error}`);
//   }
// }

// //Get single user details.
// async function getSingleUserController(req, res){
//   console.log("getSingleUserController request: ", req.body);
//   try {
//     const singleUser = await getSingleUserService(req);
//     res.status(200).send(singleUser);
//   } catch (error) {
//     console.log("Errors observed while getting user details.", error);
//     res.status(500).status("Errors in getting user");
//   }
// }

// module.exports = {
//     registerUserController,
//     getAllUsersController,
//     getSingleUserController,
//     loginController,
//     updateUserController,
//     deleteUserController,
//     getAllPatientsController,
//     getAllDoctorsController
// };
