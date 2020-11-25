import {StyleSheet} from 'react-native'
import Colors from 'common/Colors'

export default StyleSheet.create({
    header: {
        height: '25%',
        backgroundColor: Colors.accent,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    title: {
        fontSize: 60,
        color: Colors.primary,
        fontWeight: 'bold',
        marginRight: '2%',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        width: '30%',
        marginVertical: '2%',
    }
})