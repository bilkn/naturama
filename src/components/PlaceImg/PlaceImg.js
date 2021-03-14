import React, { useContext } from 'react';
import './PlaceImg.scss';
import NoImg from '../../assets/no-img.svg';
import LoadingContext from '../../context/LoadingContext';

const NoImgStyle = { height: '150px', width: '150px' };
function PlaceImg({ place }) {
  const { small = '', medium = '', large = '' } = place.img || {};
  const [, setIsLoading] = useContext(LoadingContext);
  const { name } = place.content;

  const handleOnload = () => {
    setIsLoading(false);
  };

  return (
    <img
      onLoad={handleOnload}
      src={place.img ? small.source : NoImg}
      srcSet={
        place.img &&
        `${small.source} 250w,${medium.source} 500w, ${large.source} 1000w`
      }
      alt={name}
      className="place-img"
      style={place.img ? {} : NoImgStyle}
    />
  );
}

export default PlaceImg;
