import React, {Component} from 'react'
import {NavigationContainer} from '@react-navigation/native'

import StackNav from 'navigation/StackNav'

export default class App extends Component {
	render() {
		return(
			<NavigationContainer>
				<StackNav />
			</NavigationContainer>
		)
	}
}