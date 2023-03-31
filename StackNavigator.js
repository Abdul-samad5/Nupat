import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LaunchScreen from "./screens/LaunchScreen"
import CreatAccount from "./screens/creataccount/CreatAccount"
import Login from "./screens/creataccount/Login"
import OnBoardScreen from './screens/boarding/OnBoardingScreen';
import Verification from './screens/verification/Verification';
import Home from './screens/product/Home';



const Stack = createNativeStackNavigator();
const StackNavigator = () => {
       
  return (
    <Stack.Navigator>
        <Stack.Screen name="LaunchScreen" component={LaunchScreen} options={{title: ''}} />
        <Stack.Screen name="OnBoardingScreen" component={OnBoardScreen} options={{title: ''}}/> 
        <Stack.Screen name="CreatAccount" component={CreatAccount} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Verification" component={Verification}/>
        <Stack.Screen name="Home" component={Home} options={{title: ''}}/>
    </Stack.Navigator>  
  )
}

export default StackNavigator




