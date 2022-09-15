import { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, ScrollView, View } from 'react-native';
import { commonStyles } from '../../styles/CommonStyles.js'
import { API } from '../../services/api'
import { useIsFocused } from '@react-navigation/native'
import { userId } from '../Account/Account'

export default function Invoices() {

    const screenFocus = useIsFocused()

    const [invoices, setInvoices] = useState([])

    function getInvoices() {
        console.log(userId)
        fetch(API + '/invoices?user_id=' + userId)
            .then(async (response) => {
                const data = await response.json()
                setInvoices(data)
                //console.log(data)
            })
            .catch(() => console.log('Houve um erro ao tentar listar os boletos'))
    }

    useEffect(() => {
        if (screenFocus === true) {
            getInvoices()
        }
    }, [screenFocus])

    return (
        <SafeAreaView style={commonStyles.container}>
            <Text style={{ ...commonStyles.title, fontSize: 24 }}>Boletos Pagos</Text>
            <ScrollView>
                {
                    invoices.map((invoice) => (
                        <View style={styles.card} key={invoice.code}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.cardTextHeader}>{(invoice.date).slice(0,10)}</Text>
                                <Text style={styles.cardTextHeader}>R$ {invoice.amount}</Text>
                            </View>
                            <View>
                                <Text style={styles.cardTextFooter} numberOfLines={1} ellipsizeMode={'tail'}>{invoice.recipient}</Text>
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
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
        height: 100,
        margin: 10,
        padding: 15,
        justifyContent: 'space-between'
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cardTextHeader: {
        fontSize: 16,
        color: '#3D8361',
        fontWeight: 'bold'
    },
    cardTextFooter: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1C6758'
    }
})