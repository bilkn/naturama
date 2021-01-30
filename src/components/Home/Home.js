import React, { useContext, useEffect } from 'react';
import PlaceContext from '../../context/PlaceContext';
import UserContext from '../../context/UserContext';
import setUserLocation from '../../helpers/setUserLocation';
import Place from '../Place/Place';
function Home() {
  const userContext = useContext(UserContext);
  const [user, setUser] = userContext;

  useEffect(() => {
    if (!user.location.lat || !user.location.lon) {
      setUserLocation(setUser);
    }
  }, []);
  return (
    <div className="home">
      <Place />
    </div>
  );
}

export default Home;
