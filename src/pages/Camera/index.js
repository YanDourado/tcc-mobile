import React, { useState, useEffect } from 'react';
import { CheckBox, Image } from 'react-native-elements'
import { View, Text, TextInput, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';

import Header from '../../components/Header';
import Loading from '../../components/Loading';

import styles from './styles';

import api from '../../services/api';
import constants from '../../utils/constants';

import placeholder from '../../assets/placeholder.png';

export default function Camera({ route, navigation }) {

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [camera, setCamera] = useState({});
    const [errors, setErrors] = useState([]);

    async function validateCamera() {
        try {
            setErrors({});
            setSaving(true);

            const response = await api.get('/camera', {
                params: {...camera}
            });

            const { cameras } = response.data;
            
            if(cameras && cameras.length > 0) {
                
                let cameraInfo = cameras[0].camera_info;

                cameraInfo.status = cameras[0].status;

                setCamera(cameraInfo);

                // route.params.updateCameraList(cameras[0]);

            } else {
                setErrors({...errors, credential: 'Credenciais incorretas.'});
            }

        } catch (error) {
            setErrors({...errors, credential: 'Falhar ao validar credenciais.'});
        } finally {
            setSaving(false);
        }
    }

    async function handleSave() {
        setErrors([]);
        setSaving(true)

        try {
            const response = await api.put('/camera', {
                ...camera
            });

            route.params.updateCameraList(response.data.camera);

        } catch (error) {
            
            const { status } = error.response;

            if(status == 409) {
                const { errors } = error.response.data;

                setErrors(errors);
            }
        } finally {
            setSaving(false)
        }
    }

    
    useEffect(() => {

        const { camera } = route.params

        if(camera) {
            let cameraInfo = camera.camera_info

            cameraInfo.status = camera.status;

            setCamera(cameraInfo);
        }

        setLoading(false);

    }, [])

    if(loading) {
        return <Loading />
    }

    return (
        <>
            <Header title={camera.camera_id ? camera.name : 'Nova Câmera'} goBack={true}/>
            
            { camera.camera_id ? (
                <View style={styles.container}>
                    <View style={styles.videoContainer}>
                        <Image
                            containerStyle={styles.cameraThumb}
                            source={camera.thumbnail ? {uri: `${constants.HOST}/${camera.thumbnail}`} : placeholder}
                            style={{width: '100%', height: '100%'}}
                            PlaceholderContent={<ActivityIndicator />}/>
                    </View>

                    <ScrollView style={styles.formContainer}>
                        <Text style={styles.formTitle}>Informações da câmera</Text>
                        <View style={styles.inputContainer}>
                            <TextInput 
                                value={camera.name ? camera.name : ''}
                                onChangeText={text => setCamera({...camera, name: text})}
                                style={styles.input}
                                placeholder="Nome da câmera"/>

                            <Text style={styles.errorInput}>
                                {errors.name && errors.name[0]}
                            </Text>
                        </View>

                        <View style={styles.inputContainer}>
                            <TextInput 
                                value={camera.description ? camera.description : ''}
                                onChangeText={text => setCamera({...camera, description: text})}
                                style={styles.input}
                                placeholder="Descrição da câmera"/>

                            <Text style={styles.errorInput}></Text>
                        </View>

                        <View style={[styles.inputGroup, styles.inputContainer]}>
                            <TextInput 
                                value={camera.address ? camera.address : ''}
                                onChangeText={text => setCamera({...camera, address: text})}
                                style={[styles.input, { flex: 1, borderBottomRightRadius: 0, borderTopRightRadius: 0} ]}
                                placeholder="Endereço"/>

                            <TextInput 
                                value={camera.address_number ? camera.address_number : ''}
                                onChangeText={text => setCamera({...camera, address_number: text})}
                                style={[styles.input, { width: 100, borderBottomLeftRadius: 0, borderTopLeftRadius: 0, borderLeftWidth: 0 }]}
                                placeholder="Nº"
                                keyboardType={'numeric'}/>
                        </View>

                        <CheckBox
                            containerStyle={{backgroundColor: null, borderWidth: null}}
                            center
                            title='Câmera ativada?'
                            checked={camera.status ? true : false}
                            onPress={() => setCamera({...camera, status: !camera.status})}
                        />

                        <TouchableOpacity 
                            onPress={handleSave}
                            style={styles.saveButton}
                            disabled={saving}>
                            { !saving ? <Text style={styles.saveTextButton}>Salvar</Text> : <Loading size="small" color="#FFF"/> }
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            ) : (
                
                <View style={[styles.container, { justifyContent: 'center' }]}>
                    <Text style={[styles.errorInput, { fontSize: 20, textAlign: 'center'}]}>
                        {errors.credential && errors.credential}
                    </Text>
                    <View style={styles.formContainer}>
                        <Text style={styles.formTitle}>Informações de acesso a câmera</Text>
                        <View style={styles.inputContainer}>
                            <TextInput 
                                value={camera.code ? camera.code : ''}
                                onChangeText={text => setCamera({...camera, code: text})}
                                style={[styles.input, { height: 60 }]}
                                placeholder="Código de acesso"/>
                        </View>

                        <View style={[styles.inputContainer, { marginTop: 30 }]}>
                            <TextInput 
                                value={camera.secret ? camera.secret : ''}
                                onChangeText={text => setCamera({...camera, secret: text})}
                                style={[styles.input, { height: 60 }]}
                                placeholder="Senha de acesso"/>
                        </View>

                        <TouchableOpacity 
                            onPress={validateCamera}
                            style={styles.saveButton}
                            disabled={saving}>
                            { !saving ? <Text style={styles.saveTextButton}>Buscar</Text> : <Loading size="small" color="#FFF"/> }
                        </TouchableOpacity>
                    </View>
                </View>
            ) }

        </>
    );
}