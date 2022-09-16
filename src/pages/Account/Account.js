import { useState, useEffect } from 'react';
import { SafeAreaView, Text, ScrollView, View, TouchableOpacity } from 'react-native';
import { commonStyles } from '../../styles/CommonStyles.js'
import { API } from '../../services/api'
import { useIsFocused } from '@react-navigation/native'

export let userId = ''

export default function Account({ navigation, route }) {

  const { id } = route.params
  userId = id

  const screenFocus = useIsFocused()
  const [userData, setUserData] = useState([])

  function navigateToHome() {
    navigation.navigate('Home')
  }

  function getUser() {
    fetch(API + '/users?id=' + id)
      .then(async (response) => {
        const data = await response.json()
        setUserData(data)
      })
      .catch(() => console.log('Houve um erro ao buscar os dados do usuário.'))
  }

  useEffect(() => {
    if (screenFocus === true) {
      getUser()
    }
  }, [screenFocus])

  return (
    <SafeAreaView style={commonStyles.container}>
      <Text style={{ ...commonStyles.title, fontSize: 24 }}>Dados da conta</Text>
      <ScrollView horizontal>
        {
          userData.length === 0 ?
            <Text style={commonStyles.infoText}>Houve um erro ao buscar os dados da conta.</Text>
            :
            <View>
              <Text style={commonStyles.infoText}>Nome: {userData[0].fullname}</Text>
              <Text style={commonStyles.infoText}>CPF: {userData[0].cpf}</Text>
              <Text style={commonStyles.infoText}>Telefone: {userData[0].contact}</Text>
              <Text style={commonStyles.infoText}>RG: {userData[0].number_rg}</Text>
            </View>
        }
      </ScrollView>
      <TouchableOpacity
        style={{ ...commonStyles.button, alignSelf: 'center' }}
        onPress={navigateToHome}
      >
        <Text style={commonStyles.buttonText}>Sair do App</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}