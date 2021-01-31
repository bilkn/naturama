import React, { useContext, useState } from 'react';
import TitleContext from '../../context/TitleContext';
import Logo from '../Logo/Logo';
import './AppHead.scss';

function AppHead() {
 const titleContext = useContext(TitleContext);
 const [title] = titleContext;
  return <header className="app-head">{title || <Logo />}</header>;
}

export default AppHead;
