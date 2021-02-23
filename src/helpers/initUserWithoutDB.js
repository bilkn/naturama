import createUser from "./createUser";

async function initUserWithoutDB(dispatch) {
  const freshUser = await createUser();
  dispatch({ type: 'INIT', payload: freshUser });
}

export default initUserWithoutDB;
