import {Route, BrowserRouter} from 'react-router-dom'

// import Login from './components/Login'
import Home from './components/Home'
import Login from './components/Login'

import MyProfile from './components/MyProfile'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Route exact path="/login" component={Login} />

    <Route exact path="/" component={Home} />
    <Route exact path="/my-profile" component={MyProfile} />
    <Route element={NotFound} />
  </BrowserRouter>
)

export default App
