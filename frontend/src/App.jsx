import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Layout from "./pages/Layout"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element = {<Layout />}>
          <Route path='/' element={<Navigate to='/dashboard' replace />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

