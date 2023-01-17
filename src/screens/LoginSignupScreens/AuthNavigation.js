import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './WelcomeScreen';
import SignupScreen from './SignupScreen';
import LoginScreen from './LoginScreen';


const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
      <Stack.Navigator initialRouteName='welcomepage'>
        <Stack.Screen 
            name="Welcomepage"
            component={WelcomeScreen} 
            options={{headerShown: false}}
        />
        <Stack.Screen 
            name="signup" 
            component={SignupScreen} 
            options={{headerShown: false}}
            />
        <Stack.Screen 
            name="login" 
            component={LoginScreen} 
            options={{headerShown: false}}
            />
      </Stack.Navigator>
  )
}

export default AuthNavigation