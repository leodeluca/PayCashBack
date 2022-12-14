import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from '@expo/vector-icons/MaterialIcons'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
const BarCodeStack = createStackNavigator()
const AccountStack = createStackNavigator()

import Home from './src/pages/Home/Home'
import Login from './src/pages/Login/Login'
import FormUser from './src/pages/Form/FormUser'
import FormAddress from './src/pages/Form/FormAddress'
import BillingDay from './src/pages/BillingDay/BillingDay'
import Terms from './src/pages/Terms/Terms'
import Account from './src/pages/Account/Account'
import Invoices from './src/pages/Invoices/Invoices'
import BarCode from './src/pages/BarCode/BarCode'
import TicketDetails from './src/pages/TicketDetails/TicketDetails'
import EditAccount from './src/pages/Account/EditAccount'

function AccountNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="AccountStackNavigator"
      screenOptions={{
        tabBarActiveTintColor: '#1C6758',
        tabBarInactiveTintColor: '#D6CDA4',
      }}
    >
      <Tab.Screen
        name='AccountStackNavigator'
        component={AccountStackNavigator}
        options={{
          tabBarLabel: 'Dados da conta',
          tabBarIcon: ({ color }) => (
            <Icon name="account-circle" color={color} size={32} />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name='Invoices'
        component={Invoices}
        options={{
          tabBarLabel: 'Boletos Pagos',
          tabBarIcon: ({ color }) => (
            <Icon name="receipt-long" color={color} size={32} />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name='BarCodeNavigator'
        component={BarCodeNavigator}
        options={{
          tabBarLabel: 'Escanear Novo Boleto',
          tabBarIcon: ({ color }) => (
            <Icon name="qr-code" color={color} size={32} />
          ),
          headerShown: false
        }}
      />
    </Tab.Navigator>
  )
}

function BarCodeNavigator() {
  return (
    <BarCodeStack.Navigator>
      <BarCodeStack.Screen name='BarCode' component={BarCode}
        options={
          {
            headerShown: false
          }
        } />
      <BarCodeStack.Screen name='TicketDetails' component={TicketDetails}
        options={
          {
            headerShown: false
          }
        } />
    </BarCodeStack.Navigator>
  )
}

function AccountStackNavigator() {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen name='Account' component={Account}
        options={
          {
            headerShown: false
          }
        } />
      <AccountStack.Screen name='EditAccount' component={EditAccount}
        options={
          {
            headerShown: false
          }
        } />
    </AccountStack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={Home}
          options={
            {
              headerShown: false
            }
          }
        />
        <Stack.Screen
          name='Login'
          component={Login}
          options={
            {
              headerShown: false
            }
          }
        />
        <Stack.Screen
          name='FormUser'
          component={FormUser}
          options={
            {
              headerShown: false
            }
          }
        />
        <Stack.Screen
          name='FormAddress'
          component={FormAddress}
          options={
            {
              headerShown: false
            }
          }
        />
        <Stack.Screen
          name='BillingDay'
          component={BillingDay}
          options={
            {
              headerShown: false
            }
          }
        />
        <Stack.Screen
          name='Terms'
          component={Terms}
          options={
            {
              headerShown: false
            }
          }
        />
        <Stack.Screen
          name='AccountNavigator'
          component={AccountNavigator}
          options={
            {
              headerShown: false
            }
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}