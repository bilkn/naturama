import React, { useContext, useEffect } from 'react';
import TitleContext from '../../context/TitleContext';
import UserContext from '../../context/UserContext';
import Place from '../../components/Place/Place';
import MobileNav from '../../components/MobileNav/MobileNav';
import RandomPlaceContext from '../../context/RandomPlaceContext';
import { getRandomPlace } from '../../helpers/getRandomPlace';
import createPlaceForUserData from '../../helpers/createPlaceForUserData';
import SelectedPlaceContext from '../../context/SelectedPlaceContext';
function Home() {
  const [randomPlace, setRandomPlace] = useContext(RandomPlaceContext);
  const [userState] = useContext(UserContext);
  const [, setTitle] = useContext(TitleContext);
  const [, setSelectedPlace] = useContext(SelectedPlaceContext);
  const handleClick = () => setSelectedPlace(randomPlace);
  useEffect(() => {
    setTitle(null);
  }, []);
  
  useEffect(async () => {
    if (!randomPlace && userState) {
      try {
        const place = await getRandomPlace(userState);
        const userPlace = await createPlaceForUserData(place);
        setRandomPlace(userPlace);
      } catch (err) {
        console.log(err);
        // !!! addModal
      }
    }
  }, [userState]);

  return (
    <div className="home">
      {randomPlace ? <Place place={randomPlace} handleClick={handleClick} /> : <h2>No location found.</h2>}
      <MobileNav />
    </div>
  );
}

export default Home;
