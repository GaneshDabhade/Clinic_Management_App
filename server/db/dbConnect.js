import mongoose from 'mongoose';

const dbURL = "mongodb://localhost:27017/HospitalApp";

async function ConnectDB(){
    try {
        await mongoose.connect(dbURL);
        console.log("Connected to DB Successfully.");
    } catch (error) {
        console.log(`Failed to connect to DB: ${error}`);
    }
}

export {ConnectDB};