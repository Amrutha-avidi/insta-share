import {Route, Routes} from 'react-router-dom'

// import Login from './components/Login'
import Home from './components/Home'
import Login from './components/Login'

import MyProfile from './components/MyProfile'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Routes>
    <Route exact path="/login" element={<Login />} />

    <Route exact path="/" element={<Home />} />
    <Route exact path="/my-profile" element={<MyProfile />} />
    <Route element={NotFound} />
  </Routes>
)

export default App
