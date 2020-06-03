import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { Image } from 'react-native-elements';
import { View, Text, TextInput, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';

import api from '../../services/api';

import constants from '../../utils/constants';

import styles from './styles';


export default function Alert({ route, navigation }) {

    const [alert, setAlert] = useState(route.params.alert);

    async function updateAlert() {
        try {
            
            const response = await api.put('/alert', {
                alert_id: alert.id,
                viewed_at: Date.parse(new Date()) / 1000
            });

            console.log(response.data.alert);

            setAlert(response.data.alert);

        } catch (error) {
            console.log(error.response);        
        }
    }

    useEffect(() => {

        if(alert.viewed_at) return;

        updateAlert();

    }, []);

    return (
        <>
            <Header title="Alerta" goBack={true}/>

            <View styles={styles.container}>
                <Image
                    containerStyle={styles.alertImage}
                    source={{ uri: `${constants.HOST}/${alert.image_url}`}}
                    style={{width: '100%', height: 300}}
                    PlaceholderContent={<ActivityIndicator />}/>
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>Informações da alerta</Text>

                    <Text style={styles.propertyTitle}>CÂMERA: </Text>
                    <Text style={styles.propertyValue}>{alert.camera.camera_info.name} </Text>

                    <Text style={styles.propertyTitle}>ENDEREÇO: </Text>
                    <Text style={styles.propertyValue}>{alert.camera.camera_info.address ? 
                                                        `${alert.camera.camera_info.address} Nº ${alert.camera.camera_info.address_number}` : 'SEM ENDEREÇO' }</Text>

                    <View style={{flexDirection: 'row'}}>
                        <View style={{marginRight: 25}}>
                            <Text style={styles.propertyTitle}>HORÁRIO: </Text>
                            <Text style={styles.propertyValue}>{alert.CreationDateF}</Text>
                        </View>

                        <View>
                            <Text style={styles.propertyTitle}>VISUALIZADO: </Text>
                            <Text style={styles.propertyValue}>{alert.VisualizationDateF}</Text>
                        </View>

                    </View>

                </View>
            </View>
        </>
    );

}