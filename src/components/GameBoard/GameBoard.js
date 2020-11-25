import React, {Component} from 'react'
import {
    View,
    Text,
} from 'react-native'
import styles from './styles'

export default class GameBoard extends Component {

    getStyle = (value) => {
        if (value == 2)
            return styles.tile_2
        else if (value == 4)
            return styles.tile_4
        else if (value == 8)
            return styles.tile_8
        else if (value == 16)
            return styles.tile_16
        else if (value == 32)
            return styles.tile_32
        else if (value == 64)
            return styles.tile_64
        else if (value == 128)
            return styles.tile_128
        else if (value == 256)
            return styles.tile_256
        else if (value == 512)
            return styles.tile_512
        else if (value == 1024)
            return styles.tile_1024
        else if (value == 2048)
            return styles.tile_2048
    }

    render() {
        const {style, matrix} = this.props


        return(
            <View style={[style]}>
                {matrix.map((rowArr, index) => {
                    return(
                        <View style={styles.row}>
                            {rowArr.map((tileValue, tileIndex) => {
                                return(
                                    <View style={[styles.tile, this.getStyle(tileValue)]}>
                                        {tileValue != 0 && <Text style={styles.tileText}>{tileValue}</Text>}
                                    </View>
                                )
                            })}
                        </View>
                    )
                })}
            </View>
        )
    }
}