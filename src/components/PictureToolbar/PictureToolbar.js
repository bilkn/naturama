import React, { useContext, useEffect } from 'react';
import UserContext from '../../context/UserContext';
import blobToArrayBuffer from '../../helpers/blobToArrayBuffer';
import db from '../../helpers/dexie';
import IconButton from '../IconButton/IconButton';
import './PictureToolbar.scss';
function PictureToolbar(props) {
  const { place, setShowShareLinks, setShowDarkBackground } = props;
  const [userState, dispatch] = useContext(UserContext);
  const handleShareClick = () => {
    setShowDarkBackground(true);
    setShowShareLinks(true);
  };
  console.log(place);

  const handleFavClick = async () => {
    const img = place.preview
      ? await getImgArrayBuffer(place.preview.source)
      : null;
    const placeText = place.wikipedia_extracts.text;
    const favPlace = {
      xid: place.xid,
      content: {
        name: place.name,
        location: place.address.state,
        text: placeText,
      },
      img: img,
    };
    const newPlaces = [...userState.favourites, favPlace];
    try {
      await db.favourites.add(favPlace, favPlace.xid);
      dispatch({ type: 'ADD_PLACE', payload: newPlaces });
    } catch (err) {
      console.log(err);
      // Add notification.
    }
  };
  const getImgArrayBuffer = async (url) => {
    const response = await fetch(url);
    const imgBlob = await response.blob();
    const imgArrayBuffer = await blobToArrayBuffer(imgBlob);
    return imgArrayBuffer;
  };
  const addPlaceToDB = async () => {};

  return (
    <nav className="picture-toolbar">
      <ul className="picture-toolbar-list">
        <li className="picture-toolbar-list__item">
          <button
            className="picture-toolbar-list__btn"
            onClick={handleShareClick}
          >
            <i className="fas fa-share-square picture-toolbar-list__icon"></i>
          </button>
        </li>
        <li className="picture-toolbar-list__item">
          <button
            className="picture-toolbar-list__btn"
            onClick={handleFavClick}
          >
            <i className="fas fa-star picture-toolbar-list__icon"></i>
          </button>
        </li>
        <li className="picture-toolbar-list__item">
          <button className="picture-toolbar-list__btn">
            <i className="fas fa-map picture-toolbar-list__icon"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default PictureToolbar;
