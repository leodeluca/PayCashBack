import { SafeAreaView, Text, StatusBar, ScrollView, View, TextInput, TouchableOpacity } from 'react-native';
import { commonStyles } from '../../styles/CommonStyles.js'
import { useState } from 'react';
import { Picker } from "@react-native-picker/picker";

export default function FormAddress({ navigation, route }) {

    const { user } = route.params
    console.log(user)

    const [cep, setCep] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [region, setRegion] = useState('')
    const [number, setNumber] = useState('')
    const [complement, setComplement] = useState('')

    function navigateToFormUser() {
        navigation.navigate('FormUser')
    }

    function navigateToBillingDay() {
        if (!cep || cep.length === 0) {
            alert('O preenchimento do CEP é obrigatório.')
        } else if (!street || street.length === 0) {
            alert('O preenchimento da rua é obrigatório.')
        } else if (!city || city.length === 0) {
            alert('O preenchimento da cidade é obrigatório.')
        } else if (!state || state.length === 0) {
            alert('A seleção do estado é obrigatória.')
        } else if (!region || region.length === 0) {
            alert('O preenchimento do bairro é obrigatório.')
        } else if (!number || number.length === 0) {
            alert('O preenchimento do número do imóvel é obrigatório.')
        } else {
            navigation.navigate('BillingDay', {
                user: {
                    fullname: user.fullname,
                    contact: user.contact,
                    email: user.email,
                    number_rg: user.number_rg,
                    cpf: user.cpf,
                    password: user.password,
                    address: {
                        cep: cep,
                        street: street,
                        city: city,
                        state: state,
                        region: region,
                        number: number,
                        complement: complement
                    }
                }
            })
        }
    }

    return (
        <SafeAreaView style={commonStyles.container}>
            <StatusBar backgroundColor='#1C6758' />
            <Text style={{ ...commonStyles.title, fontSize: 24 }}>Endereço</Text>
            <ScrollView>
                <View style={commonStyles.inputContainer}>
                    <Text style={commonStyles.inputLabel}>CEP: *</Text>
                    <TextInput
                        style={commonStyles.input}
                        placeholderTextColor='#3D8361'
                        selectionColor='#3D8361'
                        keyboardType='number-pad'
                        value={cep}
                        onChangeText={setCep}
                        autoFocus
                    />
                    <Text style={commonStyles.inputLabel}>Rua: *</Text>
                    <TextInput
                        style={commonStyles.input}
                        placeholderTextColor='#3D8361'
                        selectionColor='#3D8361'
                        value={street}
                        onChangeText={setStreet}
                    />
                    <Text style={commonStyles.inputLabel}>Cidade: *</Text>
                    <TextInput
                        style={commonStyles.input}
                        placeholderTextColor='#3D8361'
                        selectionColor='#3D8361'
                        value={city}
                        onChangeText={setCity}
                    />
                    <Text style={commonStyles.inputLabel}>Estado: *</Text>
                    <Picker
                        selectedValue={state}
                        onValueChange={(value) => setState(value)}
                        style={commonStyles.input}
                    >
                        <Picker.Item label='Selecione um estado' value='' />
                        <Picker.Item label='Acre' value='AC' />
                        <Picker.Item label='Alagoas' value='AL' />
                        <Picker.Item label='Amapá' value='AP' />
                        <Picker.Item label='Amazonas' value='AM' />
                        <Picker.Item label='Bahia' value='BA' />
                        <Picker.Item label='Ceará' value='CE' />
                        <Picker.Item label='Distrito Federal' value='DF' />
                        <Picker.Item label='Espirito Santo' value='ES' />
                        <Picker.Item label='Goiás' value='GO' />
                        <Picker.Item label='Maranhão' value='MA' />
                        <Picker.Item label='Mato Grosso do Sul' value='MS' />
                        <Picker.Item label='Mato Grosso' value='MT' />
                        <Picker.Item label='Minas Gerais' value='MG' />
                        <Picker.Item label='Pará' value='PA' />
                        <Picker.Item label='Paraíba' value='PB' />
                        <Picker.Item label='Paraná' value='PR' />  
                        <Picker.Item label='Pernambuco' value='PE' /> 
                        <Picker.Item label='Piauí' value='PI' /> 
                        <Picker.Item label='Rio de Janeiro' value='RJ' /> 
                        <Picker.Item label='Rio Grande do Norte' value='RN' />              
                        <Picker.Item label='Rio Grande do Sul' value='RS' /> 
                        <Picker.Item label='Rondônia' value='RO' /> 
                        <Picker.Item label='Roraima' value='RR' />
                        <Picker.Item label='Santa Catarina' value='SC' />
                        <Picker.Item label='São Paulo' value='SP' />
                        <Picker.Item label='Sergipe' value='SE' />
                        <Picker.Item label='Tocantins' value='TO' />
                    </Picker>
                    <Text style={commonStyles.inputLabel}>Bairro: *</Text>
                    <TextInput
                        style={commonStyles.input}
                        placeholderTextColor='#3D8361'
                        selectionColor='#3D8361'
                        value={region}
                        onChangeText={setRegion}
                    />
                    <Text style={commonStyles.inputLabel}>Número do imóvel: *</Text>
                    <TextInput
                        style={commonStyles.input}
                        placeholderTextColor='#3D8361'
                        selectionColor='#3D8361'
                        keyboardType='number-pad'
                        value={number}
                        onChangeText={setNumber}
                    />
                    <Text style={commonStyles.inputLabel}>Completo: </Text>
                    <TextInput
                        style={commonStyles.input}
                        placeholderTextColor='#3D8361'
                        selectionColor='#3D8361'
                        keyboardType='number-pad'
                        value={complement}
                        onChangeText={setComplement}
                    />
                    <View style={commonStyles.buttonContainer}>
                        <TouchableOpacity
                            style={{ ...commonStyles.button, width: '40%' }}
                            onPress={navigateToFormUser}
                        >
                            <Text style={commonStyles.buttonText}>Voltar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ ...commonStyles.button, width: '40%' }}
                            onPress={navigateToBillingDay}
                        >
                            <Text style={commonStyles.buttonText}>Continuar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}