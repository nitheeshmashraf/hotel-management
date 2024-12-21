// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import RoomManagement from './pages/RoomManagement'
import Bookings from './pages/Bookings'
import Reports from './pages/Reports'
import OccupiedRoomsPage from './pages/OccupiedRoomsPage'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/rooms" element={<RoomManagement />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/occupied" element={<OccupiedRoomsPage />} />
      </Routes>
    </Router>
  )
}
export default App
