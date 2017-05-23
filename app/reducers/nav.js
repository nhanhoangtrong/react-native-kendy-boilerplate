import { AppNavigator } from '../components/AppNavigator'
import { NavigationActions } from 'react-navigation'

const firstAction = AppNavigator.router.getActionForPathAndParams('Home')
const tempNavState = AppNavigator.router.getStateForAction(firstAction)
const secondAction = AppNavigator.router.getActionForPathAndParams('Login')
const initialState = AppNavigator.router.getStateForAction(secondAction, tempNavState)

export default (state = initialState, action) => {
    let nextState
    switch (action.type) {
    case 'Login':
        nextState = AppNavigator.router.getStateForAction(firstAction)
        break
    case 'Logout':
        nextState = AppNavigator.router.getStateForAction(
            NavigationActions.navigate({ routeName: 'Login'}),
            state,
        )
        break
    case 'Back':
        nextState = AppNavigator.router.getStateForAction(
            NavigationActions.back(),
            state
        )
        break
    default:
        nextState = AppNavigator.router.getStateForAction(action, state)
        break
    }

    return nextState || state
}
