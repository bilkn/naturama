import React from 'react';
import HelpList from '../../components/HelpList/HelpList';
import PageName from '../../components/PageName/PageName';
import ReturnLink from '../../components/ReturnLink/ReturnLink';
import EmptyDiv from '../../components/EmptyDiv/EmptyDiv';
import Logo from '../../components/Logo/Logo';
import AppHead from '../../components/AppHead/AppHead';

function Help() {
  return (
    <div className="help">
      <AppHead style={{ justifyContent: 'space-between' }}>
        <Logo className="logo--large-screen" />
        <ReturnLink path="/profile" />
        <PageName pageName="Help" />
        <EmptyDiv />
      </AppHead>
      <HelpList />
    </div>
  );
}

export default Help;
