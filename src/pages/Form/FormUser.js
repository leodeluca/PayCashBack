import { SafeAreaView, Text, StatusBar, ScrollView, View, TextInput, TouchableOpacity } from 'react-native';
import { commonStyles } from '../../styles/CommonStyles.js'
import { useState } from 'react';

export default function FormUser({ navigation }) {

    const [fullname, setFullname] = useState('')
    const [contact, setContact] = useState('')
    const [email, setEmail] = useState('')
    const [numberRg, setNumberRg] = useState('')
    const [cpf, setCpf] = useState('')
    const [password, setPassword] = useState('')

    function navigateToHome() {
        navigation.navigate('Home')
    }

    function navigateToFormAddress() {
        //ToDo = validações de inputs
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

    return (
        <SafeAreaView style={commonStyles.container}>
            <StatusBar backgroundColor='#1C6758' />
            <Text style={{...commonStyles.title, fontSize: 24}}>Nova Conta</Text>
            <ScrollView>
                <View style={commonStyles.inputContainer}>
                    <Text style={commonStyles.inputLabel}>Nome Completo: </Text>
                    <TextInput
                        style={commonStyles.input}
                        placeholderTextColor='#3D8361'
                        selectionColor='#3D8361'
                        maxLength={120} // min: 8
                        value={fullname}
                        onChangeText={setFullname}
                        autoFocus
                    />
                    <Text style={commonStyles.inputLabel}>Telefone: </Text>
                    <TextInput
                        style={commonStyles.input}
                        placeholderTextColor='#3D8361'
                        selectionColor='#3D8361'
                        keyboardType='number-pad'
                        value={contact}
                        onChangeText={setContact}
                    />
                    <Text style={commonStyles.inputLabel}>E-mail: </Text>
                    <TextInput
                        style={commonStyles.input}
                        placeholderTextColor='#3D8361'
                        selectionColor='#3D8361'
                        keyboardType='email-address'
                        value={email}
                        onChangeText={setEmail}
                    />
                    <Text style={commonStyles.inputLabel}>Número do RG: </Text>
                    <TextInput
                        style={commonStyles.input}
                        placeholderTextColor='#3D8361'
                        selectionColor='#3D8361'
                        keyboardType='number-pad'
                        value={numberRg}
                        onChangeText={setNumberRg}
                    />
                    <Text style={commonStyles.inputLabel}>CPF: </Text>
                    <TextInput
                        style={commonStyles.input}
                        placeholderTextColor='#3D8361'
                        selectionColor='#3D8361'
                        keyboardType='number-pad'
                        value={cpf}
                        onChangeText={setCpf}
                    />
                    <Text style={commonStyles.inputLabel}>Senha: </Text>
                    <TextInput
                        style={commonStyles.input}
                        placeholderTextColor='#3D8361'
                        selectionColor='#3D8361'
                        secureTextEntry={true}
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
