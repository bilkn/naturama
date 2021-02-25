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
        notification: 'Place has been added to your favourites.',
        isNotificationOpen: true,
      };
    }

    case 'REMOVE_PLACE': {
      return {
        ...state,
        favourites: action.payload,
        notification: 'Place has been removed from your favourites.',
        isNotificationOpen: true,
      };
    }
    case 'ADD_HISTORY': {
      return {
        ...state,
        history: action.payload,
      };
    }

    case 'CLEAR_NOTIFICATION': {
      return {
        ...state,
        notification: '',
        isNotificationOpen: false,
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export default userReducer;
