import { Route, Routes, Navigate } from 'react-router-dom';
import { AboutUs, Home } from '../Public/Pages';
import { Logout, QrPage, Win1000Page, AcumulatedPage, MisPuntos } from '../Private/Pages';
import { CarrouselAgua } from '../Private/Components/CarrouselAgua';


export const PrivateRouters = () => {

    return (
        <>
            <Routes>

                <Route
                    path='/'
                    element={<Home />}
                />

                <Route
                    path='generate'
                    element={<QrPage />}
                />

                <Route
                    path='mispuntos'
                    element={<MisPuntos />}
                />

                <Route
                    path='win1000'
                    element={<Win1000Page />}
                />

                <Route
                    path='logout'
                    element={<Logout />}
                />


                <Route
                    path='/impacto'
                    element={<CarrouselAgua />}
                />

                <Route
                    path='/acumulated'
                    element={<AcumulatedPage />}
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
