import { useEffect, useState } from "react";
import { Map } from "../Components";
import { Carrousel } from "../Components/Carrousel";
import { NavLink } from 'react-router-dom';
import { useValidateToken } from "../../Hooks/useValidateToken";
import { getLocalCookies, setLocalCookies } from "../../Helpers/localStorage";
import { useDispatch, useSelector } from "react-redux";
import { onLoadPoints, onLoadPrevPoints, onLoadRecycles, onQuestion } from "../../Store/Slices/userSlice";
import { getReycles, sumLiters, sumRecycles } from "../helpers/getReycles";
import { PointsObtained } from "../../Private/Components/PointsObtained";
import { IdCarrousel } from "../Components/IdCarrousel";

export const Home = () => {

    const [cookies, setCookies] = useState(getLocalCookies());
    const { checkToken } = useValidateToken();

    const { user, prevPoints, recycles, question } = useSelector(state => state.user);
    const { recommended } = useSelector(state => state.places);
    // const [sums, setSums] = useState({});
    // const [question, setQuestion] = useState(false);
    const dispatch = useDispatch();

    const handleCookiesClick = () => {
        setLocalCookies(true);
        setCookies(!cookies);
    }

    const getUserRecycles = async () => {

        const response = await getReycles(user.user_id, user.role);

        if (response.ok) {

            const newSum = {
                liters: 0,
                points: 0
            };

            dispatch(onLoadRecycles(response.recycles));
            newSum.liters = sumLiters(response.recycles);
            newSum.points = sumRecycles(response.recycles);


            if (prevPoints != newSum.points && prevPoints != 0) {
                if (recycles.length == 1)
                    dispatch(onQuestion(true));

                else if (newSum.points - prevPoints != 1000)
                    dispatch(onQuestion(true));
            }


            dispatch(onLoadPrevPoints(newSum.points));

            // setSums(newSum);


            if (response.recycles) {

                if (response.recycles[0]?.points)
                    dispatch(onLoadPoints(true));

                else
                    dispatch(onLoadPoints(false));

            } else
                dispatch(onLoadPoints(false));
        }

        // checkToken();

    };

    useEffect(() => {
        if (Object.entries(user).length > 0) getUserRecycles();
        checkToken();

    }, [user])

    return (
        <>
            <header className=" bg-[#fafafa]">
                <p className='text-[22px] font-bold px-6 pb-4 leading-[26px] mb-0 mt-3'>
                    ¡Reciclar aceite nunca fue tan fácil! Ahora tienes puntos de reciclaje más cercanos.
                </p>
            </header>

            <main>
                <Map />

                <Carrousel />

                <IdCarrousel />

                <section>

                <div className="bg-black opacity-100 mt-12">
                    <img className="mx-auto" src='../assets/Frame 34709.png' alt="Image 2" />
                </div>
                </section>

                {
                    (!cookies) &&
                    <div className="divPopup fixed left-0 position1" >
                        <div >
                            <h3 className="w-full font-bold text-2xl text-left pb-2">Políticas sobre cookies</h3>
                            <p className="text-base font-light leading-[18px] pb-2">
                                Usamos cookies en nuestra página para proporcionarte una experiencia de navegación personalizada
                                y segura. Las cookies nos permiten entender tus preferencias y adaptar nuestras funcionalidades
                                para satisfacer tus necesidades
                            </p>

                            <button className="mb-2 " onClick={handleCookiesClick}>Aceptar</button>
                            <NavLink className='text-[#F67F00] text-base font-light block text-center w-full'>PREFERENCIAS DE COOKIES</NavLink>
                        </div>
                    </div>
                }


                {
                    (question) &&

                    <PointsObtained recycle={recycles[recycles.length - 1]} />
                }

            </main>
        </>
    );
};
