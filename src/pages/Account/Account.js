import { useState, useEffect } from 'react'
import { SafeAreaView, Text, ScrollView, View, TouchableOpacity, Alert } from 'react-native'
import { commonStyles } from '../../styles/CommonStyles.js'
import { API } from '../../services/api'
import { useIsFocused } from '@react-navigation/native'
import Icon from '@expo/vector-icons/MaterialIcons'

export let userId = ''

export default function Account({ navigation, route }) {

  const { id } = route.params
  userId = id

  const screenFocus = useIsFocused()
  const [userData, setUserData] = useState([])

  function navigateToHome() {
    navigation.navigate('Home')
  }

  function navigateToEditAccount() {
    navigation.navigate('EditAccount', {
      user: {
        id: userData[0].id,
        email: userData[0].email,
        password: userData[0].password
      }
    })
  }

  function getUser() {
    fetch(API + '/users?id=' + id)
      .then(async (response) => {
        const data = await response.json()
        setUserData(data)
      })
      .catch(() => console.log('Houve um erro ao buscar os dados do usuário.'))
  }

  function deleteUser() {
    Alert.alert(
      'Excluir',
      'Confirmar exclusão da conta?',
      [
        {
          text: 'Sim',
          onPress: () =>
            fetch(API + '/users/' + id, {
              method: 'DELETE'
            })
              .then(() => {
                alert('Conta excluída com sucesso')
                navigation.navigate('Home')
              })
              .catch(() => alert('Houve um erro ao deletar a conta'))
        },
        {
          text: 'Não',
        }
      ]
    )
  }

  useEffect(() => {
    if (screenFocus === true) {
      getUser()
    }
  }, [screenFocus])

  return (
    <SafeAreaView style={commonStyles.container}>
      <View style={commonStyles.containerTitle}>
        <Icon style={commonStyles.iconTitle} name="person-outline" color='#1C6758' size={36} />
        <Text style={{ ...commonStyles.title, fontSize: 24 }}>Dados da conta</Text>
      </View>
      <ScrollView horizontal>
        {
          userData.length === 0 ?
            <Text style={commonStyles.infoText}>Houve um erro ao buscar os dados da conta.</Text>
            :
            <View>
              <Text
                style={commonStyles.infoText}>
                Nome: {userData[0].fullname}
              </Text>
              <Text
                style={commonStyles.infoText}>
                CPF: {userData[0].cpf.slice(0, 3) + '.' + userData[0].cpf.slice(3, 6) + '.' + userData[0].cpf.slice(6, 9) + '-' + userData[0].cpf.slice(9, 11)}
              </Text>
              <Text
                style={commonStyles.infoText}>
                Telefone: {'(' + userData[0].contact.slice(0, 2) + ')' + ' ' + userData[0].contact.slice(2, 7) + '-' + userData[0].contact.slice(7, 11)}
              </Text>
              <Text
                style={commonStyles.infoText}>
                RG: {userData[0].number_rg}
              </Text>
            </View>
        }
      </ScrollView>
      <View style={{ ...commonStyles.buttonContainer, alignSelf: 'center' }}>
        <TouchableOpacity
          style={{ ...commonStyles.button, width: '45%', flexDirection: 'row' }}
          onPress={navigateToEditAccount}
        >
          <Text style={commonStyles.buttonText}>Alterar senha</Text>
          <Icon name="edit" color='#D6CDA4' size={24} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...commonStyles.button, width: '45%', flexDirection: 'row' }}
          onPress={deleteUser}
        >
          <Text style={commonStyles.buttonText}>Excluir Conta</Text>
          <Icon name="delete" color='#D6CDA4' size={24} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{ ...commonStyles.button, alignSelf: 'center', flexDirection: 'row' }}
        onPress={navigateToHome}
      >
        <Text style={commonStyles.buttonText}>Sair do App</Text>
        <Icon name="logout" color='#D6CDA4' size={24} />
      </TouchableOpacity>
    </SafeAreaView>
  )
}