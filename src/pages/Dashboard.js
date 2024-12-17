// Dashboard.js
import React, { useState } from 'react'
import {
  Box,
  Card,
  CardContent,
  Typography,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  IconButton,
} from '@mui/material'
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material'

const Dashboard = () => {
  // Sample data for summary metrics
  const metrics = [
    { title: 'Total Rooms', value: 120, color: '#4CAF50' },
    { title: 'Occupied Rooms', value: 80, color: '#FF9800' },
    { title: 'Pending Bookings', value: 15, color: '#2196F3' },
    { title: 'Revenue Today', value: '$4,500', color: '#9C27B0' },
  ]

  // Sample data for upcoming reservations
  const [upcomingReservations, setUpcomingReservations] = useState([
    {
      id: 1,
      guestName: 'John Doe',
      contactNumber: '+97155234234',
      checkIn: '2024-09-20',
      checkOut: '2024-09-25',
      room: '101',
      occupants: 2,
    },
    {
      id: 2,
      guestName: 'Jane Smith',
      contactNumber: '+97155234234',
      checkIn: '2024-09-21',
      checkOut: '2024-09-26',
      room: '102',
      occupants: 2,
    },
    {
      id: 3,
      guestName: 'Robert Brown',
      contactNumber: '+97155234234',
      checkIn: '2024-09-22',
      checkOut: '2024-09-27',
      room: '201',
      occupants: 2,
    },
    {
      id: 4,
      guestName: 'Emily Davis',
      contactNumber: '+97155234234',
      checkIn: '2024-09-23',
      checkOut: '2024-09-28',
      room: '202',
      occupants: 2,
    },
  ])

  // Dialog state for editing
  const [open, setOpen] = useState(false)
  const [selectedReservation, setSelectedReservation] = useState(null)

  // Handle opening and closing the edit dialog
  const handleClickOpen = (reservation) => {
    setSelectedReservation(reservation)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setSelectedReservation(null)
  }

  // Handle form input change
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setSelectedReservation((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Handle saving the updated reservation
  const handleSave = () => {
    setUpcomingReservations((prev) =>
      prev.map((reservation) =>
        reservation.id === selectedReservation.id
          ? selectedReservation
          : reservation
      )
    )
    setOpen(false)
  }

  // Handle deleting a reservation
  const handleDelete = (id) => {
    setUpcomingReservations((prev) =>
      prev.filter((reservation) => reservation.id !== id)
    )
  }

  return (
    <Container>
      <Box my={4}>
        {/* Dashboard Header */}
        <Typography variant="h4" gutterBottom align="center">
          Hotel Dashboard
        </Typography>

        {/* Metrics Section */}
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fill, minmax(240px, 1fr))"
          gap={3}
        >
          {metrics.map((metric, index) => (
            <Card
              key={index}
              sx={{ backgroundColor: metric.color, color: '#fff' }}
            >
              <CardContent>
                <Typography align="center" variant="h6">
                  {metric.title}
                </Typography>
                <Typography align="center" variant="h4" fontWeight="bold">
                  {metric.value}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Upcoming Reservations Section */}
        <Box mt={5}>
          <Typography variant="h5" gutterBottom>
            Upcoming Reservations
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center">
                    <strong>Guest Name</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>Contact Number</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>Check-in Date</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>Check-out Date</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>Room Number</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>Number of occupants</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>Actions</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {upcomingReservations.map((reservation) => (
                  <TableRow key={reservation.id}>
                    <TableCell align="center">
                      {reservation.guestName}
                    </TableCell>
                    <TableCell align="center">
                      {reservation.contactNumber}
                    </TableCell>
                    <TableCell align="center">{reservation.checkIn}</TableCell>
                    <TableCell align="center">{reservation.checkOut}</TableCell>
                    <TableCell align="center">{reservation.room}</TableCell>
                    <TableCell align="center">
                      {reservation.occupants}
                    </TableCell>
                    <TableCell align="center">
                      <IconButton
                        color="primary"
                        onClick={() => handleClickOpen(reservation)}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        color="secondary"
                        onClick={() => handleDelete(reservation.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>

      {/* Edit Reservation Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Reservation</DialogTitle>
        <DialogContent>
          <TextField
            label="Guest Name"
            fullWidth
            margin="normal"
            name="guestName"
            value={selectedReservation?.guestName || ''}
            onChange={handleInputChange}
          />
          <TextField
            label="Contact Number"
            fullWidth
            margin="normal"
            name="contactNumber"
            value={selectedReservation?.contactNumber || ''}
            onChange={handleInputChange}
            type="tel" // Use "tel" for phone numbers
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" // Example pattern for phone number format
            helperText="Format: 123-456-7890" // Optional helper text for format guidance
          />
          <TextField
            label="Check-in Date"
            fullWidth
            margin="normal"
            name="checkIn"
            value={selectedReservation?.checkIn || ''}
            onChange={handleInputChange}
            type="date"
          />
          <TextField
            label="Check-out Date"
            fullWidth
            margin="normal"
            name="checkOut"
            value={selectedReservation?.checkOut || ''}
            onChange={handleInputChange}
            type="date"
          />
          <TextField
            label="Room Number"
            fullWidth
            margin="normal"
            name="room"
            value={selectedReservation?.room || ''}
            onChange={handleInputChange}
          />
          <TextField
            label="Number of occupants"
            fullWidth
            margin="normal"
            name="occupants"
            value={selectedReservation?.occupants || ''}
            onChange={handleInputChange}
            type="number"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}

export default Dashboard
