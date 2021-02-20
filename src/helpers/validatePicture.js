const validatePicture = (picture) => {
  const types = ['image/jpeg', 'image/png'];
  return types.some((type) => picture.type === type);
};

export default validatePicture;
