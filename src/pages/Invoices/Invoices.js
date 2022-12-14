import { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, Text, ScrollView, View, TextInput, TouchableOpacity } from 'react-native'
import { commonStyles } from '../../styles/CommonStyles.js'
import { API } from '../../services/api'
import { useIsFocused } from '@react-navigation/native'
import { userId } from '../Account/Account'
import Icon from '@expo/vector-icons/MaterialIcons'

export default function Invoices() {

    const screenFocus = useIsFocused()

    const [invoices, setInvoices] = useState([])
    const [searchText, setSearchText] = useState('')

    function getInvoices() {
        fetch(API + '/invoices?user_id=' + userId + '&q=' + searchText)
            .then(async (response) => {
                const data = await response.json()
                setInvoices(data)
            })
            .catch(() => console.log('Houve um erro ao tentar listar os boletos'))
    }

    function searchInvoice() {
        getInvoices()
    }

    useEffect(() => {
        if (screenFocus === true) {
            getInvoices()
        }
    }, [screenFocus])

    return (
        <SafeAreaView style={commonStyles.container}>
            <View style={commonStyles.containerTitle}>
                <Icon style={commonStyles.iconTitle} name="payments" color='#1C6758' size={36} />
                <Text style={{ ...commonStyles.title, fontSize: 24 }}>Boletos Pagos</Text>
            </View>
            <View style={styles.searchContainer}>
                <TextInput
                    style={{ ...commonStyles.input, ...styles.inputSearch }}
                    placeholder='Pesquisar...'
                    placeholderTextColor='#3D8361'
                    selectionColor='#3D8361'
                    autoCapitalize='none'
                    value={searchText}
                    onChangeText={setSearchText}
                />
                <TouchableOpacity style={styles.buttonSearch} onPress={searchInvoice}>
                    <Icon
                        name='search'
                        size={32}
                        color='#D6CDA4'
                    />
                </TouchableOpacity>
            </View>
            <ScrollView>
                {
                    invoices.length === 0 &&
                    <Text style={{ ...styles.cardTextHeader, marginLeft: 20 }}>N??o h?? boletos pagos no momento</Text>
                }
                {
                    invoices.length !== 0 &&
                    invoices.map((invoice) => (
                        <View style={styles.card} key={invoice.id}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.cardTextHeader}>{(invoice.date).slice(0, 10)}</Text>
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
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    inputSearch: {
        width: '80%',
        borderRadius: 10
    },
    buttonSearch: {
        width: 50,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#3D8361',
        justifyContent: 'center',
        alignItems: 'center'
    }
})