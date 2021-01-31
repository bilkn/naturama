import React, { useContext, useEffect } from 'react';
import TitleContext from '../../context/TitleContext';
import UserContext from '../../context/UserContext';
import setUserLocation from '../../helpers/setUserLocation';
import Place from '../Place/Place';
function Home() {
  const userContext = useContext(UserContext);
  const titleContext = useContext(TitleContext);
  const [user, setUser] = userContext;
   const [, setTitle] = titleContext;

   useEffect(() => {
     setTitle(null);
   }, []);

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
