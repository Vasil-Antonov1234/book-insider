import { Route, Routes } from "react-router"
import Login from "./components/login/Login.jsx"
import Home from "./components/Home/Home.jsx"
import Navigation from "./components/navigation/Navigation.jsx"

function App() {

    return (
        <div className="relative h-screen">
            <div className="absolute inset-0 bg-[url('/images/book-insider-backround.jpg')] opacity-20 bg-cover bg-center">
            </div>

            <div className="relative p-2">
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </div>
    )
}

export default App
