const validatePicture = (picture) => {
  try {
    if (typeof picture === 'string') return true;
    const pictureType = picture.type;
    return (
      // If user doesn't choose any picture, picture will be "no-picture.png" (URL as string).
      pictureType === 'image/jpeg' || pictureType === 'image/png' || picture instanceof ArrayBuffer
    );
  } catch (err) {
    console.log(err);
    return false;
  }
};

export default validatePicture;
