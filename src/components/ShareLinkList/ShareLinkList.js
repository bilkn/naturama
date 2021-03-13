import './ShareLinkList.scss';
import React from 'react';
import useShareURL from '../../hooks/useShareURL';

function ShareLinkList() {
  const { twitterURL, facebookURL, mailURL } = useShareURL();

  return (
    <ul className="share-link-list">
      <li className="share-link-list__item">
        <a
          className="share-link-list__link twitter-share-button"
          href={twitterURL}
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
      <li className="share-link-list__item no-border-radius">
        <a
          href={facebookURL}
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
      <li className="share-link-list__item no-border-radius">
        <a href={mailURL} className="share-link-list__link">
          <i className="fas fa-envelope share-link-list__icon"></i>
          Email
        </a>
      </li>
    </ul>
  );
}

export default ShareLinkList;
