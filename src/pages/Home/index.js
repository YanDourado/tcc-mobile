import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { AsyncStorage } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native';

import Header from '../../components/Header';

import api from '../../services/api';

import styles from './styles';

export default function Home({ navigation }) {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});
    const [profile, setProfile] = useState({})
    
    async function getProfile() {
        try {
            
            const response = await api.get('/profile');

            setProfile(response.data.profile);

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }
    
    async function getUser() {
        setUser(JSON.parse(await AsyncStorage.getItem('@tcc:user')));
    }

    useFocusEffect(
        React.useCallback(() => {
            getUser();

            getProfile();
        }, [])
      );


    return (
        <>
        <Header />
            <View style={styles.container}>
                { !loading ? (
                    <>
                        <Text style={styles.title}>Bem vindo, {user.name.split(' ')[0]}!</Text>

                        <Text style={styles.description}>Abaixo algumas informações sobre suas câmeras e alertas.</Text>

                        <ScrollView>
                            <View style={styles.widget}>
                                <Text style={styles.widgetTitle}>CÂMERAS </Text>

                                
                                <View style={styles.property}>                            
                                    <Text style={styles.propertyTitle}>QTD. CADASTRADAS: </Text>
                                    <Text style={styles.propertyValue}> {profile.cameras_count} </Text>
                                </View>
                                
                                <View style={styles.property}>                
                                    <Text style={styles.propertyTitle}>ATIVAS: </Text>
                                    <Text style={styles.propertyValue}> {profile.active_cameras_count} </Text>
                                </View>

                                <TouchableOpacity style={styles.detailsButton} onPress={() => navigation.navigate('Cameras')}>
                                    <Text style={styles.detailsButtonText}> Ver lista de câmeras </Text>
                                    <Feather name="arrow-right" size={20} color="#00A8E8"/>                          
                                </TouchableOpacity>                   
                            </View>

                            <View style={styles.widget}>
                                <Text style={styles.widgetTitle}>ALERTAS </Text>

                                
                                <View style={styles.property}>                            
                                    <Text style={styles.propertyTitle}>GERADOS: </Text>
                                    <Text style={styles.propertyValue}> {profile.alerts_count} </Text>
                                </View>
                                
                                <View style={styles.property}>                
                                    <Text style={styles.propertyTitle}>VISUALIZADOS: </Text>
                                    <Text style={styles.propertyValue}> {profile.viewed_alerts_count} </Text>
                                </View>

                                <TouchableOpacity style={styles.detailsButton} onPress={() => navigation.navigate('Alerts')}>
                                    <Text style={styles.detailsButtonText}> Ver lista de alertas </Text>
                                    <Feather name="arrow-right" size={20} color="#00A8E8"/>                          
                                </TouchableOpacity>                   
                            </View>
                        </ScrollView>
                    </>
                ) : <ActivityIndicator size="large" color="#00A8E8" /> }
            </View>
        </>
    )
}