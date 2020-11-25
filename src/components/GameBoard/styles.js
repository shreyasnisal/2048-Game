import {StyleSheet} from 'react-native'
import Colors from 'common/Colors'

export default StyleSheet.create({
    row: {
        height: '25%',
        flexDirection: 'row',
    },
    tile: {
        borderWidth: 1,
        borderColor: Colors.primary,
        width: '25%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tileText: {
        fontSize: 32,
    },
    tile_2: {
        backgroundColor: Colors.tile_2,
    },
    tile_4: {
        backgroundColor: Colors.tile_4,
    },
    tile_8: {
        backgroundColor: Colors.tile_8
    },
    tile_16: {
        backgroundColor: Colors.tile_16,
    },
    tile_32: {
        backgroundColor: Colors.tile_32,
    },
    tile_64: {
        backgroundColor: Colors.tile_64,
    },
    tile_128: {
        backgroundColor: Colors.tile_128,
    },
    tile_256: {
        backgroundColor: Colors.tile_256,
    },
    tile_512: {
        backgroundColor: Colors.tile_512,
    },
    tile_1024: {
        backgroundColor: Colors.tile_1024,
    },
    tile_2048: {
        backgroundColor: Colors.tile_2048,
    }
})