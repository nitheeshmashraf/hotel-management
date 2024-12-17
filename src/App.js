// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import RoomManagement from './pages/RoomManagement'
import Bookings from './pages/Bookings'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/rooms" element={<RoomManagement />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
    </Router>
  )
}
export default App
