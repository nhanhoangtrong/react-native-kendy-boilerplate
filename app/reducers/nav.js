import { AppNavigator } from '../components/AppNavigator'

console.log('app navigator', AppNavigator)

const initialAction = AppNavigator.router.getActionForPathAndParams('Home')
const initialState = AppNavigator.router.getStateForAction(initialAction)

export default (state = initialState, action) => {
    const nextState = AppNavigator.router.getStateForAction(action, state)
    
    return nextState || state
}
