const initialState = {
    data: [],
  };

export const tableReducer = (state = initialState, action) => {
    console.log('asdsa', state, action)
    switch (action.type) {
      case 'json':
        return { ...state, data: action.payload };
      default:
        return state;
    }
  };