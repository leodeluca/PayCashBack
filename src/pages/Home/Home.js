import { SafeAreaView, StyleSheet, Text, StatusBar, Dimensions, TouchableOpacity } from 'react-native'
import { commonStyles } from '../../styles/CommonStyles.js'
import LottieView from 'lottie-react-native'
import Icon from '@expo/vector-icons/MaterialIcons'

import PayAnimation from '../../../assets/pay.json'

export default function Home({ navigation }) {

    function navigateToLogin() {
        navigation.navigate('Login')
    }

    function navigateToFormUser() {
        navigation.navigate('FormUser')
    }

    return (
        <SafeAreaView style={{ ...commonStyles.container, ...styles.containerHome }}>
            <StatusBar backgroundColor='#1C6758' />
            <LottieView
                autoPlay
                style={styles.animation}
                source={PayAnimation}
            />
            <TouchableOpacity style={{...commonStyles.button, flexDirection: 'row'}} onPress={navigateToFormUser}>
                <Text style={commonStyles.buttonText}>Abrir conta gratuita</Text>
                <Icon name="add" color='#D6CDA4' size={24} />
            </TouchableOpacity>
            <TouchableOpacity style={{...commonStyles.button, flexDirection: 'row'}} onPress={navigateToLogin}>
                <Text style={commonStyles.buttonText}>Fazer Login</Text>
                <Icon name="login" color='#D6CDA4' size={24} />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    containerHome: {
        justifyContent: 'center',
        alignItems: 'center',
    },  
    animation: {
        height: Dimensions.get('screen').height * 0.4,
        marginBottom: 20
    }
})