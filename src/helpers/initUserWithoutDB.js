import createUser from "./createUser";

async function initUserWithoutDB(dispatch) {
  const newUser = await createUser();
  dispatch({ type: 'INIT', payload: newUser });
}

export default initUserWithoutDB;
