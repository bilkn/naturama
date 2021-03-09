import React from 'react';
import IconButton from '../IconButton/IconButton';
import useFetchPlace from '../../hooks/useFetchPlace';
import './ShuffleBtn.scss';

function ShuffleBtn({ className }) {
  const { fetchPlace } = useFetchPlace({autoFetch:false});
  return (
    <IconButton
      btnClass={`shuffle-btn ${className || ''}`}
      iconClass="fas fa-random shuffle-btn__icon"
      onClick={() => fetchPlace()}
    />
  );
}

export default ShuffleBtn;
