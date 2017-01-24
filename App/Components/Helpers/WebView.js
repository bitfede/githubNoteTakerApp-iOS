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

class WebView extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<WebView url={this.props.url} />
			</View>
		)
	}
};

WebView.propTypes = {
	url: React.PropTyles.string.isRequired
}

module.exports = WebView