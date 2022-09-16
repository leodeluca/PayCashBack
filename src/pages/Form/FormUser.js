import { SafeAreaView, Text, StatusBar, ScrollView, View, TextInput, TouchableOpacity } from 'react-native'
import { commonStyles } from '../../styles/CommonStyles.js'
import { useState, useEffect } from 'react'
import { API } from '../../services/api'

export default function FormUser({ navigation }) {

    const [fullname, setFullname] = useState('')
    const [contact, setContact] = useState('')
    const [email, setEmail] = useState('')
    const [numberRg, setNumberRg] = useState('')
    const [cpf, setCpf] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        if (cpf.length === 11) {
            fetch(API + '/users?cpf=' + cpf)
                .then(async (response) => {
                    const data = await response.json()
                    if (data.length === 1) {
                        alert('Usuário já cadastrado. Digite CPF e senha para logar.')
                        navigation.navigate('Login')
                        setCpf('')
                    }
                })
                .catch(() => alert('Houve um erro ao verificar CPF existente.'))
        }
    }, [cpf])

    function navigateToHome() {
        navigation.navigate('Home')
    }

    function navigateToFormAddress() {
        if (!fullname || (fullname.length < 8 && fullname.length >= 120)) {
            alert('O preenchimento do nome completo é obrigatório e deve conter entre 8 e 120 letras.')
        } else if (!contact || contact.length === 0) {
            alert('O preenchimento do telefone é obrigatório.')
        } else if (!email || email.length === 0) {
            alert('O preenchimento do email é obrigatório.')
        } else if (!numberRg || numberRg.length === 0) {
            alert('O preenchimento do número do RG é obrigatório.')
        } else if (!cpf || cpf.length === 0) {
            alert('O preenchimento do CPF é obrigatório.')
        } else if (!password || (password.length < 8 && password.length >= 16)) {
            alert('O preenchimento da senha é obrigatório e deve conter entre 8 e 16 caracteres.')
        } else {
            navigation.navigate('FormAddress', {
                user: {
                    fullname: fullname,
                    contact: contact,
                    email: email,
                    number_rg: numberRg,
                    cpf: cpf,
                    password: password,
                }
            })
        }
    }

    return (
        <SafeAreaView style={commonStyles.container}>
            <StatusBar backgroundColor='#1C6758' />
            <Text style={{ ...commonStyles.title, fontSize: 24 }}>Nova Conta</Text>
            <ScrollView>
                <View style={commonStyles.inputContainer}>
                    <Text style={commonStyles.inputLabel}>Nome Completo: *</Text>
                    <TextInput
                        style={commonStyles.input}
                        placeholderTextColor='#3D8361'
                        selectionColor='#3D8361'
                        maxLength={120} // min: 8
                        value={fullname}
                        onChangeText={setFullname}
                        autoFocus
                    />
                    <Text style={commonStyles.inputLabel}>Telefone: *</Text>
                    <TextInput
                        style={commonStyles.input}
                        placeholderTextColor='#3D8361'
                        selectionColor='#3D8361'
                        keyboardType='number-pad'
                        value={contact}
                        onChangeText={setContact}
                    />
                    <Text style={commonStyles.inputLabel}>E-mail: *</Text>
                    <TextInput
                        style={commonStyles.input}
                        placeholderTextColor='#3D8361'
                        selectionColor='#3D8361'
                        keyboardType='email-address'
                        autoCapitalize='none'
                        value={email}
                        onChangeText={setEmail}
                    />
                    <Text style={commonStyles.inputLabel}>Número do RG: *</Text>
                    <TextInput
                        style={commonStyles.input}
                        placeholderTextColor='#3D8361'
                        selectionColor='#3D8361'
                        keyboardType='number-pad'
                        value={numberRg}
                        onChangeText={setNumberRg}
                    />
                    <Text style={commonStyles.inputLabel}>CPF: *</Text>
                    <TextInput
                        style={commonStyles.input}
                        placeholderTextColor='#3D8361'
                        selectionColor='#3D8361'
                        keyboardType='number-pad'
                        value={cpf}
                        onChangeText={setCpf}
                    />
                    <Text style={commonStyles.inputLabel}>Senha: *</Text>
                    <TextInput
                        style={commonStyles.input}
                        placeholderTextColor='#3D8361'
                        selectionColor='#3D8361'
                        secureTextEntry={true}
                        autoCapitalize='none'
                        maxLength={16}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <View style={commonStyles.buttonContainer}>
                        <TouchableOpacity
                            style={{ ...commonStyles.button, width: '40%' }}
                            onPress={navigateToHome}
                        >
                            <Text style={commonStyles.buttonText}>Voltar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ ...commonStyles.button, width: '40%' }}
                            onPress={navigateToFormAddress}
                        >
                            <Text style={commonStyles.buttonText}>Continuar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
