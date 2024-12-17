// Bookings.js
import React, { useState } from 'react'
import { Button, TextField, Select, MenuItem } from '@mui/material'

const Bookings = () => {
  const [form, setForm] = useState({
    name: '',
    room: '',
    checkIn: '',
    checkOut: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    console.log('Booking Details:', form)
  }

  return (
    <div>
      <h2>Book a Room</h2>
      <form>
        <TextField
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          fullWidth
        />
        <Select name="room" value={form.room} onChange={handleChange} fullWidth>
          <MenuItem value="101">Room 101</MenuItem>
          <MenuItem value="102">Room 102</MenuItem>
        </Select>
        <TextField
          type="date"
          name="checkIn"
          value={form.checkIn}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          type="date"
          name="checkOut"
          value={form.checkOut}
          onChange={handleChange}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Confirm Booking
        </Button>
      </form>
    </div>
  )
}

export default Bookings
