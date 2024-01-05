import { Button, Dialog, DialogContent, DialogTitle, TextField } from "@mui/material";
import React from "react";

const CreateAppointmentModal = () => {
    return(
        <Dialog>
            <DialogTitle>Appointment</DialogTitle>
            <DialogContent className="appTextField">
                <TextField label="Patient Name" type="text" fullWidth></TextField>
                <TextField label="Date" type="date" fullWidth></TextField>
                <TextField label="Time" type="text" fullWidth></TextField>
                <Button label="Create"></Button>
            </DialogContent>
        </Dialog>
    )
}

export default CreateAppointmentModal;