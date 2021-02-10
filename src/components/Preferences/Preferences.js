import React, { useContext, useEffect, useState } from 'react';
import TitleContext from '../../context/TitleContext';
import UserContext from '../../context/UserContext';
import LocationItem from '../LocationItem/LocationItem';
import MobileNav from '../MobileNav/MobileNav';
import SearchRadiusItem from '../SearchRadiusItem/SearchRadiusItem';
import './Preferences.scss';
function Preferences() {
  const titleContext = useContext(TitleContext);
  const userContext = useContext(UserContext);
  const [userState, dispatchUser] = userContext;
  const [, setTitle] = titleContext;
  const [lonValue, setLonValue] = useState('');
  const [latValue, setLatValue] = useState('');
  useEffect(() => {
    setTitle('Preferences');
    console.log(user);
    return ()=> {
      
    }
  }, []);
  return (
    <div className="preferences">
      <ul className="preferences__map-options-list">
        <SearchRadiusItem />
        <LocationItem
          lonValue={lonValue}
          latValue={latValue}
          setLonValue={setLonValue}
          setLatValue={setLatValue}
        />
        <MobileNav />
      </ul>
    </div>
  );
}

export default Preferences;
