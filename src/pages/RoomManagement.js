import React, { useEffect, useState } from 'react'
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
import { getRooms } from '../services/api'

const RoomManagement = () => {
  const [rooms, setRooms] = useState([])

  const [openDialog, setOpenDialog] = useState(false)
  const [selectedRoom, setSelectedRoom] = useState(null)
  const [roomDetails, setRoomDetails] = useState({
    number: '',
    type: '',
    status: '',
  })

  const handleEdit = (room) => {
    setRoomDetails({ ...room })
    setSelectedRoom(room)
    setOpenDialog(true)
  }

  const handleDelete = (roomId) => {
    setRooms(rooms.filter((room) => room.id !== roomId))
  }

  const handleInputChange = (e) => {
    setRoomDetails({
      ...roomDetails,
      [e.target.name]: e.target.value,
    })
  }

  const handleSave = () => {
    if (selectedRoom) {
      // Update existing room
      setRooms(
        rooms.map((room) =>
          room.id === selectedRoom.id ? { ...room, ...roomDetails } : room
        )
      )
    } else {
      // Add new room
      setRooms([
        ...rooms,
        {
          id: rooms.length + 1,
          ...roomDetails,
        },
      ])
    }
    setOpenDialog(false)
  }

  const handleDialogClose = () => {
    setOpenDialog(false)
  }
  // Fetch rooms data when component mounts
  useEffect(() => {
    const fetchRooms = async () => {
      const rooms = await getRooms()
      setRooms(rooms)
    }
    fetchRooms()
  }, []) // Empty dependency array ensures this runs only once on mount

  return (
    <Container>
      <h2>Room Management</h2>

      {/* Updated Add New Room button with Box for layout */}
      <Box display="flex" justifyContent="flex-end" mb={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpenDialog(true)}
        >
          Add new room
        </Button>
      </Box>

      {/* Room table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <strong>Room Number</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Room Type</strong>
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
            {rooms.map((room) => (
              <TableRow key={room.id}>
                <TableCell align="center">{room.number}</TableCell>
                <TableCell align="center">{room.type}</TableCell>
                <TableCell align="center">{room.status}</TableCell>
                <TableCell align="center">
                  <IconButton color="primary" onClick={() => handleEdit(room)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    onClick={() => handleDelete(room.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Room Dialog */}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>{selectedRoom ? 'Edit Room' : 'Add Room'}</DialogTitle>
        <DialogContent>
          <TextField
            label="Room Number"
            fullWidth
            margin="normal"
            name="number"
            value={roomDetails.number}
            onChange={handleInputChange}
          />
          <TextField
            label="Room Type"
            fullWidth
            margin="normal"
            name="type"
            value={roomDetails.type}
            onChange={handleInputChange}
          />
          <TextField
            label="Status"
            fullWidth
            margin="normal"
            name="status"
            value={roomDetails.status}
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

export default RoomManagement
