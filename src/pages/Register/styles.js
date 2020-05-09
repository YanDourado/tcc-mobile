import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },
    
    error: {
        fontSize: 16,
        color: 'red',
        marginBottom: 10
    },

    form: {
        width: '100%',
    },

    formDescription: {
        fontSize: 22,
        color: '#737380'
    },

    errorInput: {
        fontSize: 10,
        color: 'red',
        marginTop: 2
    },

    input: {
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderWidth: 0.3,
        borderRadius: 8,
        marginTop: 20,
        fontSize: 20,
        backgroundColor: '#FFF'
    },

    registerButton: {
        height: 55,
        marginTop: 25,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00A8E8'
    },

    registerButtonText: {
        color: '#FFF',
        fontSize: 22,
    },

    loginButton:  {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    loginTextButton: {
        marginHorizontal: 8,
        fontSize: 16,
        color: '#00A8E8'
    }

});

export default styles;