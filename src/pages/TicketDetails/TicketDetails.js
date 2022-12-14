import { SafeAreaView, Text, ScrollView, View, TouchableOpacity, StyleSheet } from 'react-native'
import { commonStyles } from '../../styles/CommonStyles.js'
import { API } from '../../services/api'
import { format } from 'date-fns'
import Icon from '@expo/vector-icons/MaterialIcons'

export default function TicketDetails({ navigation, route }) {

    const { debt } = route.params

    const cashback = debt.amount * 0.1
    const currentDate = format(new Date(), 'dd/MM/yyyy HH:mm')

    function navigationToBarCode() {
        navigation.navigate('BarCode')
    }

    function addInvoice() {
        fetch(API + '/invoices',
            {
                body: JSON.stringify({
                    recipient: debt.recipient,
                    amount: debt.amount,
                    date: currentDate,
                    code: debt.code,
                    user_id: debt.user_id,
                    cashback: cashback.toFixed(2)
                }),
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(() => {
                alert('Boleto pago com sucesso')
                navigation.navigate('BarCode')
            })
            .catch(() => alert('Houve um problema ao tentar pagar o boleto'))
    }

    return (
        <SafeAreaView style={commonStyles.container}>
            <View style={commonStyles.containerTitle}>
                <Icon style={commonStyles.iconTitle} name="info-outline" color='#1C6758' size={36} />
                <Text style={{ ...commonStyles.title, fontSize: 24 }}>Detalhes do Boleto</Text>
            </View>
            <ScrollView>
                <View style={styles.card} >
                    <View>
                        <Text style={styles.cardTextTitle}>Para</Text>
                        <Text style={styles.cardTextInfo}>{debt.recipient}</Text>
                    </View>
                    <View>
                        <Text style={styles.cardTextTitle}>Valor</Text>
                        <Text style={styles.cardTextInfo}>{debt.amount}</Text>
                    </View>
                    <View>
                        <Text style={styles.cardTextTitle}>C??digo do boleto</Text>
                        <Text style={styles.cardTextInfo}>{debt.code}</Text>
                    </View>
                    <View>
                        <Text style={styles.cardTextTitle}>Cashback</Text>
                        <Text style={styles.cardTextInfo}>R$ {cashback.toFixed(2)}</Text>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity
                style={{ ...commonStyles.button, alignSelf: 'center', flexDirection: 'row' }}
                onPress={addInvoice}
            >
                <Text style={commonStyles.buttonText}>Pagar</Text>
                <Icon name="attach-money" color='#D6CDA4' size={24} />
            </TouchableOpacity>
            <TouchableOpacity
                style={{ ...commonStyles.button, alignSelf: 'center', flexDirection: 'row' }}
                onPress={navigationToBarCode}
            >
                <Text style={commonStyles.buttonText}>Cancelar</Text>
                <Icon name="cancel" color='#D6CDA4' size={24} />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    card: {
        borderColor: '#D6CDA4',
        borderWidth: 5,
        borderRadius: 20,
        backgroundColor: '#FFF',
        width: '90%',
        alignSelf: 'center',
        height: 300,
        margin: 10,
        padding: 15,
        justifyContent: 'space-around'
    },
    cardTextInfo: {
        fontSize: 18,
        color: '#3D8361',
        fontWeight: 'bold'
    },
    cardTextTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1C6758'
    }
})