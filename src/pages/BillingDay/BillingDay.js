import { SafeAreaView, Text, StatusBar, ScrollView, View, TouchableOpacity, StyleSheet } from 'react-native'
import { commonStyles } from '../../styles/CommonStyles.js'
import { useState } from "react"
import { Calendar } from "react-native-calendars"
import { format } from 'date-fns'

export default function BillingDay({ navigation, route }) {

    const { user } = route.params

    const currentDate = format(new Date(), 'yyyy-MM-dd')

    const [date, setDate] = useState(currentDate)

    function navigateToFormAddress() {
        navigation.navigate('FormAddress', { user: user })
    }

    function navigateToTerms() {
        navigation.navigate('Terms', {
            user: {
                fullname: user.fullname,
                contact: user.contact,
                email: user.email,
                number_rg: user.number_rg,
                cpf: user.cpf,
                password: user.password,
                address: {
                    cep: user.address.cep,
                    street: user.address.street,
                    city: user.address.city,
                    state: user.address.state,
                    region: user.address.region,
                    number: user.address.number,
                    complement: user.address.complement
                },
                billing_day: date
            }
        })
    }

    return (
        <SafeAreaView style={commonStyles.container}>
            <StatusBar backgroundColor='#1C6758' />
            <Text style={{ ...commonStyles.title, fontSize: 24 }}>Qual da data da cobrança ?</Text>
            <ScrollView>
                <View style={commonStyles.inputContainer}>
                    <Calendar
                        style={styles.calendar}
                        onDayPress={(currentDate) => setDate(currentDate.dateString)}
                        minDate={currentDate}
                        markedDates={{
                            [date]: {
                                selected: true,
                                marked: true,
                                selectedColor: '#3D8361',
                                dotColor: '#D6CDA4'
                            }
                        }}
                        theme={{
                            calendarBackground: '#D6CDA4',
                            selectedDayBackgroundColor: '#FFF',
                            todayTextColor: '#EEF2E6',
                            dayTextColor: '#EEF2E6',
                            arrowColor: '#3D8361',
                            monthTextColor: '#3D8361',
                            textDayFontWeight: '300'
                        }}
                    />
                    <View style={commonStyles.buttonContainer}>
                        <TouchableOpacity
                            style={{ ...commonStyles.button, width: '40%' }}
                            onPress={navigateToFormAddress}
                        >
                            <Text style={commonStyles.buttonText}>Voltar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ ...commonStyles.button, width: '40%' }}
                            onPress={navigateToTerms}
                        >
                            <Text style={commonStyles.buttonText}>Continuar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    calendar: {
        margin: 30,
        marginBottom: 50,
        borderRadius: 10
    }
})
