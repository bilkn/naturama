import React, { useContext, useEffect } from 'react';
import TitleContext from '../../context/TitleContext';
import AddFavouriteButton from '../AddFavouriteButton/AddFavouriteButton';
import PlaceThumbnail from '../PlaceThumbnail/PlaceThumbnail';
import './DailyPlaceList.scss';
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
    </div>
  );
}

export default DailyPlaceList;
