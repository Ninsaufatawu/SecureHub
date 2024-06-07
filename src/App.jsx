
import { Navbar } from "./pages/Navbar/Navbar"
import { Home } from "./pages/homepage/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {


  return (
    <>
    <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
