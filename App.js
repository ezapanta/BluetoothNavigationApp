/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LocationPreferences from './components/LocationPreferences';

export default class App extends React.Component {

	render() {
		return(
			<View style={{flex:1}} >
				<LocationPreferences />
			</View>
		);
	}
}
