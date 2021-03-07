import { useEffect, useState } from 'react';

function useMediaMatch() {
  const [isMatched, setIsMatched] = useState(false);

  const matchMedia = (type, width) => {
    const mql = window.matchMedia(`(${type}-width:${width})`);
    return mql.matches;
  };

  useEffect(() => {
    if (matchMedia('min', '1024px')) {
      setIsMatched(true);
    } else {
      setIsMatched(false);
    }
  }, []);

  useEffect(() => {
    let enableCall = true;
    const handleResize = () => {
      if (!enableCall) return;
      enableCall = false;
      const mql = matchMedia('min', '1024px');
      console.log('hanlde resize');
      if (mql) {
        setIsMatched(true);
      } else {
        setIsMatched(false);
      }
      setTimeout(() => (enableCall = true), 100);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isMatched };
}

export default useMediaMatch;
