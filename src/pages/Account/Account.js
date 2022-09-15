import { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, ScrollView } from 'react-native';
import { commonStyles } from '../../styles/CommonStyles.js'
import { API } from '../../services/api'

export let userId = '' 

export default function Account({route}) {

    const { id } = route.params
    userId = id
    console.log(userId)
    const [userData, setUserData] = useState([])

    useEffect(() => {
          fetch(API + '/users?id=' + id)
            .then(async (response) => {
              const data = await response.json()
              console.log(data[0].fullname)
              setUserData(data)
              console.log(userData[0].fullname)
            })
            .catch(() => console.log('Houve um erro ao buscar os dados do usuário.'))
      }, [])

    return (
        <SafeAreaView style={commonStyles.container}>
            <Text style={{ ...commonStyles.title, fontSize: 24 }}>Dados da conta</Text>
            <ScrollView>
                <Text>{userData[0].fullname}</Text>
                <Text>{userData[0].cpf}</Text>
                <Text>{userData[0].contact}</Text>
                <Text>{userData[0].number_rg}</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})