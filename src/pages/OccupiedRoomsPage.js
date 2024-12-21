import React, { useEffect, useState } from 'react'
import {
  Box,
  Divider,
  MenuItem,
  Select,
  Container,
  FormControl,
  InputLabel,
  Typography,
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
import { getOccupiedRooms } from '../services/api'

const OccupiedRoomsPage = () => {
  const [disableAdd, setDisableAdd] = useState(false)
  const [rooms, setRooms] = useState([])
  const [selectedRoom, setSelectedRoom] = useState(null)
  const [newPayment, setNewPayment] = useState({ mode: 'Cash', amount: '' })

  const handleOpenRoom = (room) => {
    setSelectedRoom(room)
  }

  const handleCloseDialog = () => {
    setSelectedRoom(null)
    setNewPayment({ mode: 'Cash', amount: '' })
  }

  const handleCheckout = () => {
    selectedRoom.is_checkedOut = true
    setRooms(...rooms, selectedRoom)
    setRooms(rooms.filter((room) => room.id !== selectedRoom.id))
    handleCloseDialog()
  }

  const handleAddPaymentMode = () => {
    const totalPayment = selectedRoom.paymentModes.reduce(
      (sum, mode) => sum + mode.amount,
      0
    )

    const newTotal = totalPayment + parseFloat(newPayment.amount)

    if (newTotal > selectedRoom.total) {
      console.error("Total payments exceed the room's total amount!")
      alert("Total payments exceed the room's total amount!")
      return // Prevent updating if the limit is exceeded
    }

    const updatedPaymentModes = selectedRoom.paymentModes.some(
      (mode) => mode.mode === newPayment.mode
    )
      ? selectedRoom.paymentModes.map((mode) =>
          mode.mode === newPayment.mode
            ? { ...mode, amount: mode.amount + parseFloat(newPayment.amount) }
            : mode
        )
      : [
          ...selectedRoom.paymentModes,
          { ...newPayment, amount: parseFloat(newPayment.amount) },
        ]

    const updatedRoom = {
      ...selectedRoom,
      totalPaid: newTotal,
      balancetoPay: selectedRoom.total - newTotal,
      paymentModes: updatedPaymentModes,
    }

    setRooms(
      rooms.map((room) => (room.id === selectedRoom.id ? updatedRoom : room))
    )
    setSelectedRoom(updatedRoom) // Update details in the dialog

    // Disable add button if balance is paid
    if (updatedRoom.balancetoPay === 0) {
      setDisableAdd(true)
    }

    // Reset new payment form
    setNewPayment({ mode: 'Cash', amount: '' })
  }
  useEffect(() => {
    const fetchOccupiedRooms = async () => {
      const rooms = await getOccupiedRooms()
      setRooms(rooms.filter((room) => room.is_checkedOut === false))
    }
    fetchOccupiedRooms()
  }, []) // Empty dependency array ensures this runs only once on mount
  useEffect(() => {
    console.log(rooms)
  }, [rooms])
  return (
    <Container>
      <Box>
        <Typography variant="h4" gutterBottom>
          Manage Occupied Rooms
        </Typography>

        <Box mt={5}>
          <Typography variant="h5" gutterBottom>
            Occupied
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
                    <strong>Total</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>Actions</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rooms.map((room) => (
                  <TableRow key={room.id}>
                    <TableCell align="center">{room.guestName}</TableCell>
                    <TableCell align="center">{room.contactNumber}</TableCell>
                    <TableCell align="center">{room.checkIn}</TableCell>
                    <TableCell align="center">{room.checkOut}</TableCell>
                    <TableCell align="center">{room.room}</TableCell>
                    <TableCell align="center">{room.occupants}</TableCell>
                    <TableCell align="center">
                      ₹{room.total.toFixed(2)}
                    </TableCell>
                    <TableCell align="center">
                      <IconButton
                        color="primary"
                        onClick={() => handleOpenRoom(room)}
                      >
                        <EditIcon />
                      </IconButton>
                      {/* <IconButton
                      color="secondary"
                      onClick={() => handleDelete(room.id)}
                    >
                      <DeleteIcon />
                    </IconButton> */}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        {selectedRoom && (
          <Dialog
            open={true}
            onClose={handleCloseDialog}
            fullWidth
            maxWidth="sm"
          >
            <DialogTitle>Room Details</DialogTitle>
            <DialogContent>
              <Typography variant="h6">
                Guest Name: {selectedRoom.guestName}
              </Typography>
              <Typography>Room Number: {selectedRoom.room}</Typography>
              <Typography>Check-in Date: {selectedRoom.checkIn}</Typography>
              <Typography>Check-out Date: {selectedRoom.checkOut}</Typography>
              <Typography>
                Total Amount: ₹{selectedRoom.total.toFixed(2)}
              </Typography>

              {selectedRoom.paymentModes &&
                selectedRoom.paymentModes.length > 0 && (
                  <>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="h6">Payment Modes:</Typography>
                  </>
                )}

              {selectedRoom.paymentModes.map((payment, index) => (
                <Box
                  key={index}
                  display="flex"
                  justifyContent="space-between"
                  my={1}
                >
                  <Typography>{payment.mode}</Typography>
                  <Typography>₹{payment.amount.toFixed(2)}</Typography>
                </Box>
              ))}

              <Divider sx={{ my: 2 }} />
              <Box display="flex" justifyContent="space-between" my={1}>
                <Typography>Total paid</Typography>
                <Typography>₹{selectedRoom.totalPaid.toFixed(2)}</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" my={1}>
                <Typography>Balance</Typography>
                <Typography>₹{selectedRoom.balancetoPay.toFixed(2)}</Typography>
              </Box>
              <Typography variant="h6">Add Payment Mode:</Typography>
              <Box display="flex" gap={2} my={2}>
                <FormControl fullWidth>
                  <InputLabel>Payment Mode</InputLabel>
                  <Select
                    value={newPayment.mode}
                    onChange={(e) =>
                      setNewPayment({ ...newPayment, mode: e.target.value })
                    }
                  >
                    <MenuItem value="Cash">Cash</MenuItem>
                    <MenuItem value="Google Pay">Google Pay</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  label="Amount"
                  type="number"
                  value={newPayment.amount}
                  onChange={(e) =>
                    setNewPayment({ ...newPayment, amount: e.target.value })
                  }
                  fullWidth
                />
                <Button
                  disabled={disableAdd}
                  variant="contained"
                  onClick={handleAddPaymentMode}
                >
                  Add
                </Button>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Close</Button>
              <Button
                variant="contained"
                color="error"
                onClick={handleCheckout}
              >
                Checkout
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </Box>
    </Container>
  )
}

export default OccupiedRoomsPage
