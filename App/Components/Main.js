// Main Component

import React, { Component } from 'react';
var api = require('../Utils/api')
var Dashboard = require('./Dashboard')
import {
	Text,
	View,
	StyleSheet,
	TextInput,
	TouchableHighlight,
	ActivityIndicatorIOS
} from 'react-native';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '', //the name we input
      isLoading: false, //this is used to display the loading spinner
      error: false //this is to output some error message in case we need to
    }
  }
  handleChange(event) {
  	this.setState({
  		username: event.nativeEvent.text
  	});
  }
  handleSubmit() {
  	//update our indicatorIOS spinner
  	this.setState({
  		isLoading: true
  	});
  	console.log('SUBMITTING: ' + this.state.username)
  	//fetch data from github using fetch() in the utils/api.js file
  	api.getBio(this.state.username) //this will return a promise
  		.then((res) => {
  			//CASE when user is not found
  			if (res.message === "Not Found") { //this cuz we know what github returns
  				this.setState({
  					error: 'User Not Found',
  					isLoading: false
  				});
  				console.log("user: " + this.state.username + " does not exist")
  			}
  			//CASE when user is found
  			else {
  				console.log(res)
  				this.props.navigator.push({
  					title: res.name || "Select an Option",
  					component: Dashboard,
  					passProps: {userInfo: res}
  				});
  				this.setState({
  					isLoading: false,
  					error: false,
  					username: ''
  				});
  			}
  		});
  	//reroute to the next screen, passing that github information just fetched
  }
	render() {
		return (
				<View style={styles.mainContainer}>
					<Text style={styles.title}>Search for a Github User</Text>
					<TextInput
					style={styles.searchInput} 
					value={this.state.username} 
					onChange={this.handleChange.bind(this)} />
					<TouchableHighlight
						style={styles.button}
						onPress={this.handleSubmit.bind(this)}
						underlayColor="white" >
							<Text style={styles.buttonText}>SEARCH</Text>
							</TouchableHighlight>
				</View>
			)
	}
}


var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});



module.exports = Main;