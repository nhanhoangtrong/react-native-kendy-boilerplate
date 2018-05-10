export default (
    state = { isLoggedIn: false, username: null, authToken: null },
    action
) => {
    switch (action.type) {
        case 'Login':
            return {
                ...state,
                isLoggedIn: true,
                username: action.username,
                authToken: action.authToken,
            };
        case 'Logout':
            return {
                ...state,
                isLoggedIn: false,
                username: null,
                authToken: null,
            };
        default:
            return state;
    }
};
