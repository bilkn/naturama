import React, { useContext, useEffect } from 'react';
import TitleContext from '../../context/TitleContext';
import UserContext from '../../context/UserContext';
import Place from '../../components/Place/Place';
import MobileNav from '../../components/MobileNav/MobileNav';
import PlaceContext from '../../context/PlaceContext';
import { getRandomPlace } from '../../helpers/getRandomPlace';
function Home() {
  const placeContext = useContext(PlaceContext);
  const userContext = useContext(UserContext);
  const titleContext = useContext(TitleContext);
  const [userState] = userContext;
  const [, setTitle] = titleContext;
  const [place, setPlace] = placeContext;

  useEffect(async () => {
    setTitle(null);
  }, []);

  useEffect(async () => {
    console.table(userState)
    if (!place && userState) {
      try {
        const place = await getRandomPlace(userState);
        setPlace(place);
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
