import { useContext } from 'react';
import RandomPlaceContext from '../context/RandomPlaceContext';
import SelectedPlaceContext from '../context/SelectedPlaceContext';

function useShareURL() {
  const [selectedPlace] = useContext(SelectedPlaceContext);
  const [randomPlace] = useContext(RandomPlaceContext);
  const place = selectedPlace || randomPlace;

  const getTwitterURL = () => {
    const {
      content: { wikipedia: wikiURL, name },
    } = place;

    // Solves spaced url bug for Twitter.
    const replacedURL = wikiURL.replace(/%20/g, '_');
    return `https://twitter.com/intent/tweet?text=${name}&url=${replacedURL}`;
  };

  const getFacebookURL = () => {
    const {
      content: { wikipedia: wikiURL },
    } = place;

    return `https://www.facebook.com/sharer/sharer.php?u=${wikiURL}`;
  };

  const getMailURL = () => {
    const {
      content: { wikipedia: wikiURL, name },
    } = place;
    return `mailto:?&body=${name}%0D%0A%0D%0A${wikiURL}`;
  };
  let twitterURL = '';
  let facebookURL = '';
  let mailURL = '';
  if (place) {
    twitterURL = getTwitterURL();
    facebookURL = getFacebookURL();
    mailURL = getMailURL();
  }
  return { twitterURL, facebookURL, mailURL };
}

export default useShareURL;
