import React, {useState, useEffect} from 'react';
import { AsyncStorage } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

import Routes from './src/routes';

export default function App() {

	console.disableYellowBox = true;

	return (
		<Routes />
	);
}
