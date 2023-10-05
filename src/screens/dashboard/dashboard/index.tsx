import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const Dashboard = () => {

    const handlePress = () => {
        console.log("handlePress called");
        launchCamera({ mediaType: 'photo', presentationStyle: 'fullScreen' }, (response) => {
            console.log("Camera Response:", response);
        });
    }



    return (
       <View>
           <TouchableOpacity onPress = {handlePress}>
               <Text>
                   click me
               </Text>
           </TouchableOpacity>
         <Text>assdfsadfd</Text>
       </View>
    );
};

export default Dashboard;