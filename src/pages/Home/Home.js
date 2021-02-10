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
  const [user] = userContext;
  const [, setTitle] = titleContext;
  const [place, setPlace] = placeContext;

  useEffect(async () => {
    setTitle(null);
  }, []);

  useEffect(async () => {
    if (!place && user) {
      try {
        const place = await getRandomPlace(user);
        setPlace(place);
      } catch (err) {
        console.log(err);
        // !!! addModal
      }
    }
  }, [user]);

  return (
    <div className="home">
      <Place />
      <MobileNav />
    </div>
  );
}

export default Home;
