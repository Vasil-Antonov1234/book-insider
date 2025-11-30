import { Route, Routes } from "react-router"
import Login from "./components/login/Login.jsx"
import Home from "./components/home/Home.jsx"
import Header from "./components/header/Header.jsx"
import Register from "./components/register/Register.jsx"
import Catalog from "./components/catalog/Catalog.jsx"
import CreateEdit from "./components/create-edit/CreateEdit.jsx"
import Details from "./components/details/Details.jsx"
import Logout from "./components/logout/Logout.jsx"

function App() {

    return (
        <div className="relative p-2">

            <>
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/create" element={<CreateEdit />} />
                    <Route path="/catalog/:bookId/edit" element={<CreateEdit />} />
                    <Route path="/catalog/:bookId/details" element={<Details />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </>


        </div>
    )
}

export default App
