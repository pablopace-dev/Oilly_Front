import { useDispatch, useSelector } from "react-redux"
import { masterFetch } from "../../Api/fetch";
import { onError, onPlaceRegister } from "../../Store/Slices/placesSlice";
import {useNavigate} from 'react-router-dom';


export const usePlaceStore = () => {

    const {places, errorMessage} = useSelector(state => state.places)

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const regisPlaceStart = async (form) => {

        try {
            
            const petition = await masterFetch('api/places/create', 'POST', form)

            if(petition.ok == false) {

                const errors = petition.errors

                dispatch(onError(errors))

                setTimeout(() => {

                    dispatch(onError(''))
                }, 6000)

            }   else {

                const arrayCoords = petition.data.coords.split(',');
                arrayCoords[0] = parseFloat(arrayCoords[0]);
                arrayCoords[1] = parseFloat(arrayCoords[1]);
                petition.data.coords = [arrayCoords[0], arrayCoords[1]];

                const newPlace = petition.data

                dispatch(onPlaceRegister(newPlace))

                navigate('/');
            }

        } catch (error) {
            
            console.log('FAILED regisPlaceStart:', error)
        }
    }


  return {

    places,
    errorMessage,
    regisPlaceStart
  }
}
