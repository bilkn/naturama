function createNewUser(oldUser, targetProps) {
  return changeProperty({ ...oldUser }, targetProps);
}

function changeProperty(obj, prop) {
  const keys = Object.keys(obj);
  for (let key of keys) {
    if (key === prop[0]) obj[key] = prop[1];
    else if (obj[key] instanceof Object) changeProperty(obj[key], prop);
  }

  return obj;
}
export default createNewUser;
