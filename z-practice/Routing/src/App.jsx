import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
const Dashboard = React.lazy(() => import('./Components/Dahboard'));
const Landing = React.lazy(() => import('./Components/Landing'));

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App



function Navbar() {
  //initialising navigate
  //needs to be wrapped inside browser router component
  const navigate = useNavigate();

  return (
    <>
      <nav>
        <button onClick={() => {
          navigate("/");
        }}>Landing Page</button>
        <button onClick={() => {
          navigate("/dashboard");
        }}>Dashboard Page</button>
      </nav>

    </>
  )
}
