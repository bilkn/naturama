function userReducer(state, action) {
  switch (action.type) {
    case 'INIT': {
      return {
        ...action.payload,
      };
    }
    case 'CHANGE_PROFILE': {
      return {
        ...state,
        profile: action.payload,
      };
    }
    case 'EDIT_USER': {
      return {
        ...action.payload,
      };
    }

    case 'ADD_PLACE': {
      return {
        ...state,
        favourites: action.payload,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export default userReducer;
