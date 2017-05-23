export default (state = { isLoggedIn: false }, action) => {
    switch (action.type) {
    case 'Login':
        return {
            ...state,
            isLoggedIn: true
        }
    case 'Logout':
        return {
            ...state,
            isLoggedIn: false
        }
    default:
        return state
    }
}
