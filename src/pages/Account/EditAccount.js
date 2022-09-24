import { SafeAreaView, Text, ScrollView, View, TextInput, TouchableOpacity } from 'react-native'
import { commonStyles } from '../../styles/CommonStyles.js'
import Icon from '@expo/vector-icons/MaterialIcons'
import { API } from '../../services/api'
import { useState } from 'react'

export default function EditAccount({ navigation, route }) {

    const { user } = route.params

    const [email, setEmail] = useState(user.email)
    const [password, setPassword] = useState(user.password)

    function navigateToAccount() {
        navigation.navigate('Account', { id: user.id })
    }

    function updateUser() {
        if (!email || email.length === 0) {
            alert('O preenchimento do email é obrigatório.')
        } else if (!password || password.length < 8 || password.length >= 16) {
            alert('O preenchimento da senha é obrigatório e deve conter entre 8 e 16 caracteres.')
        } else {
            fetch(API + '/users/' + user.id, {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
                .then(() => {
                    alert('Dados da conta atualizados com sucesso.')
                    navigation.navigate('Account', { id: user.id })
                })
                .catch(() => alert('Houve um erro ao atualizar os dados da conta.'))
        }
    }

    return (
        <SafeAreaView style={commonStyles.container}>
            <View style={commonStyles.containerTitle}>
                <Icon style={commonStyles.iconTitle} name="edit" color='#1C6758' size={36} />
                <Text style={{ ...commonStyles.title, fontSize: 24 }}>Alterar dados</Text>
            </View>
            <ScrollView>
                <View style={commonStyles.inputContainer}>
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
                </View>
            </ScrollView>
            <View style={{ ...commonStyles.buttonContainer, alignSelf: 'center' }}>
                <TouchableOpacity
                    style={{ ...commonStyles.button, width: '40%', flexDirection: 'row' }}
                    onPress={navigateToAccount}
                >
                    <Icon name="undo" color='#D6CDA4' size={24} />
                    <Text style={commonStyles.buttonText}>Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ ...commonStyles.button, width: '40%', flexDirection: 'row' }}
                    onPress={updateUser}
                >
                    <Text style={commonStyles.buttonText}>Alterar</Text>
                    <Icon name="done" color='#D6CDA4' size={24} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
