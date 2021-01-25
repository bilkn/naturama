import React from 'react';
import img from '../../assets/img-2.jpg';
import './PlaceThumbnail.scss';
function PlaceThumbnail(props) {
  const { classNames, icon, children } = props;

  return (
    <div className={classNames.join(' ')}>
      <img src={img} alt="" className={`${classNames[0]}__img`} />
      <i className={`${icon} ${classNames[0]}__icon`}></i>
      {children || ""}
      <p className={`${classNames[0]}__name`}>Wild Jungle</p>
    </div>
  );
}

export default PlaceThumbnail;
