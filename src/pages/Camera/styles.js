import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    videoContainer: {
        width: '100%',
        height: 300,
        backgroundColor: '#000'
    },

    formContainer: {
        padding: 20,
    },

    formTitle: {
        fontSize: 22,
        color: '#737380',
    },

    inputContainer: {
        marginTop: 10,
    },

    input: {
        fontSize: 18,
        borderWidth: 0.2,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
    },

    inputGroup: {
        flexDirection: 'row'
    },

    errorInput: {
        fontSize: 10,
        color: 'red',
        marginTop: 2
    },

    saveButton: {
        width: '80%',
        height: 55,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00A8E8',
        borderRadius: 10,
        marginTop: 15
    },

    saveTextButton: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default styles;