import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        marginBottom: 20,
    },
    
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    logo: {
        width: 60,
        height: 60,
    },

    userPerfilButton: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#737380',
    }
});

export default styles;