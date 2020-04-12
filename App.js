import React, {useState, useEffect} from 'react';
import { AsyncStorage } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

import Routes from './src/routes';

import Loading from './src/components/Loading';

export default function App() {

	const [loading, setLoading] = useState(true);
	const [initialRouteName, setInitialRouteName] = useState('Login');
	const [user, setUser] = useState();

	useEffect(() => {
		
		async function getToken() {
			try {
				const [token, user] = await AsyncStorage.multiGet(['@tcc:token', '@tcc:user']);

				if(!token || !user) return;

				setInitialRouteName('App');

				setUser(JSON.parse(user[1]));

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
