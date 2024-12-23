// Navbar.js
import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: '#3f51b5' }}>
      <Toolbar>
        {/* Logo or App Name */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button color="inherit" component={Link} to="/">
            Hotel Management
          </Button>
        </Typography>

        {/* Desktop Navigation */}
        <Box
          className="desktop-menu"
          sx={{ display: { xs: 'none', sm: 'flex' } }}
        >
          <Button color="inherit" component={Link} to="/">
            Dashboard
          </Button>
          <Button color="inherit" component={Link} to="/rooms">
            Room Management
          </Button>
          <Button color="inherit" component={Link} to="/bookings">
            Bookings
          </Button>
          <Button color="inherit" component={Link} to="/reports">
            Reports
          </Button>
          <Button color="inherit" component={Link} to="/occupied">
            Occupied
          </Button>
        </Box>

        {/* Mobile Navigation */}
        <div className="mobile-menu">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: 'flex', sm: 'none' } }}
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem component={Link} to="/" onClick={handleMenuClose}>
              Dashboard
            </MenuItem>
            <MenuItem component={Link} to="/rooms" onClick={handleMenuClose}>
              Room Management
            </MenuItem>
            <MenuItem component={Link} to="/bookings" onClick={handleMenuClose}>
              Bookings
            </MenuItem>
            <MenuItem component={Link} to="/reports" onClick={handleMenuClose}>
              Reports
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
