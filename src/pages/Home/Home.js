import { SafeAreaView, StyleSheet, Text, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import { commonStyles } from '../../styles/CommonStyles.js'
import LottieView from 'lottie-react-native';

import PayAnimation from '../../../assets/pay.json'

export default function Home({ navigation }) {

    function navigateToLogin() {
        navigation.navigate('Login')
    }

    function navigateToFormUser() {
        navigation.navigate('FormUser')
    }

    return (
        <SafeAreaView style={commonStyles.container}>
            <StatusBar backgroundColor='#1C6758' />
            <LottieView
                autoPlay
                style={styles.animation}
                source={PayAnimation}
            />
            <TouchableOpacity style={commonStyles.button} onPress={navigateToFormUser}>
                <Text style={commonStyles.buttonText}>Abrir conta gratuita</Text>
            </TouchableOpacity>
            <TouchableOpacity style={commonStyles.button} onPress={navigateToLogin}>
                <Text style={commonStyles.buttonText}>Fazer Login</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    animation: {
        height: Dimensions.get('screen').height * 0.4,
        marginBottom: 20
    }
})