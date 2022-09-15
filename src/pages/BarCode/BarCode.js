import { SafeAreaView, Text, ScrollView, Dimensions, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useState, useEffect } from 'react';
import { commonStyles } from '../../styles/CommonStyles.js'
import { API } from '../../services/api'
import { userId } from '../Account/Account'

export default function BarCode({ navigation }) {

    const [hasPermission, setHasPermission] = useState(false)
    const [scanned, setScanned] = useState(false)
    const [debt, setDebt] = useState([])

    const getPermission = async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        // console.log(status)
        setHasPermission(status === 'granted' ? true : false)
    }

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
                    console.log(data.length)
                    setDebt(data)
                    navigation.navigate('TicketDetails')
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
            <Text style={{ ...commonStyles.title, fontSize: 24 }}>Olá 'Nome do Usuário'</Text>
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
                <Button title="Scannear" onPress={openCamera} />
            </ScrollView>
        </SafeAreaView>
    )
}