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
    case 'SAVE_PREFERENCES': {
      return {
        ...action.payload,
        notification: 'Changes have been saved.',
        isNotificationOpen: true,
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
      const { history, shufflePlace } = action.payload;
      const { shuffleHistory } = state;
      const shuffleHistoryArr =
        shuffleHistory.length < 4
          ? [...shuffleHistory, shufflePlace]
          : [...shuffleHistory.slice(1, shuffleHistory.length), shufflePlace];
      return {
        ...state,
        history,
        shuffleHistory: shuffleHistoryArr,
      };
    }
    case 'ADD_HISTORY_DAILY_LIST': {
      const { history, shufflePlace, dailyList } = action.payload;
      const { shuffleHistory } = state;
      const shuffleHistoryArr =
        shuffleHistory.length < 4
          ? [...shuffleHistory, shufflePlace]
          : [...shuffleHistory.slice(1, shuffleHistory.length), shufflePlace];
      return {
        ...state,
        history,
        shuffleHistory: shuffleHistoryArr,
        dailyList
      };
    }

    case 'CLEAR_NOTIFICATION': {
      return {
        ...state,
        notification: '',
        isNotificationOpen: false,
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
      return {
        ...state,
        history: action.payload,
        notification: 'Place history has been removed.',
        isNotificationOpen: true,
        shuffleHistory: [],
      };
    }
    case 'INVALID_FILE_SIZE': {
      return {
        ...state,
        notification: 'Picture size must be lower than 5 MB.',
        isNotificationOpen: true,
      };
    }
    case 'INVALID_FILE_FORMAT': {
      return {
        ...state,
        notification: 'Picture must be in .png, or .jpeg format.',
        isNotificationOpen: true,
      };
    }
    case 'FAST_REQUEST': {
      return {
        ...state,
        notification: 'Please wait a few seconds.',
        isNotificationOpen: true,
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export default userReducer;
