import React, { useEffect, useRef } from 'react';
import useCloseUI from '../../hooks/useCloseUI';
import './Contact.scss';

function Contact({ setShowContact }) {
  useCloseUI([setShowContact]);
  const link = useRef(null);

  useEffect(() => {
    link.current.focus();
  }, []);
  return (
    <div className="contact">
      <ul className="contact-list">
        <li className="contact-list__item">
          <a
            aria-label="Github"
            href="https://github.com/bilkn"
            className="contact-list__link"
            target="_blank"
            rel="noreferrer"
            ref={link}
          >
            <i className="fab fa-github contact-list__icon" />
          </a>
        </li>
        <li className="contact-list__item">
          <a
            aria-label="Linkedin"
            href="https://www.linkedin.com/in/bilkankonus/"
            className="contact-list__link"
            target="_blank"
            rel="noreferrer"
          >
            <i
              className="fa fa-linkedin-square contact-list__icon"
              aria-hidden="true"
            />
          </a>
        </li>
        <li className="contact-list__item">
          <a
            aria-label="Email"
            href="mailto:bilkan.konus@hotmail.com"
            className="contact-list__link"
          >
            <i className="fas fa-at contact-list__icon"/>
          </a>
        </li>
      </ul>
      <p className="contact__signature">&copy;2021 Code and Design by Bilkan Konus.</p>
    </div>
  );
}

export default Contact;
