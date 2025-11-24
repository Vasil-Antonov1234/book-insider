import { Route, Routes } from "react-router"
import Login from "./components/login/Login.jsx"
import Home from "./components/Home/Home.jsx"
import Header from "./components/header/Header.jsx"
import Register from "./components/register/Register.jsx"
import Catalog from "./components/catalog/Catalog.jsx"
import Create from "./components/create/Create.jsx"
import Details from "./components/details/Ditails.jsx"

function App() {

    return (
        <div className="relative p-2">
            
            <Header />
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/create" element={<Create />} />
                <Route path="/catalog/:bookId/details" element={<Details />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>

        </div>
    )
}

export default App
