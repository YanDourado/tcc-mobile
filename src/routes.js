import React, { userState, useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const AppStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

import Login from './pages/Login';
import Home from './pages/Home';

import Cameras from './pages/Cameras';
import Camera from './pages/Camera';

import Alerts from './pages/Alerts';


import Notification from './services/notification';

export default function Routes(props) {

    function App({ navigation, route }) {

        const [user, setUser] = useState();

        useEffect(() => {
            async function getUser() {
                const [token, user] = await AsyncStorage.multiGet(['@tcc:token', '@tcc:user']);
    
                if(!token || !user) return;
    
                setUser(JSON.parse(user[1]));
            }

            getUser();
        }, [])

        return (
            <>
                { user ? <Notification user={user}/> : <></> }
                <Tab.Navigator barStyle={{backgroundColor: "#00A8E8", height: 45}}>
                    <Tab.Screen
                        name="Home"
                        component={Home}
                        options={{
                            tabBarLabel: false,
                            tabBarIcon: ({color}) => (
                                <Feather name="home" size={24} color={color} />
                            ),  
                        }}
                    />
                    <Tab.Screen
                        name="Cameras"
                        component={Cameras}
                        options={{
                            tabBarLabel: false,
                            tabBarIcon: ({color}) => (
                                <Feather name="camera" size={24} color={color} />
                            ),  
                        }}
                    />
                    <Tab.Screen
                        name="Alerts"
                        component={Alerts}
                        options={{
                            tabBarLabel: false,
                            tabBarIcon: ({color}) => (
                                <Feather name="alert-triangle" size={24} color={color} />
                            ),  
                        }}
                    />
                </Tab.Navigator>
            </>
        );
    }

    function Others() {
        return (
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Camera" component={Camera} />
            </AppStack.Navigator>
        );
    }

    return (
        <NavigationContainer>
            <AppStack.Navigator initialRouteName={props.initialRouteName} screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="App" component={App} />
                <AppStack.Screen name="Others" component={Others} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}