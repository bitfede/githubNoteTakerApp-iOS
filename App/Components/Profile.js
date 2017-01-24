import React, { Component } from 'react';
var Badge = require('./Badge')
import {
	Text,
	View,
	StyleSheet,
	ScrollView
} from 'react-native';

//STYLES

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    padding: 10,
  },
  rowTitle: {
    color: '#488BEC',
    fontSize: 16,
  },
  rowContent: {
    fontSize: 19,
  },
})

//CLASS

class Profile extends React.Component {
	getRowTitle(user, item) {
		item = (item == 'public_repos') ? item.replace('_', ' ') : item;
		return item[0] ? item[0].toUpperCase() + item.slice(1) : item;
	}
	render() {
		var userInfo = this.props.userInfo;
		var topicArr = ['company' , 'location', 'followers', 'following', 'email', 'bio', 'public_repos'];
		var list = topicArr.map((item, index)=> {
			if (!userInfo[item]) {
				return <View key={index} />
			}
			else {
				return (
					<View key={index}>
						<View style={styles.rowContainer}>
							<Text style={styles.rowTitle}  > {this.getRowTitle(userInfo, item)} </Text>
							<Text style={styles.rowContent}> {userInfo[item]} </Text>
						</View>
					</View>
				)
			}

		});
		return (
			<ScrollView style={styles.container}>
				<Badge userInfo={this.props.userInfo} />
				{list}
			</ScrollView>
		)
	}
};

module.exports = Profile