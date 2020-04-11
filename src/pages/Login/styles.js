import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    form: {
        width: '100%',
    },

    formDescription: {
        fontSize: 22,
        color: '#737380',
        marginBottom: 20,
    },

    input: {
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderWidth: 0.3,
        borderRadius: 8,
        marginBottom: 25,
        fontSize: 20
    },

    loginButton: {
        height: 55,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00A8E8'
    },

    loginButtonText: {
        color: '#FFF',
        fontSize: 22,
    }

});

export default styles;