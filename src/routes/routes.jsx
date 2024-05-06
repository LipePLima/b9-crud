import { Routes, Route, Navigate } from 'react-router-dom'; 
import Login from '../pages/login/login'
import Registration from '../pages/registration/registration';
import Crud from '../pages/crud/crud';

export default function Routers({ isLoggedIn, handleLogin}) {
    return (
        <Routes>
            <Route
                path="/"
                element={isLoggedIn ? <Navigate to="/crud" /> : <Login login={handleLogin} />}
            />
            <Route
                path="/registration"
                element={<Registration/>}
            />
            <Route
                path="/crud"
                element={isLoggedIn ? <Crud /> : <Navigate to="/" />}
            />
        </Routes>
    )
}