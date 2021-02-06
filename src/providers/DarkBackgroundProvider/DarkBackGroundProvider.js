import React from 'react';
import DarkBackgroundContext from "../../context/DarkBackGroundContext";

function DarkBackgroundProvider(props) {
  const [showDarkBackground, setShowDarkBackground] = React.useState(false);
  return <DarkBackgroundContext.Provider value={[showDarkBackground, setShowDarkBackground]} {...props} />;
}

export default DarkBackgroundProvider;
