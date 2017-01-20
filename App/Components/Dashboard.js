import React, { Component } from 'react'
import {
	Text,
	View,
	StyleSheet
} from 'react-native'

class Dashboard extends Component {
	render() {
		return (
				<View style={styles.container}>
					<Text>This is the dashboard</Text>
					<Text>user {this.props.userInfo.toString()} </Text>
				</View>
		)
	}
}

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});

module.exports = Dashboard;