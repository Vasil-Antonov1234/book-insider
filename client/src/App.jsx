import { Route, Routes } from "react-router"
import Login from "./components/login/Login.jsx"
import Home from "./components/home/Home.jsx"
import Header from "./components/header/Header.jsx"
import Register from "./components/register/Register.jsx"
import Catalog from "./components/catalog/Catalog.jsx"
import CreateEdit from "./components/create-edit/CreateEdit.jsx"
import Details from "./components/details/Details.jsx"
import Logout from "./components/logout/Logout.jsx"
import Footer from "./components/footer/Footer.jsx"
import UserProfile from "./components/user-profile/UserProfile.jsx"
import { ToastContainer } from "react-toastify"
import IsAuthenticated from "./components/route-guards/IsAuthenticated.jsx"
import IsGuest from "./components/route-guards/IsGuest.jsx"
import NotFound from "./components/not-found/NotFound.jsx"

function App() {

    return (
        <div className="relative p-2">

            <ToastContainer />

            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/create" element={<CreateEdit />} />
                <Route path="/catalog/:bookId/details" element={<Details />} />

                <Route element={<IsAuthenticated />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>

                <Route element={<IsGuest />}>
                    <Route path="/user/profile" element={<UserProfile />} />
                    <Route path="/catalog/:bookId/edit" element={<CreateEdit />} />
                    <Route path="/logout" element={<Logout />} />
                </Route>

                <Route path="*" element={<NotFound />} />

            </Routes>

            <Footer />

        </div>
    )
}

export default App
