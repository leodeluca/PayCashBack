import { SafeAreaView, StyleSheet, Text, StatusBar } from 'react-native';
import { userId } from '../Account/Account'

export default function Invoices() {

    console.log(userId)

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <Text>Invoices</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})