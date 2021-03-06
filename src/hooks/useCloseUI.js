import { useContext, useEffect } from 'react';
import DarkBackgroundContext from '../context/DarkBackGroundContext';

function useCloseUI(props) {
    const [,setShowDarkBackground] = useContext(DarkBackgroundContext)
  useEffect(() => {
    const handleKeyDown = (e) => {

      // Closes the open popup UI's.
      if (e.key === 'Escape') {
        props.forEach((prop) => prop && prop(false));
        setShowDarkBackground(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [props, setShowDarkBackground]);
}

export default useCloseUI;
