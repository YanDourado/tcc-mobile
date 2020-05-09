import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { AsyncStorage } from 'react-native';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import logo from '../../assets/logo.png';

import styles from './styles';

export default function Register({ navigation }) {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordConfirmation, setPasswordConfirmation] = useState();
    const [errors, setErrors] = useState('');
      
    async function handleRegister() {
        setErrors('');

        try {
            
            const response = await api.post('/register', {
                name, email, password, password_confirmation: passwordConfirmation
            });

            // const { token, user } = response.data;
            
            // await AsyncStorage.multiSet([['@tcc:token', token],
            //                                 ['@tcc:user', JSON.stringify(user)]]);
                    
            navigation.navigate('Login');
        } catch (error) {

            const { status } = error.response;

            if(status == 422) {

                const { data } = error.response;

                setErrors(data);

            } else {

            }
        }   
    }

    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />

            <View style={styles.form}>
                <Text style={styles.formDescription}>Faça seu Cadastro</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    value={name}
                    onChangeText={text => setName(text)}
                />

                { errors.name ? (
                    <Text style={styles.errorInput}>
                        {errors.name && errors.name[0]}
                    </Text>
                ) : <></> }

                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    autoCapitalize = 'none'
                    value={email}
                    onChangeText={text => setEmail(text)}
                />

                { errors.email ? (
                    <Text style={styles.errorInput}>
                        {errors.email && errors.email[0]}
                    </Text>
                ) : <></> }

                <TextInput 
                    style={styles.input}
                    placeholder="Senha"
                    value={password}
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                />

                { errors.password ? (
                    <Text style={styles.errorInput}>
                        {errors.password && errors.password[0]}
                    </Text>
                ) : <></> }

                <TextInput 
                    style={styles.input}
                    placeholder="Confirmação da senha"
                    value={passwordConfirmation}
                    secureTextEntry={true}
                    onChangeText={text => setPasswordConfirmation(text)}
                />

                <TouchableOpacity style={styles.registerButton} onPress={() => handleRegister()}>
                    <Text style={styles.registerButtonText}> Cadastrar </Text>
                    <Feather name="log-in" size={22} color="#FFF"/>                          
                </TouchableOpacity>  

            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.loginButton}>
                <Text>Já possui conta?</Text>
                <Text style={styles.loginTextButton}>Clique aqui</Text>
                <Feather name="arrow-right" size={16} color="#00A8E8"/> 
            </TouchableOpacity>

        </View>
    );
}
