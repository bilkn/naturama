import { useEffect } from 'react';
import { useLocation } from 'react-router';

function useActiveTab(query) {
  const location = useLocation();

  // It adds "active-tab" class for styling, and removes the class from other tabs according to the path.
  useEffect(() => {
    let itemOrder = null;
    const path = location.pathname;
    switch (path) {
      case '/':
        itemOrder = 1;
        break;
      case '/favourites':
        itemOrder = 2;
        break;
      case '/profile':
      case '/help':
      case '/preferences':
        itemOrder = 4;
        break;
      case '/daily-place-list':
        itemOrder = 5;
        break;
      default:
        return;
    }
    const navItems = document.querySelectorAll(query);
    navItems.forEach((item) => {
      item.classList.remove('active-tab');
    });
    const navItem = document.querySelector(
      `.mobile-nav-list li:nth-of-type(${itemOrder})`
    );
    navItem.classList.add('active-tab');
  }, [location.pathname, query]);
}

export default useActiveTab;
