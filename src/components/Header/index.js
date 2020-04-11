import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';


import Logo from '../../assets/logo_.png';
import UserPerfil from '../../assets/user.jpg';

import styles from './styles';

export default function Home(props) {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={Logo} style={styles.logo}/>

                { props.title ? <Text style={styles.title}>{props.title}</Text> : <></>}

                <Image source={UserPerfil} style={styles.userPerfilButton}/>
            </View>
        </View>
    );
}