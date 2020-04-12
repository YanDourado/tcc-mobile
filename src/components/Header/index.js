import React, { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Overlay } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import Logo from '../../assets/logo_.png';
import UserPerfil from '../../assets/user.jpg';

import styles from './styles';

export default function Home(props) {

    const navigation = useNavigation();
    const [user, setUser] = useState({});
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {

        async function getUser() {

            const user = JSON.parse(await AsyncStorage.getItem('@tcc:user'));

            setUser(user);
        }

        getUser();

    }, []);

    async function handleLoggout() {

        await removePushToken();

        await AsyncStorage.multiRemove(['@tcc:token', '@tcc:user']);

        setIsVisible(false);

        navigation.navigate('Login');

    }

    async function removePushToken() {
        try {
            
            const response = await api.put('/user', {
                push_id: null
            });

            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                { props.goBack ? (
                    <TouchableOpacity onPress={navigation.goBack} style={styles.goBack}>
                        <Feather name="arrow-left" size={28} color="#000"/>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
                        <Image source={UserPerfil} style={styles.userPerfilButton}/>
                    </TouchableOpacity>
                ) }

                { props.title ? <Text style={styles.title}>{props.title}</Text> : <></>}

                <Image source={Logo} style={styles.logo}/>
            </View>

            <Overlay
                isVisible={isVisible}
                height={350}
                borderRadius={10}>
                <View style={styles.modalContainer}>
                    <Image source={UserPerfil} style={styles.userPerfilModal}/>

                    <Text style={styles.userName}>{user.name}</Text>
                    <Text style={styles.userEmail}>{user.email}</Text>
                </View>

                <View style={styles.groupButton}>
                    <TouchableOpacity style={styles.modalButton} onPress={handleLoggout}>
                        <Text style={styles.modalTextButton}>Sair</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.modalButton} onPress={() => setIsVisible(!isVisible)}>
                        <Text style={styles.modalTextButton}>Fechar</Text>
                    </TouchableOpacity>
                </View>
            </Overlay>

        </View>
    );
}