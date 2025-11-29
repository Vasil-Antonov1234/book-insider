import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router"
import App from './App.jsx'
import './index.css'
import Background from './components/background/Background.jsx'
import { UserProvider } from './contexts/UserContext.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <div className="relative h-screen">

            <Background />

            <BrowserRouter>
                <UserProvider>
                    <App />
                </UserProvider>
            </BrowserRouter>

        </div>
    </StrictMode>,
)
