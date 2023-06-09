import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Ofertas } from '../Components/Ofertas';
import { NavLink } from 'react-router-dom'
import { getReycles, sumLiters, sumRecycles } from '../../Public/helpers/getReycles';
import { onLoadPoints, onLoadPrevPoints, onLoadRecycles, onQuestion } from '../../Store/Slices/userSlice'
import { Allpuntos } from '../Components/Allpuntos';
import { PointsObtained } from '../Components/PointsObtained';
import { useValidateToken } from '../../Hooks/useValidateToken';


export const MisPuntos = () => {

  const { user, points, prevPoints, question, recycles } = useSelector(state => state.user);
  const [sums, setSums] = useState({});

  const { checkToken } = useValidateToken();

  const dispatch = useDispatch();


  const getUserRecycles = async () => {

    const response = await getReycles(user.user_id);

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

      setSums(newSum);


      if (response.recycles) {

        if (response.recycles[0]?.points)
          dispatch(onLoadPoints(true));

        else
          dispatch(onLoadPoints(false));

      } else
        dispatch(onLoadPoints(false));

    }

  };


  useEffect(() => {
    getUserRecycles();
    checkToken();

  }, [points]);

  return (
    <>

      <section>
      <div className='absolute top-0 left-0 z-[-1] w-full h-[270px]  max-h-[290px] sm:h-[260px]'>
        <img className='w-full h-full object-fill' src="../assets/rectangle.png" />
      </div>
      </section>


    <section>
      <div className=" my-8  pb-4">
        <h3 className='mb-8 text-center text-2xl font-bold'>Tu balance</h3>
        <Allpuntos sums={sums} />
      </div>
      </section>

      <section>

      <div>
        <h3 className='mb-4 text-center text-2xl font-bold'>Ofertas Destacadas</h3>
      </div>

      <div className='z-[150]  divMapSearch relative'>
        <form >
          <input
            type="text"
            placeholder='Busca por ubicación'>
          </input>
          <img className='glass' src="../assets/glass.png" />
        </form>
      </div>
      </section>


      {
        (!points) &&
        <div className="flex justify-center items-center sm:w-4/5 mx-auto">
          <NavLink to={'/win1000'} className="bg-[#ffb566] rounded-lg mt-5 mx-5 px-4 py-2 text-center w-full">
            <p className="text-center font-light text-base w-full ">¿Quieres ganar 1.000 puntos?</p>
            <p className="text-center font-light text-base w-full ">¡Dime cuál es tu restaurante favorito!</p>
          </NavLink>
        </div>
      }

      <section>
      <Ofertas />
      </section>


      {
        (question) &&

        <PointsObtained recycle={recycles[recycles.length - 1]} />
      }

    </>
  )
}
