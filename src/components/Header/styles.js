import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        marginBottom: 16,
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
    },

    goBack: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    userPerfilModal: {
        width: 90,
        height: 90,
        borderRadius: 90,
    },

    userName: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 50
    },

    groupButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 20
    },

    modalButton: {
        width: 100,
        alignItems: 'center',
        borderWidth: 0.4,
        paddingVertical: 10,
    },

    modalTextButton: {
        color: '#737380',
        fontWeight: 'bold'
    }
});

export default styles;