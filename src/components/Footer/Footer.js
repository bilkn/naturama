import React from 'react';
import './Footer.scss';

function Footer({ children, ...restProps }) {
  return (
    <footer className="footer" {...restProps}>
      {children}
    </footer>
  );
}

Footer.Wrapper = function FooterWrapper({ children, ...restProps }) {
  return (
    <p className="footer__wrapper" {...restProps}>
      {children}
    </p>
  );
};

Footer.Text = function FooterText({ children, ...restProps }) {
  return (
    <p className="footer__text" {...restProps}>
      {children}
    </p>
  );
};

Footer.Link = function FooterLink({ children, ...restProps }) {
  return (
    <a className="footer__link" {...restProps} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

Footer.Icon = function FooterIcon({ classNames }) {
  return <i className={`footer__icon ${classNames}`} />;
};

export default Footer;
