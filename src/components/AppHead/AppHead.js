import React, { useContext } from 'react';
import TitleContext from '../../context/TitleContext';
import Logo from '../Logo/Logo';
import './AppHead.scss';

function AppHead() {
  const [title] = useContext(TitleContext);
  return <header className="app-head">{title || <Logo />}</header>;
}

export default AppHead;
