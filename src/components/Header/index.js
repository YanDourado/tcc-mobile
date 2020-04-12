import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';


import Logo from '../../assets/logo_.png';
import UserPerfil from '../../assets/user.jpg';

import styles from './styles';

export default function Home(props) {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                { props.goBack ? (
                    <TouchableOpacity onPress={navigation.goBack} style={styles.goBack}>
                        <Feather name="arrow-left" size={28} color="#000"/>
                    </TouchableOpacity>
                ) : (
                    <Image source={UserPerfil} style={styles.userPerfilButton}/>
                ) }

                { props.title ? <Text style={styles.title}>{props.title}</Text> : <></>}

                <Image source={Logo} style={styles.logo}/>
            </View>
        </View>
    );
}