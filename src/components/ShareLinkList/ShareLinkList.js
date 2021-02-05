import './ShareLinkList.scss';
import React from 'react';
function ShareLinkList() {
  /*  const url = encodeURI("www.google.com.tr"); */
  return (
    <ul className="share-link-list">
      <li className="share-link-list__item">
        <a
          className="share-link-list__link twitter-share-button" /* href={`https://twitter.com/intent/tweet?url=${url}`} */
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
        <a href="#" className="share-link-list__link">
          <i
            className="fa fa-facebook-square share-link-list__icon"
            aria-hidden="true"
          ></i>
          Facebook
        </a>
      </li>
      <hr className="share-link-list__line" />
      <li className="share-link-list__item">
        <a href="#" className="share-link-list__link">
          <i className="fas fa-envelope share-link-list__icon"></i>
          Email
        </a>
      </li>
    </ul>
  );
}

export default ShareLinkList;
