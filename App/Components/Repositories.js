import React, { Component } from 'react';
var Badge = require('./Badge')
var Separator = require('./Separator')
var WebWindow = require('./Helpers/WebWindow')
import {
	ScrollView,
	Text,
	View,
	TouchableHighlight,
	StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    padding: 10
  },
  rowContainer: {
  	flexDirection: 'column',
  	flex: 1,
  	padding: 10
  },
  name: {
    color: '#488BEC',
    fontSize: 18,
    paddingBottom: 5,
  },
  stars: {
    color: '#488BEC',
    fontSize: 14,
    paddingBottom: 5,
  },
  description: {
    fontSize: 14,
    paddingBottom: 5,
  },
})

class Repositories extends React.Component {
	openPage(url) {
		 this.props.navigator.push({
		 	component: WebWindow,
		 	title: 'Web View',
		 	passProps: {url}
		 });
	}
	render() {
		const {repos} = this.props;
		var list = repos.map((item, index) => {
			var desc = repos[index].description ? <Text style={styles.description}> {repos[index].description} </Text> : <View></View>;
			return (
				<View key={index}>
					<View style={styles.rowContainer}>
						<TouchableHighlight
						onPress={this.openPage.bind(this, repos[index].html_url)}
						underlayColor='transparent'>
							<Text style={styles.name}> {repos[index].name}</Text>
						</TouchableHighlight>
						<Text style={styles.stars}> Stars: {repos[index].stargazers_count} </Text>
						{desc}
					</View>
					<Separator />
				</View>
		  )
		})
		return (
			<ScrollView style={styles.container}>
				<Badge userInfo={this.props.userInfo} />
				{list}
			</ScrollView>
		)
	}
};

Repositories.propTypes = {
	userInfo: React.PropTypes.object.isRequired,
	repos: React.PropTypes.array.isRequired
}

module.exports = Repositories