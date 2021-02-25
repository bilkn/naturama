import React from 'react';
import HelpList from '../../components/HelpList/HelpList';
import PageName from '../../components/PageName/PageName';
import MobileNavTop from '../../components/MobileNavTop/MobileNavTop';
import ReturnLink from '../../components/ReturnLink/ReturnLink';
import EmptyDiv from '../../components/EmptyDiv/EmptyDiv';

function Help() {
  return (
    <div className="help">
      <MobileNavTop>
        <ReturnLink path="/profile" />
        <PageName pageName="Help" />
        <EmptyDiv />
      </MobileNavTop >
    </div>
  );
}

export default Help;
