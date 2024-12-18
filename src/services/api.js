import axios from 'axios'

export const getRooms = async () => {
  // const response = await axios.get('/api/rooms')
  const response = [
    { id: 1, number: '101', type: 'Single', status: 'active' },
    { id: 2, number: '102', type: 'Double', status: 'active' },
    { id: 3, number: '103', type: 'Suite', status: 'active' },
  ]
  return response
}

export const getReservations = async () => {
  const response = [
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
  ]
  return response
}

export const getBookings = async () => {
  const response = [
    {
      id: 1,
      guestName: 'John Doe',
      room: '101',
      checkIn: '2024-12-20',
      checkOut: '2024-12-25',
      bookingDate: '2024-12-10',
      status: 'Confirmed',
    },
    {
      id: 2,
      guestName: 'Jane Smith',
      room: '102',
      checkIn: '2024-12-22',
      checkOut: '2024-12-28',
      bookingDate: '2024-12-15',
      status: 'Pending',
    },
    {
      id: 3,
      guestName: 'Mark Lee',
      room: '103',
      checkIn: '2024-12-24',
      checkOut: '2024-12-30',
      bookingDate: '2024-12-18',
      status: 'Confirmed',
    },
  ]
  return response
}

export const getReports = async () => {
  const response = [
    {
      id: 1,
      guestName: 'John Doe',
      bookingDate: '2024-12-18',
      room: '101',
      amount: 200,
    },
    {
      id: 2,
      guestName: 'Jane Smith',
      bookingDate: '2024-12-17',
      room: '102',
      amount: 150,
    },
    {
      id: 3,
      guestName: 'Mark Lee',
      bookingDate: '2024-12-12',
      room: '103',
      amount: 500,
    },
    {
      id: 4,
      guestName: 'Lisa Wong',
      bookingDate: '2024-12-05',
      room: '104',
      amount: 450,
    },
    {
      id: 5,
      guestName: 'Alex Brown',
      bookingDate: '2024-11-28',
      room: '105',
      amount: 800,
    },
    {
      id: 6,
      guestName: 'Eva Green',
      bookingDate: '2024-11-20',
      room: '106',
      amount: 600,
    },
  ]
  return response
}

export const getMetrics = async () => {
  const response = [
    { title: 'Total Rooms', value: 120, color: '#4CAF50' },
    { title: 'Occupied Rooms', value: 80, color: '#FF9800' },
    { title: 'Pending Bookings', value: 15, color: '#2196F3' },
    { title: 'Revenue Today', value: '$4,500', color: '#9C27B0' },
  ]
  return response
}
