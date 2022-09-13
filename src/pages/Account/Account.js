import { SafeAreaView, StyleSheet, Text, StatusBar } from 'react-native';

export default function Account() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <Text>Account</Text>
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