import { StyleSheet } from 'react-native'
import colors from './constants'

export default StyleSheet.create({
    navBar: {
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
    },
    navBarTitle: {
        padding: 8,
        color: 'white',
        fontWeight: '600',
    },
    navBarTextLeft: {
        padding: 8,
        color: 'white',
    },
    navBarTextRight: {
        padding: 8,
        color: 'white',
    }

})
