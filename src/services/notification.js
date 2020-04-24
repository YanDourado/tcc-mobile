import React from 'react';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import { AsyncStorage } from 'react-native';

import api from './api';

export default class Notification extends React.Component {

    
    constructor(props) {
        super(props);

        this.state = {
            notification: {},
            user: props.user
        };
    }

    componentDidMount() {
        this.registerForPushNotificationsAsync();

        // Handle notifications that are received or selected while the app
        // is open. If the app was closed and then opened by tapping the
        // notification (rather than just tapping the app icon to open it),
        // this function will fire on the next tick after the app starts
        // with the notification data.
        this._notificationSubscription = Notifications.addListener(this._handleNotification);
    }

    registerForPushNotificationsAsync = async () => {

        const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
        
        let finalStatus = existingStatus;
        
        if (existingStatus !== 'granted') {
            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            finalStatus = status;
        }

        if (finalStatus !== 'granted') {
        
            alert('Failed to get push token for push notification!');
        
            return;
        }
        
        const token = await Notifications.getExpoPushTokenAsync();

        this.updateToken(token);
        
        this.setState({ expoPushToken: token });

        if (Platform.OS === 'android') {
            Notifications.createChannelAndroidAsync('default', {
                name: 'default',
                sound: true,
                priority: 'max',
                vibrate: [0, 250, 250, 250],
            });
        }
    };

    _handleNotification = notification => {

        console.log(notification)
        // do whatever you want to do with the notification
        this.setState({ notification: notification });
    };

    updateToken = async (token) => {

        if(this.state.user.push_id != undefined) return;

        this.setState({user: {...this.state.user, push_id: token}});
        
        const user = this.state.user;

        
        try {
            const response = await api.put('/user', {
                ...user
            });

            await AsyncStorage.setItem('@tcc:user', JSON.stringify(user));

        } catch (error) {
            
        }
    }

    render() {
        return (
            <></>
        );
    }
}