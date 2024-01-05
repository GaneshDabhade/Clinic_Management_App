import Add from "@mui/icons-material/Add";
import { AppBar, Button, Dialog, DialogTitle, Toolbar, Typography } from "@mui/material";
import React from "react";
import CreateAppointmentModal from "./CreateAppointmentModal";

const NavBar = () =>{
    return(
        <>
        <AppBar position="static">
            <Toolbar className="TopNavBar">
                <Typography variant="h6">My Appointments</Typography>
                <Button id="appBtn" variant="contained" color="success">
                    <Add></Add>
                    Book New Appointment
                </Button>
            </Toolbar>
        </AppBar>
        <CreateAppointmentModal></CreateAppointmentModal>
        </>
    )
}

export default NavBar;