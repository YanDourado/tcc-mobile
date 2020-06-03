import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    helper: {
        marginTop: 20,
        marginHorizontal: 10,
        backgroundColor: '#FFF',
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
    },
    
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 20,     
    },

    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    body: {
        borderTopWidth: .3,
        paddingVertical: 20,
        paddingHorizontal: 15
    },

    bodyText: {
        fontSize: 16,
        textAlign: 'justify'
    }
});


export default styles;