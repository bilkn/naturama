import './DarkBackground.scss';
import React, { useEffect } from 'react';

function DarkBackground(props) {
  const { showDarkBackground, setShowDarkBackground, setShowEdit } = props;
  const backgroundHandler = () => {
    setShowEdit(false);
    setShowDarkBackground(false);
  };
  useEffect(() => {
    showDarkBackground
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'initial');
  }, [showDarkBackground]);
  const className = showDarkBackground
    ? 'dark-background dark-background--visible'
    : 'dark-background';
  return <div className={className} onClick={backgroundHandler}></div>;
}

export default DarkBackground;
