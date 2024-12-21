import axios from 'axios'
import { fakeBookings, fakeRooms } from './fakeData'

export const getRooms = async () => {
  // const response = await axios.get('/api/rooms')
  const response = fakeRooms
  return response
}

export const getReservations = async () => {
  const response = fakeBookings
  return response
}

export const getBookings = async () => {
  const response = fakeBookings
  return response
}

export const getReports = async () => {
  const response = fakeBookings
  return response
}
export const getOccupiedRooms = async () => {
  const response = fakeBookings
  return response
}
export const getMetrics = async () => {
  const response = [
    {
      id: 'Total_Rooms',
      title: 'Total Rooms',
      value: 120,
      color: '#4CAF50',
      navigation: '/rooms',
    },
    {
      id: 'Occupied_Rooms',
      title: 'Occupied Rooms',
      value: 80,
      color: '#FF9800',
      navigation: '/occupied',
    },
    {
      id: 'Bookings',
      title: 'Bookings',
      value: 15,
      color: '#2196F3',
      navigation: '/bookings',
    },
    {
      id: 'Revenue_Today',
      title: 'Revenue Today',
      value: '$4,500',
      color: '#9C27B0',
      navigation: '/reports',
    },
  ]
  return response
}
