import React, { useContext, useEffect } from 'react';
import TitleContext from '../../context/TitleContext';
import AddFavouriteButton from '../../components/AddFavouriteButton/AddFavouriteButton';
import PlaceThumbnail from '../../components/PlaceThumbnail/PlaceThumbnail';
import './DailyPlaceList.scss';
import MobileNav from '../../components/MobileNav/MobileNav';
function DailyPlaceList() {
  const titleContext = useContext(TitleContext);
  const [, setTitle] = titleContext;

  useEffect(() => {
    setTitle('Daily List');
  }, []);
  return (
    <div className="daily-place-list">
      <PlaceThumbnail
        classNames={['place-thumbnail', 'daily-place-list__place']}
      >
        <AddFavouriteButton />
      </PlaceThumbnail>
      <PlaceThumbnail
        classNames={['place-thumbnail', 'daily-place-list__place']}
      >
        <AddFavouriteButton />
      </PlaceThumbnail>
      <PlaceThumbnail
        classNames={['place-thumbnail', 'daily-place-list__place']}
      >
        <AddFavouriteButton />
      </PlaceThumbnail>
      <PlaceThumbnail
        classNames={['place-thumbnail', 'daily-place-list__place']}
      >
        <AddFavouriteButton />
      </PlaceThumbnail>
      <MobileNav />
    </div>
  );
}

export default DailyPlaceList;
