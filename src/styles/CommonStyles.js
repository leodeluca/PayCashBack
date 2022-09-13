import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEF2E6'
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
    input: {
        backgroundColor: '#D6CDA4',
        height: 50,
        width: '90%',
        borderColor: '#3D8361',
        borderWidth: 2,
        borderRadius: 5,
        color: '#3D8361',
        marginVertical: 10,
        padding: 10
    },
});