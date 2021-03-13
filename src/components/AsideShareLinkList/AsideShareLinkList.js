import React from 'react';
import useShareURL from '../../hooks/useShareURL';
import './AsideShareLinkList.scss';

function AsideShareLinkList({ shareLinkList }) {
  const { twitterURL, facebookURL, mailURL } = useShareURL();

  return (
    <ul className="aside-share-link-list" ref={shareLinkList}>
      <li className="aside-share-link-list__item">
        <a
          href={twitterURL}
          className="aside-share-link-list__link"
          aria-label="Twitter"
        >
          <i className="fa fa-twitter aside-share-link-list__icon" />
        </a>
      </li>
      <li className="aside-share-link-list__item">
        <a
          href={facebookURL}
          className="aside-share-link-list__link"
          aria-label="Facebook"
        >
          <i className="fa fa-facebook-square aside-share-link-list__icon" />
        </a>
      </li>
      <li className="aside-share-link-list__item">
        <a
          href={mailURL}
          className="aside-share-link-list__link"
          aria-label="Email"
        >
          <i className="fas fa-envelope aside-share-link-list__icon" />
        </a>
      </li>
    </ul>
  );
}

export default AsideShareLinkList;
