import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import Login from "../../../screens/onBoarding/Login";
import {Text} from "react-native";


const Stack = createStackNavigator()
const LoginScreen = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {backgroundColor: 'rgb(31,31,31)'},
                headerTitle:() => <Text style={{color:'#fff'}}>Log in</Text>
            }}
        >
            <Stack.Screen
                name={'LoginScreen'}
                component={Login}
            />
        </Stack.Navigator>
    );
};

export default LoginScreen;