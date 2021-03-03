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
      const {newUser, notifTimeoutID} = action.payload;
      return {
        ...newUser,
        notification: 'Changes have been saved.',
        isNotificationOpen: true,
        notifTimeoutID,
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
        notification: 'Your data has been reset.',
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
    case 'INVALID_FILE_SIZE': {
      return {
        ...state,
        notification: 'Picture size must be lower than 5 MB.',
        isNotificationOpen: true,
        notifTimeoutID : action.payload
      };
    }
    case 'INVALID_FILE_FORMAT': {
      return {
        ...state,
        notification: 'Picture must be in .png, or .jpeg format.',
        isNotificationOpen: true,
        notifTimeoutID : action.payload
      };
    }
    case 'FAST_REQUEST': {
      return {
        ...state,
        notification: 'You have to wait a few seconds.',
        isNotificationOpen: true,
        notifTimeoutID: action.payload,
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export default userReducer;
