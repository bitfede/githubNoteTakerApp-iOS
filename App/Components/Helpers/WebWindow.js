import React, { Component } from 'react';

import {
	View,
	WebView,
	StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F6F6EF',
		flexDirection: 'column'
	}
});

class WebWindow extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<WebView url={this.props.url} />
			</View>
		)
	}
};

WebWindow.propTypes = {
	url: React.PropTypes.string.isRequired
}

module.exports = WebView