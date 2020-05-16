import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { Image } from 'react-native-elements';
import { View, FlatList, Text, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';

import Header from '../../components/Header';
import Loading from '../../components/Loading';

import api from '../../services/api';

import constants from '../../utils/constants'


import styles from './styles';

export default function Câmeras({ navigation }) {

    const [loading, setLoading] = useState(true);
    const [alerts, setAlerts] = useState([]);

    async function getAlerts() {

        setLoading(true)

        try {
            
            const response = await api.get('/alert');

            setAlerts(response.data.alerts);

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    useFocusEffect(
        React.useCallback(() => {
            getAlerts()
        }, [])
    );

    if(loading) return <Loading />

    return (
        <>
            <Header title="Alertas"/>
            <View style={styles.container}>
                { alerts.length > 0 ? (
                    <FlatList
                        keyExtractor={ alert => String(alert.id) }
                        showsVerticalScrollIndicator={false}
                        // onEndReached ={console.log()}
                        onEndReachedThreshold={0.1}
                        style={styles.alertList}
                        data={alerts}
                        renderItem={({ item: alert }) => (

                            <TouchableOpacity
                                onPress={() => console.log(`${constants}/${alert.image_url}`) }
                                style={styles.alert}>
                                <Image
                                    containerStyle={styles.alertThumb}
                                    source={{ uri: `${constants}/${alert.image_url}`}}
                                    style={{width: 120, height: '100%'}}
                                    PlaceholderContent={<ActivityIndicator />}/>

                                <View style={{flex: 1, paddingVertical: 15}}>
                                    <View style={[styles.alertInfo, { paddingTop: 0 }]}>
                                        <Text style={styles.propertyTitle}>DATA: </Text>

                                        <Text style={styles.propertyValue}>
                                            { alert.createdAt }
                                        </Text>
                                    </View>

                                    <View style={styles.alertInfo}>
                                        <Text style={styles.propertyTitle}>CÂMERA: </Text>
                                        <Text style={styles.propertyValue}>{alert.camera.camera_info.name ? alert.camera.camera_info.name : 'SEM NOME'}</Text>
                                    </View>

                                    <View style={styles.alertInfo}>
                                        <Text style={styles.propertyTitle}>ENDEREÇO: </Text>
                                        <Text style={styles.propertyValue}>
                                            {alert.camera.camera_info.address ? 
                                                alert.camera.camera_info.address + ' Nº ' +  alert.camera.camera_info.address_number : 'SEM ENDEREÇO'}
                                        </Text>
                                    </View>
                                </View>

                                {/* <Feather name="arrow-right" size={22} color="#737380" style={{marginRight: 10}}/>   */}
                            </TouchableOpacity>
                    )} />
                ) : (
                    <></>
                ) }
            </View>
        </>
    );
};