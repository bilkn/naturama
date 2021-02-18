const validatePicture = (picture) => {
  try {
    // If user doesn't choose any picture, picture will be "no-avatar.png" (URL as string).
    if (typeof picture === 'string') return true;
    const pictureType = picture.type;
    return (
      pictureType === 'image/jpeg' || pictureType === 'image/png' || picture instanceof ArrayBuffer
    );
  } catch (err) {
    console.log(err);
    return false;
  }
};

export default validatePicture;
