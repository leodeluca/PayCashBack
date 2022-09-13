import { SafeAreaView, StyleSheet, Text, StatusBar } from 'react-native';

export default function Terms() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <Text>Terms</Text>
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