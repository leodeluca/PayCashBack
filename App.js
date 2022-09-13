import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

import Home from './src/pages/Home/Home'
import Login from './src/pages/Login/Login'
import FormUser from './src/pages/Form/FormUser'
import FormAddress from './src/pages/Form/FormAddress'
import BillingDay from './src/pages/BillingDay/BillingDay'
import Terms from './src/pages/Terms/Terms'
import Account from './src/pages/Account/Account'
import Invoices from './src/pages/Invoices/Invoices'
import BarCode from './src/pages/BarCode/BarCode'

function AccountNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='AccountTab' component={Account} />
      <Tab.Screen name='Invoices' component={Invoices} />
      <Tab.Screen name='BarCode' component={BarCode} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='FormUser' component={FormUser} />
        <Stack.Screen name='FormAddress' component={FormAddress} />
        <Stack.Screen name='BillingDay' component={BillingDay} />
        <Stack.Screen name='Terms' component={Terms} />
        <Stack.Screen name='Account' component={AccountNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}