import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { AsyncStorage } from 'react-native';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import logo from '../../assets/logo.png';

import styles from './styles';

export default function Login({ navigation }) {

    const [email, setEmail] = useState('yan@email.com.br');
    const [password, setPassword] = useState('123456');
      
    async function handleLogin() {
        if(email !== undefined && password !== undefined) {
            try {
                
                const response = await api.post('/login', {
                    email, password
                });

                const { token, user } = response.data;
                
                await AsyncStorage.multiSet([['@tcc:token', token],
                                                ['@tcc:user', JSON.stringify(user)]]);


                                                
                navigation.navigate('App');
            } catch (error) {
                console.log(error);
            }   
        }
    }

    return (
        <View style={styles.container}>
            <Image source={logo} />

            <View style={styles.form}>
                <Text style={styles.formDescription}>Faça seu login</Text>
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />

                <TextInput 
                    style={styles.input}
                    placeholder="Senha"
                    value={password}
                    onChangeText={text => setPassword(text)}
                />

                <TouchableOpacity style={styles.loginButton} onPress={() => handleLogin()}>
                    <Text style={styles.loginButtonText}> Entrar </Text>
                    <Feather name="log-in" size={22} color="#FFF"/>                          
                </TouchableOpacity>  

            </View>

        </View>
    );
}
