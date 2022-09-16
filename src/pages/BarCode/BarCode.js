import { SafeAreaView, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useState, useEffect } from 'react';
import { commonStyles } from '../../styles/CommonStyles.js'
import { API } from '../../services/api'
import { userId } from '../Account/Account'

export default function BarCode({ navigation }) {

    const [hasPermission, setHasPermission] = useState(false)
    const [scanned, setScanned] = useState(false)
    const [userData, setUserData] = useState([])

    const getPermission = async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted' ? true : false)
    }

    useEffect(() => {
        console.log(userId)
        fetch(API + '/users?id=' + userId)
            .then(async (response) => {
                const data = await response.json()
                setUserData(data)
                console.log(userData[0].fullname)
            })
            .catch(() => console.log('Houve um erro ao buscar os dados do usuário.'))
    }, [])

    useEffect(() => {
        getPermission()
    }, [])

    function getResult({ data }) {
        setScanned(true)
        console.log(data)

        fetch(API + '/debts?id=' + data)
            .then(async (response) => {
                const data = await response.json()
                if (data.length === 1) {
                    //console.log(data)
                    // setDebt(data)
                    navigation.navigate('TicketDetails', {
                        debt: {
                            amount: data[0].amount,
                            code: data[0].id,
                            recipient: data[0].recipient,
                            user_id: userId
                        }
                    })
                } else {
                    alert('Código inválido.')
                }
            })
            .catch(() => alert('Houve um erro ao tentar escanear. Tente novamente.'))
    }

    function openCamera() {
        setScanned(false)
        getPermission()
    }

    return (
        <SafeAreaView style={{ ...commonStyles.container, alignItems: 'center' }}>
            {/* <Text style={{ ...commonStyles.title, fontSize: 22 }} numberOfLines={1} ellipsizeMode={'tail'}>Olá, {userData[0].fullname}</Text> */}
            <Text style={{ ...commonStyles.title, fontSize: 22 }} numberOfLines={1} ellipsizeMode={'tail'}>Olá, User</Text>
            <ScrollView>
                {
                    hasPermission === false && <Text style={commonStyles.infoText}>Permissão para câmera negada</Text>
                }
                {
                    (hasPermission === true && scanned === false) &&
                    <BarCodeScanner
                        onBarCodeScanned={getResult}
                        style={{
                            width: Dimensions.get('screen').width * 0.8,
                            height: Dimensions.get('screen').height * 0.6,
                        }}
                        barCodeTypes={['code39']}
                    />
                }
                <TouchableOpacity
                    style={{ ...commonStyles.button, alignSelf: 'center' }}
                    onPress={openCamera}
                >
                    <Text style={commonStyles.buttonText}>Escanear Boleto</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}