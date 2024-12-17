// RoomManagement.js
import React, { useState } from 'react'
import {
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material'

const RoomManagement = () => {
  const [rooms, setRooms] = useState([
    { id: 1, number: '101', type: 'Single', status: 'Available' },
    { id: 2, number: '102', type: 'Double', status: 'Occupied' },
  ])

  return (
    <div>
      <h2>Room Management</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Room Number</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rooms.map((room) => (
            <TableRow key={room.id}>
              <TableCell>{room.number}</TableCell>
              <TableCell>{room.type}</TableCell>
              <TableCell>{room.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button
        variant="contained"
        color="primary"
        onClick={() => alert('Add Room')}
      >
        Add Room
      </Button>
    </div>
  )
}

export default RoomManagement
