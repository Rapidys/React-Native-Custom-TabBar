import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import Dashboard from "../../../screens/dashboard/dashboard";
import {Text} from "react-native";

const Stack = createStackNavigator()
const DashboardScreen = () => {
    return (
        <Stack.Navigator
           screenOptions={{
               headerTitle:() => <Text>დეშბორდი</Text>,
               headerStyle:{backgroundColor:'#343434'}
           }}
        >
            <Stack.Screen name={'DashboardScreen'} component = {Dashboard} />
        </Stack.Navigator>
    );
};

export default DashboardScreen;