import { Route, Routes, Navigate } from 'react-router-dom';
import { Logout } from '../Private/Pages';
import { HomePage, RecycleQRpage } from '../Places/Pages';


export const PlaceRouters = () => {

    return (
        <>
            <Routes>

                <Route
                    path='/'
                    element={<HomePage />}
                />

                <Route
                    path='scanQR'
                    element={<RecycleQRpage />}
                />

                <Route
                    path='logout'
                    element={<Logout />}
                />

                <Route path='/*' element={<Navigate to={'/'} />} />


            </Routes>

        </>

    )
}
