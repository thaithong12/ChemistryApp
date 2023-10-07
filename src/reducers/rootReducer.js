const initialState = {
    displayData: [],
    count: 0
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_ACTION':
            return {
                ...state, displayData: action.payload.data, count: action.payload.check
            }
        default:
            return state;
    }
};

export default rootReducer;

