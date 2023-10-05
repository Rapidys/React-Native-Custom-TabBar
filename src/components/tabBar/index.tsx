import React from 'react';
import {Text, Touchable, TouchableOpacity, View} from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";

const TabBar = ({state, descriptors, navigation}: any) => {

    const routeNameDefiner = (route: any) => {
        switch (route.name) {
            case 'dashboard':
                return 'მთავარი'
            case 'Find':
                return 'ძებნა'
            case 'Transfer':
                return 'გადარიცხვა'
            case 'profile':
                return 'პროფილი'
            case 'settings':
                return 'სეთინგები'
        }
    }
    const routeIconDefiner = (route: any) => {
        switch (route.name) {
            case 'dashboard':
                return <MaterialCommunityIcons
                    name={'view-dashboard'}
                    size={20}
                    color={'#fff'}

                />
            case 'Find':
                return <Feather
                    name={'search'}
                    size={20}
                    color={'#fff'}

                />
            case 'Transfer':
                return <MaterialCommunityIcons
                    name={'plus'}
                    size={30}
                    color={'#fff'}
                />
            case 'profile':
                return <Fontisto
                    name={'person'}
                    size={20}
                    color={'#fff'}

                />
            case 'settings':
                return <Feather
                    name={'settings'}
                    size={20}
                    color={'#fff'}

                />
        }
    }

    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            backgroundColor: '#606060'
        }}>
            {state.routes.map((route: any, index: number) => {
                const isFocused = state.index === index
                const handlePress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key
                    })

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.name)
                    }
                }
                return (
                    <TouchableOpacity
                        style={{
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingBottom: 20,
                            paddingTop: 10
                        }}

                        onPress={handlePress}
                    >
                        {route.name === 'Transfer' ? (
                            <View style={{
                                position: 'absolute',
                                top: -20,
                                width: 70,
                                height: 70,
                                backgroundColor: '#fff',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius:50,

                            }}>
                                <View
                                    style={{
                                        width: 60,
                                        height: 60,
                                        backgroundColor: '#981616',
                                        borderRadius: 50,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    {routeIconDefiner(route)}
                                </View>
                            </View>

                        ) : (
                            <>
                                <View
                                    style={{
                                        width: 50,
                                        height: 50,
                                        backgroundColor: isFocused ? '#981616' : 'transparent',
                                        borderRadius: 50,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginBottom: 5
                                    }}
                                >
                                    {routeIconDefiner(route)}
                                </View>
                                <Text style={{color: '#fff', fontSize: 10}}>
                                    {routeNameDefiner(route)}
                                </Text>
                            </>
                        )}


                    </TouchableOpacity>
                )
            })}
        </View>

    );
};

export default TabBar;