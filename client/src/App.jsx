import { Route, Routes, useNavigate } from "react-router"
import Login from "./components/login/Login.jsx"
import Home from "./components/Home/Home.jsx"
import Header from "./components/header/Header.jsx"
import Register from "./components/register/Register.jsx"
import Catalog from "./components/catalog/Catalog.jsx"
import CreateEdit from "./components/create-edit/CreateEdit.jsx"
import Details from "./components/details/Ditails.jsx"
import { useState } from "react"
import UserContext from "./contexts/UserContext.js"
import Logout from "./components/logout/Logout.jsx"

function App() {
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    async function registerHandler(user) {

        const response = await fetch("http://localhost:3030/users/register", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        });

        const result = await response.json();

        setUser(result);

        navigate("/");
    };

    function logoutHandler() {
        setUser(null)
    }

    const userContextValues = {
        user,
        registerHandler,
        logoutHandler,
        isAuthenticated: !!user
    }

    return (
        <div className="relative p-2">

            <UserContext.Provider value={userContextValues}>
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

            </UserContext.Provider>


        </div>
    )
}

export default App
