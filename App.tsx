import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import OnBoardingScreens from "./src/navigation/onBoarding/Login";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ProfileScreen from "./src/navigation/dashboard/profile";
import DashboardScreen from "./src/navigation/dashboard/dashboard";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'
import {Touchable, TouchableOpacity, View} from "react-native";
import TabBar from "./src/components/tabBar";


const TabNavigator = createBottomTabNavigator()

function App(): JSX.Element {

    const isLoggedIn = true

    return (
        <NavigationContainer>
            {isLoggedIn ? (
                <TabNavigator.Navigator
                    tabBar={(props) => <TabBar {...props}/>}
                    screenOptions={{
                        headerShown: false,
                        tabBarStyle: {backgroundColor: '#343434'}
                    }}
                >
                    <TabNavigator.Screen
                        name={"dashboard"}
                        component={DashboardScreen}
                        // options={{
                        //     tabBarIcon: ({focused, color, size}) =>
                        //         <MaterialCommunityIcons
                        //             name={'view-dashboard'}
                        //             color={color}
                        //             size={size}
                        //         />
                        // }}
                    />
                    <TabNavigator.Screen
                        name={"Find"}
                        component={ProfileScreen}
                        // options={{
                        //     tabBarIcon: ({focused, color, size}) =>
                        //         <Feather
                        //             name={'search'}
                        //             size={size}
                        //             color={color}
                        //         />
                        // }}
                    />
                    <TabNavigator.Screen
                        name={"Transfer"}
                        component={ProfileScreen}
                        // options={{
                        //     tabBarIcon: ({focused, color, size}) =>
                        //         <TouchableOpacity style={{
                        //             marginBottom: 20,
                        //             width: 50,
                        //             height: 50,
                        //             justifyContent: 'center',
                        //             alignItems: 'center',
                        //             backgroundColor: 'red',
                        //             borderRadius: 50,
                        //         }}>
                        //             <Feather
                        //                 name={'settings'}
                        //                 size={size}
                        //                 color={'#000'}
                        //             />
                        //         </TouchableOpacity>
                        // }}
                    />
                    <TabNavigator.Screen
                        name={"profile"}
                        component={ProfileScreen}
                        // options={{
                        //     tabBarIcon: ({focused, color, size}) =>
                        //         <Fontisto
                        //             name={'person'}
                        //             size={size}
                        //             color={color}
                        //         />
                        // }}
                    />
                    <TabNavigator.Screen
                        name={"settings"}
                        component={ProfileScreen}
                        // options={{
                        //     tabBarIcon: ({focused, color, size}) =>
                        //         <Feather
                        //             name={'settings'}
                        //             size={size}
                        //             color={color}
                        //         />
                        // }}
                    />
                </TabNavigator.Navigator>
            ) : (
                <OnBoardingScreens/>
            )}
        </NavigationContainer>
    );
}

export default App;
