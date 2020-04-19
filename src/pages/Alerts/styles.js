import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24
    },

    alert: {
        height: 180,
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        borderRadius: 8,
        backgroundColor: '#FFF',
    },

    alertThumb: {
        overflow: 'hidden',
        resizeMode: 'cover',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
    },

    alertInfo: {
        paddingTop: 15,
        paddingHorizontal: 15
    },

    propertyTitle: {
        fontSize: 12,
        color: '#41414B',
        fontWeight: 'bold',
    },

    propertyValue: {
        marginTop: 3,
        fontSize: 14,
        color: '#737380'
    },

    addButton: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 60,
        backgroundColor: '#00A8E8',
    }
});

export default styles;