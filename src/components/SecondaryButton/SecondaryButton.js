import React, {Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native'
import styles from './styles'


export default class SecondaryButton extends Component {
    render() {

        const {title, style, onPress} = this.props

        return(
            <TouchableOpacity style={[styles.btn, style]} onPress={onPress}>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        )
    }
}