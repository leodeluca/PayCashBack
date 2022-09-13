import { SafeAreaView, StyleSheet, Text, StatusBar } from 'react-native';

export default function FormAddress() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <Text>FormAddress</Text>
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