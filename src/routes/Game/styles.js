import {StyleSheet} from 'react-native'
import Colors from 'common/Colors'

export default StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    boardContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonsContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        width: '50%',
        marginVertical: '2%',
    },
    board: {
        height: '70%',
        aspectRatio: 1,
        backgroundColor: Colors.accent,
    },
    scoreContainer: {
        flexDirection: 'row',
    },
    scoreLabel: {
        fontSize: 20,
        marginRight: 5,
    },
    score: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    overlayBtn: {
        position: 'absolute',
        left: 0,
        right: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    gameoverHeading: {
        fontSize: 72,
        color: '#fff',
    },
    gameoverScore: {
        color: '#fff',
        fontSize: 24,
    },
    gameoverMessage: {
        color: '#fff',
        fontSize: 20,
    }
})