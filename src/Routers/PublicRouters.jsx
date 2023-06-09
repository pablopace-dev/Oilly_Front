import { Route, Routes, Navigate } from 'react-router-dom';
import { AboutUs, Home } from '../Public/Pages';
import { RegisterPage } from '../Auth/Pages';
import { LoginPage } from '../Auth/Pages/LoginPage';

export const PublicRouters = () => {

    return (
        <>
            <Routes>

                <Route
                    path='/'
                    element={<Home />}
                />

                <Route
                    path='register'
                    element={<RegisterPage />}
                />

                <Route
                    path='login'
                    element={<LoginPage />}
                />

                <Route
                    path='aboutus'
                    element={<AboutUs />}
                />
                

                <Route path='/*' element={<Navigate to={'/'} />} />

            </Routes>

        </>

    )
}
