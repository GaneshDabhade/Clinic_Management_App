import React, { useState } from "react";
import { Container, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Grid, Card, CardContent, Typography, AppBar, Toolbar, Fab, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import NavBar from "./NavBar";

const Home = () => {
    const [appointments, setAppointments] = useState([
        { id: 1, patientName: "John Doe", date: "2024-01-10", time: "10:00 AM", doctor: "Dr. Smith" },
        { id: 2, patientName: "Jane Smith", date: "2024-01-15", time: "2:30 PM", doctor: "Dr. Johnson" },
        { id: 3, patientName: "Alice Johnson", date: "2024-01-20", time: "11:45 AM", doctor: "Dr. Brown" },
    ]);
    const [openDialog, setOpenDialog] = useState(false);
    const [editAppointment, setEditAppointment] = useState(null);

    const handleEditClick = (appointment) => {
        setEditAppointment(appointment);
        setOpenDialog(true);
    };

    const handleSaveEdit = () => {
        // Logic to save the edited appointment
        // Example: updateAppointment(editAppointment)
        setOpenDialog(false);
        setEditAppointment(null);
    };

    const handleDeleteAppointment = (appointmentId) => {
        // Logic to delete the appointment with the provided ID
        // Example: deleteAppointment(appointmentId)
        // After successfully deleting the appointment, update the appointments list
        const updatedAppointments = appointments.filter(appointment => appointment.id !== appointmentId);
        setAppointments(updatedAppointments);
    };

    return (
        <Container>
            <NavBar></NavBar>

            {/* Displaying appointments */}
            <Grid container spacing={2}>
                {appointments.map(appointment => (
                    <Grid item xs={12} sm={6} md={4} key={appointment.id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{appointment.patientName}</Typography>
                                <Typography>Date: {appointment.date}</Typography>
                                <Typography>Time: {appointment.time}</Typography>
                                <Typography>Doctor: {appointment.doctor}</Typography>
                                {/* Display other appointment details */}
                                <Button onClick={() => handleEditClick(appointment)} startIcon={<EditIcon />}>Edit</Button>
                                <Button onClick={() => handleDeleteAppointment(appointment.id)} startIcon={<DeleteIcon />}>Delete</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Dialog for editing appointments */}
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogTitle>Edit Appointment</DialogTitle>
                <DialogContent>
                    {editAppointment && (
                        <>
                            <TextField
                                label="Patient Name"
                                value={editAppointment.patientName}
                                // Handle onChange for patient name
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Date"
                                type="date"
                                value={editAppointment.date}
                                // Handle onChange for date
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                label="Time"
                                type="time"
                                value={editAppointment.time}
                                // Handle onChange for time
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <FormControl fullWidth margin="normal">
                                <InputLabel>Doctor</InputLabel>
                                <Select
                                    value={editAppointment.doctor}
                                    // Handle onChange for doctor selection
                                    label="Doctor">
                                    <MenuItem value="Dr. Smith">Dr. Smith</MenuItem>
                                    <MenuItem value="Dr. Johnson">Dr. Johnson</MenuItem>
                                    <MenuItem value="Dr. Brown">Dr. Brown</MenuItem>
                                    {/* Add more doctors as needed */}
                                </Select>
                            </FormControl>
                        </>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
                    <Button onClick={handleSaveEdit}>Save</Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default Home;
