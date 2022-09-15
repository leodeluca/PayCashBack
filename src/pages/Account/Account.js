import { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, ScrollView, View, TouchableOpacity } from 'react-native';
import { commonStyles } from '../../styles/CommonStyles.js'
import { API } from '../../services/api'

export let userId = ''

export default function Account({ navigation, route }) {

  const { id } = route.params
  userId = id

  const [userData, setUserData] = useState([])

  function navigateToHome() {
    navigation.navigate('Home')
  }

  useEffect(() => {
    fetch(API + '/users?id=' + id)
      .then(async (response) => {
        const data = await response.json()
        setUserData(data)
      })
      .catch(() => console.log('Houve um erro ao buscar os dados do usuário.'))
  }, [])

  return (
    <SafeAreaView style={commonStyles.container}>
      <Text style={{ ...commonStyles.title, fontSize: 24 }}>Dados da conta</Text>
      <ScrollView horizontal>
        <View>
          <Text style={styles.infoText}>Nome: {userData[0].fullname}</Text>
          <Text style={styles.infoText}>CPF: {userData[0].cpf}</Text>
          <Text style={styles.infoText}>Telefone: {userData[0].contact}</Text>
          <Text style={styles.infoText}>RG: {userData[0].number_rg}</Text>
        </View>
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

const styles = StyleSheet.create({
  infoText: {
    fontSize: 20,
    marginVertical: 5,
    marginHorizontal: 20,
    color: '#3D8361',
    fontWeight: 'bold'
  }
})