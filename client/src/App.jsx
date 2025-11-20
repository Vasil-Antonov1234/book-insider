import { Route, Routes } from "react-router"
import Login from "./components/login/Login.jsx"
import Home from "./components/Home/Home.jsx"

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>

        </>
    )
}

export default App
