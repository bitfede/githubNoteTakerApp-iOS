import React, { Component } from 'react'
var Profile = require('./Profile')
var api = require('../Utils/api')
var Repositories = require('./Repositories')
var Notes = require('./Notes')
import {
	Text,
	View,
	StyleSheet,
  Image,
  TouchableHighlight 
} from 'react-native'

class Dashboard extends Component {
  makeBackground(btn) {
    var obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    }

    if (btn === 0) {
      obj.backgroundColor = '#48BBEC'
    }
    else if (btn === 1) {
      obj.backgroundColor = '#E77AAE'
    }
    else {
      obj.backgroundColor = '#758BF4'
    }

    return obj
  }

  goToProfile() {
    // console.log(this.props.userInfo)
    var info = this.props.userInfo;
    this.props.navigator.push({
      title: info.name || "User",
      component: Profile,
      passProps: {userInfo: info}
    });
  }
  goToRepos() {
    api.getRepos(this.props.userInfo.login)
      .then((res) => {
        this.props.navigator.push({
          component: Repositories,
          title: 'Repos',
          passProps: {
            userInfo: this.props.userInfo,
            repos: res
          }
        });
      });
  }
  goToNotes() {
    api.getNotes(this.props.userInfo.login)
    .then((res) => {
      res = res || {};
      this.props.navigator.push({
        title: "Notes",
        component: Notes,
        passProps: {
          userInfo: this.props.userInfo,
          notes: res
        }
      });
    }).catch(error => {
      console.log('ERROR!!!');
    })
  }

	render() {
		return (
				<View style={styles.container}>
          <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image}/>
					<TouchableHighlight
            style={this.makeBackground(0)}
            onPress={this.goToProfile.bind(this)}
            underlayColor='#88D4F5'>
              <Text style={styles.buttonText}> View Profile </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={this.makeBackground(1)}
            onPress={this.goToRepos.bind(this)}
            underlayColor='#88D4F5'>
              <Text style={styles.buttonText}> View Repos </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={this.makeBackground(2)}
            onPress={this.goToNotes.bind(this)}
            underlayColor='#88D4F5'>
              <Text style={styles.buttonText}> View Notes </Text>
          </TouchableHighlight>
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