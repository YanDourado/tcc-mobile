import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 24
    },

    title: {
        fontSize: 30,
        marginBottom: 15,
        color: '#13131a',
        fontWeight: 'bold'
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380',
        marginBottom: 20
    },

    widget: {
        marginBottom: 16,
        borderRadius: 8,
        backgroundColor: '#FFF',
    },

    widgetTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        paddingHorizontal: 24,
        paddingVertical: 15,
        borderBottomWidth: 0.3
    },

    property: {
        paddingHorizontal: 24
    },

    propertyTitle: {
        fontSize: 14,
        color: '#41414B',
        fontWeight: 'bold',
    },

    propertyValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 16,
        color: '#737380'
    },

    detailsButton: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingVertical: 15,
        borderTopWidth: 0.3,
    },

    detailsButtonText: {
        color: '#00A8E8',
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default styles;