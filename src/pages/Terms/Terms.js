import { SafeAreaView, Text, StatusBar, ScrollView, View, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import { commonStyles } from '../../styles/CommonStyles.js'
import { useState } from "react";
import { API } from '../../services/api'

export default function Terms({ navigation, route }) {

    const { user } = route.params

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    function navigateToBillingDay() {
        navigation.navigate('BillingDay', { user: user })
    }

    function addUser() {
        fetch(API + '/users',
            {
                body: JSON.stringify({
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
                    billing_day: user.billing_day
                }),
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(() => {
                alert('Cadastro realizado com sucesso')
                navigation.navigate('Login')
            })
            .catch(() => alert('Houve um problema ao tentar cadastrar o usuário'))
    }

    return (
        <SafeAreaView style={commonStyles.container}>
            <StatusBar backgroundColor='#1C6758' />
            <Text style={{ ...commonStyles.title, fontSize: 24 }}>Termos de uso</Text>
            <ScrollView>
                <Text style={styles.term}>
                    Proin tincidunt egestas massa, non pellentesque lacus eleifend at.
                    Maecenas non facilisis elit. Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Nam non nisl eget enim volutpat mattis. Donec eget
                    purus faucibus, blandit neque eget, venenatis ante. Sed pretium iaculis urna eget
                    convallis. Vivamus hendrerit nec metus vitae euismod. Suspendisse molestie maximus
                    enim, ac aliquam justo. Etiam nec lacinia mi. In eget interdum ipsum. In hac habitasse
                    platea dictumst. Vestibulum eget elementum felis. Praesent eu massa non tellus vestibulum
                    mattis.
                </Text>
                <Text style={styles.term}>
                    Proin tincidunt egestas massa, non pellentesque lacus eleifend at.
                    Maecenas non facilisis elit. Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Nam non nisl eget enim volutpat mattis. Donec eget
                    purus faucibus, blandit neque eget, venenatis ante. Sed pretium iaculis urna eget
                    convallis. Vivamus hendrerit nec metus vitae euismod. Suspendisse molestie maximus
                    enim, ac aliquam justo. Etiam nec lacinia mi. In eget interdum ipsum. In hac habitasse
                    platea dictumst. Vestibulum eget elementum felis. Praesent eu massa non tellus vestibulum
                    mattis.
                </Text>
                <Text style={styles.term}>
                    Proin tincidunt egestas massa, non pellentesque lacus eleifend at.
                    Maecenas non facilisis elit. Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Nam non nisl eget enim volutpat mattis. Donec eget
                    purus faucibus, blandit neque eget, venenatis ante. Sed pretium iaculis urna eget
                    convallis. Vivamus hendrerit nec metus vitae euismod. Suspendisse molestie maximus
                    enim, ac aliquam justo. Etiam nec lacinia mi. In eget interdum ipsum. In hac habitasse
                    platea dictumst. Vestibulum eget elementum felis. Praesent eu massa non tellus vestibulum
                    mattis.
                </Text>
                <View style={commonStyles.inputContainer}>
                    <View style={styles.switchContainer}>
                        <Switch
                            trackColor={{ false: "#767577", true: "#3D8361" }}
                            thumbColor={isEnabled ? "#D6CDA4" : "#f4f3f4"}
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                        <Text style={styles.switchText}>Aceito os termos</Text>
                    </View>
                    <View style={commonStyles.buttonContainer}>
                        <TouchableOpacity
                            style={{ ...commonStyles.button, width: '40%' }}
                            onPress={navigateToBillingDay}
                        >
                            <Text style={commonStyles.buttonText}>Voltar</Text>
                        </TouchableOpacity>

                        {isEnabled === true ?
                            <TouchableOpacity
                                style={{ ...commonStyles.button, width: '40%' }}
                                onPress={addUser}
                            >
                                <Text style={commonStyles.buttonText}>Finalizar</Text>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity
                                disabled={true}
                                style={{ ...commonStyles.button, width: '40%', opacity: 0.7 }}
                            >
                                <Text style={commonStyles.buttonText}>Finalizar</Text>
                            </TouchableOpacity>
                        }
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    term: {
        fontSize: 16,
        textAlign: 'justify',
        marginHorizontal: 10,
        marginVertical: 10
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        marginBottom: 20
    },
    switchText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1C6758',
        marginLeft: 10
    }
})