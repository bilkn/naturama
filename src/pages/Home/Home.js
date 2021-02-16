import React, { useContext, useEffect } from 'react';
import TitleContext from '../../context/TitleContext';
import UserContext from '../../context/UserContext';
import Place from '../../components/Place/Place';
import MobileNav from '../../components/MobileNav/MobileNav';
import PlaceContext from '../../context/PlaceContext';
import { getRandomPlace } from '../../helpers/getRandomPlace';
import createPlaceForUserData from "../../helpers/createPlaceForUserData";
function Home() {
  const [place, setPlace] = useContext(PlaceContext);
  const [userState] = useContext(UserContext);
  const [, setTitle] = useContext(TitleContext);

  useEffect(() => {
    setTitle(null);
  }, []);
  useEffect(async () => {
    if (!place && userState) {
      try {
        const place = await getRandomPlace(userState);
        const userPlace = await createPlaceForUserData(place);
        setPlace(userPlace);
      } catch (err) {
        console.log(err);
        // !!! addModal
      }
    }
  }, [userState]);

  return (
    <div className="home">
      <Place />
      <MobileNav />
    </div>
  );
}

export default Home;
