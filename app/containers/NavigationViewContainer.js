import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import NavigationView from '../components/NavigationView'
import * as routingActions from '../actions/routing'

const mapStateToProps = (state) => ({
    routing: state.routing
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(routingActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationView)
