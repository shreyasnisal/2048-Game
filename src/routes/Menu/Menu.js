import React, {Component} from 'react'
import {
    View,
    Text,
} from 'react-native'
import commonStyles from 'common/styles'
import styles from './styles'
import PrimaryButton from 'components/PrimaryButton/PrimaryButton'
import SecondaryButton from 'components/SecondaryButton/SecondaryButton'


export default class Menu extends Component {

    startGameBtn = () => {
        this.props.navigation.navigate('Game')
    }

    render() {
        return(
            <View style={commonStyles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>2048</Text>
                </View>
                <View style={styles.content}>
                    <PrimaryButton title='Start Game' style={styles.btn} onPress={this.startGameBtn} />
                    <SecondaryButton title='Exit' style={styles.btn} onPress={() => {}} />
                </View>
            </View>
        )
    }
}