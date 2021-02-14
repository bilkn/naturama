function createNewUser(oldUser, targetKeys) {
  let newUser = { ...oldUser };

  for (let key of targetKeys) {
    newUser = changeTargetKeys(newUser, key);
  }
  return newUser;
}

function changeTargetKeys(obj, targetKey) {
  const keys = Object.keys(obj);
  for (let key of keys) {
    if (key === targetKey[0]) obj[key] = targetKey[1];
    else if (obj[key] instanceof Object && obj[key] !== null) changeTargetKeys(obj[key], targetKey);
  }
  return obj;
}
export default createNewUser;
