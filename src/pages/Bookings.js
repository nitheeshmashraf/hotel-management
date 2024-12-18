import React, { useState, useEffect } from 'react'
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Box,
} from '@mui/material'
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material'
import { getBookings } from '../services/api'
const Bookings = () => {
  const [bookings, setBookings] = useState([])

  const [openDialog, setOpenDialog] = useState(false)
  const [selectedBooking, setSelectedBooking] = useState(null)
  const [bookingDetails, setBookingDetails] = useState({
    guestName: '',
    room: '',
    checkIn: '',
    checkOut: '',
    bookingDate: '',
    status: '',
  })

  const handleEdit = (booking) => {
    setBookingDetails({ ...booking })
    setSelectedBooking(booking)
    setOpenDialog(true)
  }

  const handleDelete = (bookingId) => {
    setBookings(bookings.filter((booking) => booking.id !== bookingId))
  }

  const handleInputChange = (e) => {
    setBookingDetails({
      ...bookingDetails,
      [e.target.name]: e.target.value,
    })
  }

  const handleSave = () => {
    if (selectedBooking) {
      // Update existing booking
      setBookings(
        bookings.map((booking) =>
          booking.id === selectedBooking.id
            ? { ...booking, ...bookingDetails }
            : booking
        )
      )
    } else {
      // Add new booking
      setBookings([
        ...bookings,
        {
          id: bookings.length + 1,
          ...bookingDetails,
        },
      ])
    }
    setOpenDialog(false)
  }

  const handleDialogClose = () => {
    setOpenDialog(false)
  }
  // Fetch bookings data when component mounts
  useEffect(() => {
    const fetchBookings = async () => {
      const bookings = await getBookings()
      setBookings(bookings)
    }
    fetchBookings()
  }, []) // Empty dependency array ensures this runs only once on mount

  return (
    <Container>
      <h2>Bookings Management</h2>

      {/* Add New Booking Button */}
      <Box display="flex" justifyContent="flex-end" mb={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpenDialog(true)}
        >
          Add New Booking
        </Button>
      </Box>

      {/* Bookings Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <strong>Guest Name</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Room</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Booking Date</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Check-In</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Check-Out</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Status</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Actions</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell align="center">{booking.guestName}</TableCell>
                <TableCell align="center">{booking.room}</TableCell>
                <TableCell align="center">{booking.bookingDate}</TableCell>
                <TableCell align="center">{booking.checkIn}</TableCell>
                <TableCell align="center">{booking.checkOut}</TableCell>
                <TableCell align="center">{booking.status}</TableCell>
                <TableCell align="center">
                  <IconButton
                    color="primary"
                    onClick={() => handleEdit(booking)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    onClick={() => handleDelete(booking.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Booking Dialog */}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>
          {selectedBooking ? 'Edit Booking' : 'Add Booking'}
        </DialogTitle>
        <DialogContent>
          <TextField
            label="Guest Name"
            fullWidth
            margin="normal"
            name="guestName"
            value={bookingDetails.guestName}
            onChange={handleInputChange}
          />
          <TextField
            label="Room"
            fullWidth
            margin="normal"
            name="room"
            value={bookingDetails.room}
            onChange={handleInputChange}
          />
          <TextField
            label="Booking Date"
            fullWidth
            margin="normal"
            name="bookingDate"
            type="date"
            value={bookingDetails.bookingDate}
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Check-In Date"
            fullWidth
            margin="normal"
            name="checkIn"
            type="date"
            value={bookingDetails.checkIn}
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Check-Out Date"
            fullWidth
            margin="normal"
            name="checkOut"
            type="date"
            value={bookingDetails.checkOut}
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Status"
            fullWidth
            margin="normal"
            name="status"
            value={bookingDetails.status}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="secondary">
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

export default Bookings
