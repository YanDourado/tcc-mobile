import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 24
    },

    infoContainer: {
        backgroundColor: '#FFF',
        margin: 8,
        marginTop: 40,
        padding: 20,
        borderRadius: 8
    },

    title: {
        fontSize: 22,
        marginBottom: 20,
        fontWeight: 'bold',        
    },

    propertyTitle: {
        fontSize: 14,
        color: '#41414B',
        fontWeight: 'bold',
    },

    propertyValue: {
        marginTop: 8,
        fontSize: 16,
        marginBottom: 16,
        color: '#737380'
    },
});

export default styles;