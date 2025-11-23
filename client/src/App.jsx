import { Route, Routes } from "react-router"
import Login from "./components/login/Login.jsx"
import Home from "./components/Home/Home.jsx"
import Navigation from "./components/navigation/Navigation.jsx"
import Register from "./components/register/Register.jsx"

function App() {

    return (
        <div className="relative p-2">
            
            <Navigation />
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>

        </div>
    )
}

export default App
