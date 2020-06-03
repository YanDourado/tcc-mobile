import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { Image } from 'react-native-elements';
import { useFocusEffect } from '@react-navigation/native';
import { View, FlatList, Text, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';

import Header from '../../components/Header';
import Loading from '../../components/Loading';

import api from '../../services/api';
import constants from '../../utils/constants';

import placeholder from '../../assets/placeholder.png';
import styles from './styles';

export default function Câmeras({ navigation }) {

    const [loading, setLoading] = useState(true);
    const [searching, setSearching] = useState(false);
    const [search, setSearch] = useState('');
    const [cameras, setCameras] = useState([]);
    
    async function getCameras() {
        setSearching(true);

        try {
            
            const response = await api.get('/camera', {
                params: { name: search }
            });

            setCameras(response.data.cameras);
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
            setSearching(false);
        }
    }

    function updateCameraList(data) {

        let camerasArray = cameras.slice();

        if(cameras.some(camera => camera.id === data.camera_info.camera_id)) {
            const index = cameras.findIndex(camera => camera.id === data.camera_info.camera_id);

            camerasArray[index] = data;

            setCameras(camerasArray);
        } else {
            camerasArray.unshift(data);

            setCameras(camerasArray);
        }
    }

    useFocusEffect(
        React.useCallback(() => {
            setLoading(true);

            getCameras()
        }, [])
    );

    return (
        <>
        <Header title="Lista de Câmeras"/>

        { loading ? (
            <Loading />
        ) : (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        value={search}
                        onChangeText={text => setSearch(text)}
                        placeholder="Buscar..."
                        style={styles.searchInput}/>

                    { searching ? <Loading size="small" color="#BBB"/> : (
                        <TouchableOpacity onPress={getCameras}>
                            <Feather name="search" size={24} color="#BBB"/>
                        </TouchableOpacity>
                    )}
                </View>
                
                { cameras && cameras.length > 0 ? (
                    <FlatList
                        keyExtractor={ camera => String(camera.id) }
                        showsVerticalScrollIndicator={false}
                        // onEndReached ={console.log()}
                        onEndReachedThreshold={0.1}
                        style={styles.cameraList}
                        data={cameras}
                        renderItem={({ item: camera }) => (
    
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Others', { screen: 'Camera', params: { camera, updateCameraList } }) }
                                style={styles.camera}>
                                <View style={[styles.cameraStatus, { backgroundColor: camera.status ? 'green' : 'red' }]}/>
                                <Image
                                    containerStyle={styles.cameraThumb}
                                    source={camera.camera_info.thumbnail ? {uri: `${constants.HOST}/${camera.camera_info.thumbnail}`} : placeholder}
                                    style={{width: 80, height: '100%'}}
                                    PlaceholderContent={<ActivityIndicator />}/>
    
                                <View style={{flex: 1, paddingVertical: 15}}>
                                    <View style={[styles.cameraInfo, { paddingTop: 0 }]}>
                                        <Text style={styles.propertyTitle}>NOME: </Text>
                                        <Text style={styles.propertyValue}>{camera.camera_info.name ? camera.camera_info.name : 'SEM NOME'}</Text>
                                    </View>
    
                                    <View style={styles.cameraInfo}>
                                        <Text style={styles.propertyTitle}>ENDEREÇO: </Text>
                                        <Text style={styles.propertyValue}>
                                            {camera.camera_info.address ? 
                                                    camera.camera_info.address + ' Nº ' +  camera.camera_info.address_number : 'SEM ENDEREÇO'}
                                        </Text>
                                    </View>
                                </View>
    
                                <Feather name="arrow-right" size={22} color="#737380" style={{marginRight: 10}}/>  
                            </TouchableOpacity>
                    )} />
                ) : (
                    <View style={[styles.container, { justifyContent: 'center', alignItems: 'center'}]}>
                        <Text>Nenhum câmera encontrada</Text>
                    </View>
                ) }

                <TouchableOpacity
                    onPress={() => navigation.navigate('Others', { screen: 'Camera', params: { updateCameraList } }) }
                    style={styles.addButton}>
                    <Feather name="plus" size={32} color="#FFF" />  
                </TouchableOpacity>
            </View>
        ) }
        </>
    );
};