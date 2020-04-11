import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, FlatList, Image, Text, TextInput, TouchableOpacity } from 'react-native';

import Header from '../../components/Header';

import image from '../../assets/bg.jpg';
import styles from './styles';

export default function Câmeras() {
    return (
        <>
        <Header title="Lista de Câmeras"/>
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Buscar..." style={styles.searchInput}/>

                <Feather name="search" size={24} color="#BBB"/>
            </View>

            <FlatList
                keyExtractor={ camera => String(camera) }
                showsVerticalScrollIndicator={false}
                onEndReached ={console.log()}
                onEndReachedThreshold={0.1}
                style={styles.cameraList}
                data={[1, 2, 3]}
                renderItem={({ item: camera }) => (

                    <TouchableOpacity style={styles.camera}>
                        <Image source={image} style={styles.cameraThumb}/>

                        <View style={{flex: 1, paddingVertical: 15}}>
                            <View style={[styles.cameraInfo, { paddingTop: 0 }]}>
                                <Text style={styles.propertyTitle}>NOME: </Text>
                                <Text style={styles.propertyValue}>Câmera porta dos fundos </Text>
                            </View>

                            <View style={styles.cameraInfo}>
                                <Text style={styles.propertyTitle}>ENDEREÇO: </Text>
                                <Text style={styles.propertyValue}>Rua John Speers - Nº 1013 </Text>
                            </View>
                        </View>

                        <Feather name="arrow-right" size={22} color="#737380" style={{marginRight: 10}}/>  
                    </TouchableOpacity>
            )} />

            <TouchableOpacity style={styles.addButton}>
                <Feather name="plus" size={32} color="#FFF" />  
            </TouchableOpacity>
        </View>
        </>
    );
};