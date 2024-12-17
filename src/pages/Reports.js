import React, { useState } from 'react'
import {
  Container,
  TextField,
  Button,
  Box,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material'

const ReportsPage = () => {
  const [reportType, setReportType] = useState('daily')
  const [selectedDate, setSelectedDate] = useState('')
  const [reportData, setReportData] = useState([])
  const [openDialog, setOpenDialog] = useState(false)

  // Sample data for reports
  const sampleReportData = {
    daily: [
      {
        id: 1,
        guestName: 'John Doe',
        bookingDate: '2024-12-20',
        room: '101',
        amount: 200,
      },
      {
        id: 2,
        guestName: 'Jane Smith',
        bookingDate: '2024-12-20',
        room: '102',
        amount: 150,
      },
    ],
    weekly: [
      {
        id: 1,
        guestName: 'Mark Lee',
        bookingDate: '2024-12-14',
        room: '103',
        amount: 500,
      },
      {
        id: 2,
        guestName: 'Lisa Wong',
        bookingDate: '2024-12-15',
        room: '104',
        amount: 450,
      },
    ],
    monthly: [
      {
        id: 1,
        guestName: 'Alex Brown',
        bookingDate: '2024-12-01',
        room: '105',
        amount: 800,
      },
      {
        id: 2,
        guestName: 'Eva Green',
        bookingDate: '2024-12-02',
        room: '106',
        amount: 600,
      },
    ],
  }

  // Handle report type change
  const handleReportTypeChange = (event) => {
    setReportType(event.target.value)
  }

  // Handle date input change
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value)
  }

  // Fetch report data based on selected type and date
  const fetchReportData = () => {
    // Here you can replace this logic with an API call or other data fetching logic
    setReportData(sampleReportData[reportType])
    setOpenDialog(true)
  }

  return (
    <Container>
      <h2>Generate Reports</h2>

      {/* Report Type & Date Input */}
      <Box display="flex" justifyContent="space-between" mb={3}>
        <FormControl fullWidth>
          <InputLabel>Report Type</InputLabel>
          <Select value={reportType} onChange={handleReportTypeChange}>
            <MenuItem value="daily">Daily</MenuItem>
            <MenuItem value="weekly">Weekly</MenuItem>
            <MenuItem value="monthly">Monthly</MenuItem>
          </Select>
        </FormControl>

        {/* TextField for date input */}
        <TextField
          label="Select Date"
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={fetchReportData}
          disabled={!selectedDate}
        >
          Generate Report
        </Button>
      </Box>

      {/* Report Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} fullWidth>
        <DialogTitle>{`${
          reportType.charAt(0).toUpperCase() + reportType.slice(1)
        } Report`}</DialogTitle>
        <DialogContent>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center">
                    <strong>Guest Name</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>Booking Date</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>Room</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>Amount</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {reportData.map((data) => (
                  <TableRow key={data.id}>
                    <TableCell align="center">{data.guestName}</TableCell>
                    <TableCell align="center">{data.bookingDate}</TableCell>
                    <TableCell align="center">{data.room}</TableCell>
                    <TableCell align="center">${data.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}

export default ReportsPage
