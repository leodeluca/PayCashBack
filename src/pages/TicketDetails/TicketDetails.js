import { useState, useEffect } from 'react';
import { SafeAreaView, Text, ScrollView, View, TouchableOpacity } from 'react-native';
import { commonStyles } from '../../styles/CommonStyles.js'
import { API } from '../../services/api'


export default function TicketDetails() {

  return (
    <SafeAreaView style={commonStyles.container}>
      <Text style={{ ...commonStyles.title, fontSize: 24 }}>Detalhes do Boleto</Text>
      <ScrollView horizontal>
        
      </ScrollView>
      <TouchableOpacity
        style={{ ...commonStyles.button, alignSelf: 'center' }}
        //onPress={navigateToHome}
      >
        <Text style={commonStyles.buttonText}>Pagar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ ...commonStyles.button, alignSelf: 'center' }}
        //onPress={navigateToHome}
      >
        <Text style={commonStyles.buttonText}>Cancelar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}