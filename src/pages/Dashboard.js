// Dashboard.js
import React, { useState, useEffect } from 'react'
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
import {
  getBookings,
  getMetrics,
  getOccupiedRooms,
  getReservations,
  getRooms,
} from '../services/api'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  // Sample data for summary metrics
  const [metrics, setMetrics] = useState([])
  const [hasMetricsInitialized, setHasMetricsInitialized] = useState(false)
  const [toDate, setToDate] = useState(() => {
    const today = new Date()
    return today.toISOString().split('T')[0] // Format to YYYY-MM-DD
  })
  // Sample data for upcoming reservations
  const [upcomingReservations, setUpcomingReservations] = useState([])

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
  // Fetch reservations data when component mounts
  useEffect(() => {
    const fetchReservations = async () => {
      const reservations = await getReservations()
      setUpcomingReservations(reservations)
    }
    fetchReservations()
    const fetchMetrics = async () => {
      const initialMetrics = await getMetrics() // Replace with your metrics fetch logic
      setMetrics(initialMetrics)
    }

    fetchMetrics()
  }, []) // Empty dependency array ensures this runs only once on mount
  useEffect(() => {
    if (metrics.length > 0 && !hasMetricsInitialized) {
      // Define all fetching functions
      const fetchMetricsData = async () => {
        try {
          const [rooms, occupiedRooms, bookings, revenue] = await Promise.all([
            getRooms(),
            getOccupiedRooms(),
            getBookings(),
            // getRevenue(), // Replace with the correct function for revenue
          ])
          // Filter for checked-out rooms and calculate total revenue
          const checkedOut = occupiedRooms.filter(
            (room) => room.is_checkedOut === true && room.checkOut === toDate
          )
          const revenueTotal = checkedOut.reduce(
            (sum, room) => sum + (room.total || 0),
            0
          )
          console.log(revenueTotal)

          const updatedMetrics = metrics.map((metric) => {
            switch (metric.id) {
              case 'Total_Rooms':
                return { ...metric, value: rooms.length }
              case 'Occupied_Rooms':
                return { ...metric, value: occupiedRooms.length }
              case 'Bookings':
                return { ...metric, value: bookings.length }
              case 'Revenue_Today': // Example metric ID for revenue
                return { ...metric, value: revenueTotal } // Adjust as per revenue data
              default:
                return metric
            }
          })

          setMetrics(updatedMetrics)
          setHasMetricsInitialized(true) // Set flag after successful data fetch
        } catch (error) {
          console.error('Error fetching metrics data:', error)
        }
      }

      fetchMetricsData()
    }
  }, [metrics, hasMetricsInitialized])
  // const fetchReportData = () => {
  //   const filteredData = rawReportData.filter((data) => {
  //     const bookingDate = new Date(data.bookingDate)
  //     const from = fromDate ? new Date(fromDate) : null
  //     const to = toDate ? new Date(toDate) : null
  //     return (!from || bookingDate >= from) && (!to || bookingDate <= to)
  //   })

  //   // Handle daily or other report types (if needed)
  //   setReportData(filteredData)
  // }
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
              sx={{
                backgroundColor: metric.color,
                color: '#fff',
                textDecoration: 'none',
              }}
              component={Link}
              to={metric.navigation}
            >
              <CardContent>
                <Typography align="center" variant="h6">
                  {metric.title}
                </Typography>
                <Typography align="center" variant="h4" fontWeight="bold">
                  {metric.id === 'Revenue_Today' && '₹'}
                  {metric.id === 'Revenue_Today'
                    ? parseFloat(metric.value).toFixed(2)
                    : metric.value}
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
                {upcomingReservations
                  .filter((reservation) => reservation.checkIn >= toDate)
                  .map((reservation) => (
                    <TableRow key={reservation.id}>
                      <TableCell align="center">
                        {reservation.guestName}
                      </TableCell>
                      <TableCell align="center">
                        {reservation.contactNumber}
                      </TableCell>
                      <TableCell align="center">
                        {reservation.checkIn}
                      </TableCell>
                      <TableCell align="center">
                        {reservation.checkOut}
                      </TableCell>
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
