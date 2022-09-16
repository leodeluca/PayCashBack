import { SafeAreaView, StyleSheet, Text, StatusBar, Image, ScrollView, View, TextInput, TouchableOpacity } from 'react-native';
import { commonStyles } from '../../styles/CommonStyles.js'
import PayImage from '../../../assets/pay-logo.png'
import { useState } from 'react';
import { API } from '../../services/api'

export default function Login({ navigation }) {

    const [cpf, setCpf] = useState('')
    const [password, setPassword] = useState('')

    function navigateToFormUser() {
        navigation.navigate('FormUser')
    }

    function getUser() {
        if (!cpf || cpf.length === 0) {
            alert('O preenchimento do CPF é obrigatório.')
        } else if (!password || password.length === 0) {
            alert('O preenchimento da senha é obrigatório.')
        } else {
            fetch(API + '/users' + '?cpf=' + cpf + '&password=' + password)
                .then(async (response) => {
                    const data = await response.json()
                    if (!data || data.length === 0) {
                        alert('Usuário com CPF e/ou Senha inválidos.')
                    } else {
                        navigation.navigate('AccountNavigator',
                            {
                                screen: 'Account',
                                params: { id: data[0].id },
                            }
                        )
                        setCpf('')
                        setPassword('')
                    }
                })
                .catch(() => alert('Houve um erro ao logar'))
        }
    }

    return (
        <SafeAreaView style={commonStyles.container}>
            <StatusBar backgroundColor='#1C6758' />
            <ScrollView>
                <View style={styles.logo}>
                    <Image
                        source={PayImage}
                        style={styles.image}
                        resizeMode='contain'
                    />
                </View>
                <View style={commonStyles.inputContainer}>
                    <TextInput
                        style={commonStyles.input}
                        placeholder='CPF'
                        placeholderTextColor='#3D8361'
                        selectionColor='#3D8361'
                        keyboardType='number-pad'
                        value={cpf}
                        onChangeText={setCpf}
                        autoFocus
                    />
                    <TextInput
                        style={commonStyles.input}
                        placeholder='Senha'
                        placeholderTextColor='#3D8361'
                        selectionColor='#3D8361'
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity
                        style={commonStyles.button}
                        onPress={getUser}
                    >
                        <Text style={commonStyles.buttonText}>Logar</Text>
                    </TouchableOpacity>
                    <Text
                        style={styles.callToActionText}
                        onPress={navigateToFormUser}
                    >
                        Abrir conta gratuita
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 250,
        width: 250
    },
    callToActionText: {
        color: '#3D8361',
        fontStyle: 'italic',
        fontSize: 16
    }
})