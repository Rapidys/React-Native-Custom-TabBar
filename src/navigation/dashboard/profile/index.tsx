import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import Profile from "../../../screens/dashboard/profile";
import {Text} from "react-native";


const Stack = createStackNavigator()
const ProfileScreen = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitle:() => <Text>დეშბორდი</Text>,
                headerStyle:{backgroundColor:'#343434'}
            }}
        >
            <Stack.Screen name={ 'ProfileScreen' } component={Profile}/>
        </Stack.Navigator>
    );
};

export default ProfileScreen;