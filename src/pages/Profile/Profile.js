import React from 'react';
import AppHead from '../../components/AppHead/AppHead';
import PageName from '../../components/PageName/PageName';
import ProfileContainer from '../../components/ProfileContainer/ProfileContainer';

function Profile() {
  return (
    <div>
      <AppHead>
        <PageName pageName="Profile" />
      </AppHead>
      <ProfileContainer />
    </div>
  );
}

export default Profile;
