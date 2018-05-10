import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import { connect } from 'react-redux';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        const { dispatch, username, authToken } = props;
        this.props.dispatch({ type: 'Login', username, authToken });
    }
    render() {
        const { navigator } = this.props;
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text>Hello World</Text>
                <Button
                    title="Test Screen"
                    onPress={() => {
                        navigator.push({
                            screen: 'myapp.home.TestScreen',
                            title: 'Test Screen',
                            animated: true,
                            passProps: {},
                            backButtonHidden: false,
                            navigatorStyle: {},
                            navigatorButtons: {},
                        });
                    }}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    state: state,
});

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
