import { useContext } from 'react';
import ErrorContext from '../context/ErrorContext';
import RandomPlaceContext from '../context/RandomPlaceContext';
import SelectedPlaceContext from '../context/SelectedPlaceContext';
import UserContext from '../context/UserContext';
import clearNotificationIfExist from '../helpers/clearNotificationIfExist';
import db from '../helpers/dexie';

function useFavourite(isRandomPlace = false) {
  const [selectedPlace] = useContext(SelectedPlaceContext);
  const [randomPlace] = useContext(RandomPlaceContext);
  const [userState, dispatch] = useContext(UserContext);
  const [error] = useContext(ErrorContext);

  const place = isRandomPlace ? randomPlace : selectedPlace;

  const isPlaceInFav = () => {
    if (place) {
      return userState.favourites.some(
        (favPlace) => favPlace.xid === place.xid
      );
    }
    return;
  };

  const handleFavClick = async () => {
    if (place) {
      clearNotificationIfExist(userState, dispatch);
      const favResult = isPlaceInFav();
      const newPlaces = favResult
        ? [
            ...userState.favourites.filter(
              (favPlace) => favPlace.xid !== place.xid
            ),
          ]
        : [...userState.favourites, place];
      try {
        await handleFavOperation({ newPlaces, favResult });
      } catch (err) {
        console.log(err);
      }
    }
  };
  const handleFavOperation = async (args) => {
    if (place) {
      const { newPlaces, favResult } = args;
      const payload = newPlaces;
      if (!favResult) {
        error.isDBActive && (await db.favourites.add(place, place.xid));
        dispatch({
          type: 'ADD_PLACE',
          payload,
        });
      } else {
        error.isDBActive &&
          (await db.favourites.where('xid').equals(place.xid).delete());
        dispatch({
          type: 'REMOVE_PLACE',
          payload,
        });
      }
    }
  };

  return { handleFavClick, isPlaceInFav };
}

export default useFavourite;
