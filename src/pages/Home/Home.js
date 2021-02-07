import React, { useContext, useEffect, useState } from 'react';
import TitleContext from '../../context/TitleContext';
import UserContext from '../../context/UserContext';
import setUserLocation from '../../helpers/setUserLocation';
import Place from '../../components/Place/Place';
import MobileNav from '../../components/MobileNav/MobileNav';
import PlaceContext from '../../context/PlaceContext';
import { getRandomPlace } from '../../helpers/getRandomPlace';
import DarkBackgroundContext from '../../context/DarkBackGroundContext';
function Home() {
  const placeContext = useContext(PlaceContext);
  const userContext = useContext(UserContext);
  const titleContext = useContext(TitleContext);
  const [user, setUser] = userContext;
  const [, setTitle] = titleContext;
  const [place, setPlace] = placeContext;
  useEffect(() => {
    if (!user.location.lat || !user.location.lon) {
      setUserLocation(setUser);
    }
  }, []);
  useEffect(async () => {
    setTitle(null);
  }, []);

  useEffect(async () => {
    if (!place) {
      try {
        const place = await getRandomPlace(user);
        setPlace(place);
      } catch {
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
