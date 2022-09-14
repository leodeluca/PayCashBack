import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEF2E6'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#1C6758',
        marginVertical: 20,
        alignSelf: 'center'
    },
    button: {
        height: 50,
        width: '50%',
        borderRadius: 10,
        backgroundColor: '#3D8361',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
        marginTop: 10
    },
    buttonText: {
        color: '#D6CDA4',
        fontSize: 14,
        fontWeight: 'bold'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%'
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        backgroundColor: '#D6CDA4',
        height: 50,
        width: '90%',
        // borderColor: '#3D8361',
        // borderWidth: 1,
        // borderRadius: 5,
        color: '#3D8361',
        marginVertical: 10,
        padding: 10
    },
    inputLabel: {
        alignSelf: 'flex-start',
        marginLeft: 20,
        marginTop: 5,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#3D8361'
    }
});