import React from 'react';
import './Attribution.scss';

function Attribution({ place }) {
  const { attribution: attr } = place.img;
  console.log(attr);
  return (
    <p className="attribution">
      {attr.artist && <>Image by </>}
      {(attr.href && (
        <>
          <a
            target="_blank"
            rel="noreferrer"
            href={attr.href}
            className="attribution__link"
          >
            {attr.artist}
          </a>,
        </>
      )) || (
        <>
          {attr.artist }
          (Source link could not found)
        </>
      )}{' '}
      <a
        target="_blank"
        rel="noreferrer"
        href={attr.licenseURL}
        className="attribution__link"
      >
        {attr.licenseShort}
      </a>
      , via Wikimedia Commons
    </p>
  );
}

export default Attribution;
