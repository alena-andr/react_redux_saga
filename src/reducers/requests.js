const initialState = {
};

function requests(state = initialState, action) {
    switch (action.type) {
        case 'GET_DATA':
            return { ...state };
        default:
            return state;
    }
}

export default requests;