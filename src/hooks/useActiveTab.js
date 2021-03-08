import { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router';

function useActiveTab(query, styleClass) {
  const location = useLocation();
  console.log(styleClass);
  // It adds class to the current tab element for styling, and removes the class from other tabs according to the path.
  const addClassToTheCurrentTab = useCallback(
    (path, navElements) => {
      navElements.forEach((elem) => {
        const pagePath = ['/', elem.href.split('/').slice(-1)].join('');
        console.log(styleClass);
  
        if (path === pagePath) {
          elem.classList.add(styleClass);
          console.log(elem);
        } else elem.classList.remove(styleClass);
      });
    },
    [styleClass]
  );

  useEffect(() => {
    const path = location.pathname;
    const navElements = document.querySelectorAll(query);
    addClassToTheCurrentTab(path, navElements);
  }, [location.pathname, query, styleClass, addClassToTheCurrentTab]);
}

export default useActiveTab;
