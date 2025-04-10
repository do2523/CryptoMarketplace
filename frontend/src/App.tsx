import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Wallet from './wallet'
import Homepage from './homepage'
import Signup from './signup'

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
