/* import './DarkBackground.scss';
import { AppContext } from '../../context/AppContext/AppContext';
import { useEffect, useContext } from 'react';
function DarkBackground(props) {



 
  useEffect(() => {
    showBackground
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'initial');
  }, [showBackground]);
  const className = showBackground
    ? 'dark-background dark-background--visible'
    : 'dark-background';
  return <div className={className} onClick={backgroundHandler}></div>;
}

export default DarkBackground;
 */