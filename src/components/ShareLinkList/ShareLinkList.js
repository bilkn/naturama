import './ShareLinkList.scss';
import React, { useContext } from 'react';
import RandomPlaceContext from '../../context/RandomPlaceContext';
function ShareLinkList() {
  const [place] = useContext(RandomPlaceContext);

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
  return (
    <ul className="share-link-list">
      <li className="share-link-list__item">
        <a
          className="share-link-list__link twitter-share-button"
          href={getTwitterURL()}
          rel="noopeener noreferrer"
          target="_blank"
        >
          <i
            className="fa fa-twitter share-link-list__icon"
            aria-hidden="true"
          ></i>
          Twitter
        </a>
      </li>
      <hr className="share-link-list__line" />
      <li className="share-link-list__item">
        <a
          href={getFacebookURL()}
          className="share-link-list__link"
          rel="noopeener noreferrer"
          target="_blank"
        >
          <i
            className="fa fa-facebook-square share-link-list__icon"
            aria-hidden="true"
          ></i>
          Facebook
        </a>
      </li>
      <hr className="share-link-list__line" />
      <li className="share-link-list__item">
        <a href={getMailURL()} className="share-link-list__link">
          <i className="fas fa-envelope share-link-list__icon"></i>
          Email
        </a>
      </li>
    </ul>
  );
}

export default ShareLinkList;
