import React from 'react';
import AppHead from '../../components/AppHead/AppHead';
import PageName from '../../components/PageName/PageName';
import ProfileContainer from '../../components/ProfileContainer/ProfileContainer';
import Logo from '../../components/Logo/Logo';

function Profile() {
  return (
    <>
      <AppHead>
        <Logo className="logo--large-screen" />
        <PageName pageName="Profile" />
      </AppHead>
      <ProfileContainer />
    </>
  );
}

export default Profile;
