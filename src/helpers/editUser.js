function editUser(oldUser, targetKeys) {
  let newUser = { ...oldUser };

  for (let key of targetKeys) {
    newUser = changeTargetKey(newUser, key);
  }
  return newUser;
}

function changeTargetKey(obj, targetKey) {
  const keys = Object.keys(obj);
  for (let key of keys) {
    if (key === targetKey[0]) obj[key] = targetKey[1];
    else if (
      !Array.isArray(obj[key]) &&
      obj[key] instanceof Object &&
      obj[key] !== null
    ) {
      changeTargetKey(obj[key], targetKey);
    }
  }
  return obj;
}
export default editUser;
