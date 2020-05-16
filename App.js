import React, {useState, useEffect} from 'react';
import { AsyncStorage } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

import Routes from './src/routes';

import Loading from './src/components/Loading';

export default function App() {

	console.disableYellowBox = true;

	const [loading, setLoading] = useState(true);
	const [initialRouteName, setInitialRouteName] = useState('Login');
	const [user, setUser] = useState();

	useEffect(() => {
		
		async function getToken() {
			try {
				const storage = await AsyncStorage.multiGet(['@tcc:token', '@tcc:user']);

				const token = storage[0][1];
				const user = storage[1][1];

				if(!token || !user) return;

				setInitialRouteName('App');

				setUser(JSON.parse(user));

			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		}

		getToken();

	}, []);

	return (
		<>
			{ loading ? <Loading /> : <Routes initialRouteName={initialRouteName}/> }
		</>
	);
}
