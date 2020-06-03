import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import Header from '../../components/Header';
import { Image } from 'react-native-elements';
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';

import styles from './styles';

export default function Helper() {

    let helpersArray = {
                            'menu': false,
                            'initial_page': false,
                            'list_cameras': false,
                            'register_camera': false,
                            'list_alerts': false,
                        }

    const [helpers, setHelpers] = useState(helpersArray);


    return (
        <>
            <Header title="Ajuda"/>

            <ScrollView style={styles.container}>

                <View style={styles.helper}>
                    <View>
                        <TouchableOpacity
                            style={styles.title}
                            onPress={() => setHelpers({...helpersArray, 'menu': !helpers.menu}) }>
                            
                            <Text style={styles.titleText}>Menu</Text>

                            <Feather name="chevron-down" size={20} color="#737380"/>
                        </TouchableOpacity>
                    </View>

                    { helpers['menu'] ? (
                        <View style={styles.body}>
                            <Text style={styles.bodyText}>Através do menu principal (localizado na parte inferior da tela) você poderá navegar pelas principais telas do aplicativo.</Text>
                            <Text style={{...styles.bodyText,  marginVertical: 10 }}>Sendo elas:</Text>

                            <Text style={{...styles.bodyText, marginLeft: 10 }}>Página principal (Home)</Text>
                            <Text style={{...styles.bodyText, marginLeft: 10 }}>Lista de câmeras</Text>
                            <Text style={{...styles.bodyText, marginLeft: 10 }}>Lista de alertas</Text>
                            <Text style={{...styles.bodyText, marginLeft: 10 }}>Ajuda (tela atual)</Text>

                            <Image
                                containerStyle={{textAlign: 'center', marginTop: 20,}}
                                source={require('../../assets/helpers/menu.jpg')}
                                style={{width: '100%', height: 45}}
                                PlaceholderContent={<ActivityIndicator />}/>
                        </View>
                    ) : (<></>) }
                </View>

                <View style={styles.helper}>
                    <View>
                        <TouchableOpacity
                            style={styles.title}
                            onPress={() => setHelpers({...helpersArray, 'initial_page': !helpers.initial_page}) }>
                            
                            <Text style={styles.titleText}>Tela inicial</Text>

                            <Feather name="chevron-down" size={20} color="#737380"/>
                        </TouchableOpacity>
                    </View>

                    { helpers['initial_page'] ? (
                        <View style={styles.body}>
                            <Text style={styles.bodyText}>Na tela inicial você encontrá um breve resumo das informações referentes a suas câmeras cadastradas e alertas de detecção de humanos recebidos.</Text>

                            <Image
                                containerStyle={{textAlign: 'center', marginTop: 20, alignSelf: 'center'}}
                                source={require('../../assets/helpers/home.jpg')}
                                style={{width: 220, height: 350}}
                                PlaceholderContent={<ActivityIndicator />}/>
                        </View>
                    ) : (<></>) }
                </View>

                <View style={styles.helper}>
                    <View>
                        <TouchableOpacity
                            style={styles.title}
                            onPress={() => setHelpers({...helpersArray, 'list_cameras': !helpers.list_cameras}) }>
                            
                            <Text style={styles.titleText}>Tela lista de câmeras</Text>

                            <Feather name="chevron-down" size={20} color="#737380"/>
                        </TouchableOpacity>
                    </View>

                    { helpers['list_cameras'] ? (
                        <View style={styles.body}>
                            <Text style={styles.bodyText}>Na tela de lista de câmeras será exibida todas as câmeras que você possui cadastrar dentro da plataforma, você poderá editar ad informações referente a câmera clicando sobre o item da lista. Além disso você também poderá filtrar as câmeras através do nome utilizando o campo de texto logo acima da lista.</Text>


                            <Text style={styles.bodyText}>Na parte inferior direita ficará o botão que redirecionará para a tela de cadastro de uma nova câmera</Text>

                            <Image
                                containerStyle={{textAlign: 'center', marginTop: 20, alignSelf: 'center'}}
                                source={require('../../assets/helpers/list_cameras.jpg')}
                                style={{width: 180, height: 360}}
                                PlaceholderContent={<ActivityIndicator />}/>
                        </View>
                    ) : (<></>) }
                </View>

                <View style={styles.helper}>
                    <View>
                        <TouchableOpacity
                            style={styles.title}
                            onPress={() => setHelpers({...helpersArray, 'register_camera': !helpers.register_camera}) }>
                            
                            <Text style={styles.titleText}>Tela cadastro de câmera</Text>

                            <Feather name="chevron-down" size={20} color="#737380"/>
                        </TouchableOpacity>
                    </View>

                    { helpers['register_camera'] ? (
                        <View style={styles.body}>
                            <Text style={styles.bodyText}>Ao abrir a tela de cadastro de uma nova câmera, você deverá informar as credenciais da câmera (código e senha), que poderão ser encontrados na caixa da câmera.</Text>

                            <Image
                                containerStyle={{textAlign: 'center', marginTop: 20, alignSelf: 'center'}}
                                source={require('../../assets/helpers/camera_register_1.jpg')}
                                style={{width: 180, height: 340}}
                                PlaceholderContent={<ActivityIndicator />}/>

                            <Text style={{...styles.bodyText, marginTop: 10}}>Após o envio das credenciais e as mesmas estiverem corretas, será exibido novos campos onde você poderá preencher as informações referentes a câmera, como endereço e a descrição (Ex: Câmera porta dos fundos).</Text>

                            <Image
                                containerStyle={{textAlign: 'center', marginTop: 20, alignSelf: 'center'}}
                                source={require('../../assets/helpers/camera_register_2.jpg')}
                                style={{width: 180, height: 340}}
                                PlaceholderContent={<ActivityIndicator />}/>
                            
                        </View>
                    ) : (<></>) }
                </View>

            </ScrollView>
        </>
    );
}