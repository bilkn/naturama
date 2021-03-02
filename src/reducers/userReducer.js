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
      const { favourites, notifTimeoutID } = action.payload;
      return {
        ...state,
        favourites,
        notification: 'Place has been added to your favourites.',
        isNotificationOpen: true,
        notifTimeoutID,
      };
    }

    case 'REMOVE_PLACE': {
      const { favourites, notifTimeoutID } = action.payload;
      return {
        ...state,
        favourites,
        notification: 'Place has been removed from your favourites.',
        isNotificationOpen: true,
        notifTimeoutID,
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
        notifTimeoutID: null,
      };
    }

    case 'RESET_DATABASE': {
      return {
        ...state,
        notification: 'Database has been reset.',
        isNotificationOpen: true,
      };
    }
    case 'CLEAR_HISTORY': {
      const { history, notifTimeoutID } = action.payload;
      return {
        ...state,
        history,
        notification: 'Place history has been removed.',
        isNotificationOpen: true,
        notifTimeoutID,
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export default userReducer;
