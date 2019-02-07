const initialState = {
    loading: false,
};

function loader(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_LOADER_STATUS':
            return { ...state };
        default:
            return state;
    }
}

export default loader;