import React, { useState, useEffect } from 'react'
import {
  Container,
  TextField,
  Button,
  Box,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material'
import { getReports } from '../services/api'

const ReportsPage = () => {
  const [reportType, setReportType] = useState('daily')
  const [fromDate, setFromDate] = useState(() => {
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1) // Set to one day before today
    return yesterday.toISOString().split('T')[0] // Format to YYYY-MM-DD
  })

  const [toDate, setToDate] = useState(() => {
    const today = new Date()
    return today.toISOString().split('T')[0] // Format to YYYY-MM-DD
  })
  const [rawReportData, setRawReportData] = useState([])
  const [reportData, setReportData] = useState([])

  // Handle report type change
  const handleReportTypeChange = (event) => {
    setReportType(event.target.value)
  }

  // Handle date range inputs
  const handleFromDateChange = (event) => {
    setFromDate(event.target.value)
  }

  const handleToDateChange = (event) => {
    setToDate(event.target.value)
  }

  const fetchReportData = () => {
    const filteredData = rawReportData.filter((data) => {
      const bookingDate = new Date(data.bookingDate)
      const from = fromDate ? new Date(fromDate) : null
      const to = toDate ? new Date(toDate) : null
      return (!from || bookingDate >= from) && (!to || bookingDate <= to)
    })

    // Handle daily or other report types (if needed)
    setReportData(filteredData)
  }
  // Fetch reports data when component mounts
  useEffect(() => {
    const fetchReports = async () => {
      const reports = await getReports()
      setRawReportData(reports)
    }
    fetchReports()
  }, []) // Empty dependency array ensures this runs only once on mount

  return (
    <Container>
      <h2>Generate Reports</h2>

      {/* Filters for report type and date range */}
      <Box display="flex" flexWrap="wrap" gap={2} mb={3}>
        {/* Report Type Selection */}
        <FormControl sx={{ flex: 1, minWidth: 200 }}>
          <InputLabel id="report-type-label">Report Type</InputLabel>
          <Select
            labelId="report-type-label"
            value={reportType}
            onChange={handleReportTypeChange}
          >
            <MenuItem value="daily">Daily</MenuItem>
            <MenuItem value="weekly" disabled>
              Weekly
            </MenuItem>
            <MenuItem value="monthly" disabled>
              Monthly
            </MenuItem>
          </Select>
        </FormControl>

        {/* From Date */}
        <TextField
          label="From Date"
          type="date"
          value={fromDate}
          onChange={handleFromDateChange}
          fullWidth
          sx={{ flex: 1, minWidth: 200 }}
          inputProps={{
            max: toDate || undefined, // Ensure 'From' date can't be after 'To' date
          }}
        />

        {/* To Date */}
        <TextField
          label="To Date"
          type="date"
          value={toDate}
          onChange={handleToDateChange}
          fullWidth
          sx={{ flex: 1, minWidth: 200 }}
          inputProps={{
            min: fromDate || undefined, // Ensure 'To' date can't be before 'From' date
          }}
        />

        {/* Generate Report Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={fetchReportData}
          disabled={!fromDate || !toDate}
          sx={{ alignSelf: 'center', minWidth: 150 }}
        >
          Generate Report
        </Button>
      </Box>

      {/* Table for displaying report data */}
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
            {reportData.length > 0 ? (
              reportData.map((data) => (
                <TableRow key={data.id}>
                  <TableCell align="center">{data.guestName}</TableCell>
                  <TableCell align="center">{data.bookingDate}</TableCell>
                  <TableCell align="center">{data.room}</TableCell>
                  <TableCell align="center">${data.amount}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  No data found for the selected range.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default ReportsPage
