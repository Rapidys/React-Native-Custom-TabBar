import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import LoginScreen from "./Login";

const OnBoardingRoutes = [
    {
        name: "LoginScreen",
        component: LoginScreen
    }
]

const OnBoardingStackNavigator = createStackNavigator()

const OnBoardingScreens = () => {
    return (
        <OnBoardingStackNavigator.Navigator>
            {OnBoardingRoutes.map(screen => {
                return (
                    <OnBoardingStackNavigator.Screen
                        name={screen.name}
                        component={screen.component}
                    />
                )
            })}
        </OnBoardingStackNavigator.Navigator>
    );
};

export default OnBoardingScreens;