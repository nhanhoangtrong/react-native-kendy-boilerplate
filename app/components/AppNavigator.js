import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createNavigationContainer, createNavigator, addNavigationHelpers, StackNavigator, StackRouter } from 'react-navigation'
import { AppRoutes } from '../routes'

import DefaultTransitioner from './transitioners/DefaultTransitioner'

// export const AppNavigator = StackNavigator({
//     ...AppRoutes
// })

const router = StackRouter({
    ...AppRoutes
})

export const AppNavigator = createNavigationContainer(createNavigator(router)(DefaultTransitioner))

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
)

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  nav: state.nav,
})

export default connect(mapStateToProps)(AppWithNavigationState)
