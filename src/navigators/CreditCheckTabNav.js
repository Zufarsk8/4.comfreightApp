import { StyleSheet, Text, View, Button, Image, StatusBar, SafeAreaView } from 'react-native';
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from '../components/Home/Home';



FocusRenderCreditCheck = (focused) => {
    console.log(focused)
    if (focused) {
        return (<View style={{
            paddingTop: 5,
            width: 60,
            height: 60,
            marginLeft: 'auto',
            marginRight: 'auto',
            position: 'relative'
        }}>
            <Image source={require("../assets/CreditCheck.png")}
                style={{
                    marginBottom: 'auto',
                    marginTop: 'auto',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: 21,
                    height: 14,
                }} />
            <View style={{ height: 30, position: 'relative' }}>
                <Text style={{
                    position: 'absolute',
                    textAlign: 'center',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    fontSize: 10,
                    width: 60,
                    color: '#0079b4'
                }}>Credit Check
              </Text>
            </View>

            <View style={{
                width: 40,
                borderBottomWidth: 3,
                borderColor: '#0079b4',
                position: 'absolute',
                bottom: 0,
                marginLeft: 10,
            }}>
            </View>
        </View>);
    }
    else {
        return (<View style={{
            width: 60,
            height: 60,
            marginLeft: 'auto',
            marginRight: 'auto',
        }}>
            <Image source={require("../assets/CreditCheckGrey.png")}
                style={{
                    marginBottom: 'auto',
                    marginTop: 'auto',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: 21,
                    height: 14,
                }} />
            <View style={{ height: 30, position: 'relative' }}>
                <Text style={{
                    position: 'absolute',
                    textAlign: 'center',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    fontSize: 10,
                    width: 60,
                    color: '#5c6979'
                }}>Credit Check
              </Text>
            </View>


        </View>);
    }
}

CreditCheckTabNav = {
    screen: Home,
    navigationOptions: ({ navigation }) => {
        const { routeName, routes } = navigation.state;
        return {
            tabBarIcon: ({ focused, tintColor }) => {
                // You can return any component that you like here! 
                // We usually create an icon component rendering some svg        
                return (FocusRenderCreditCheck(focused))
            }
        }
    }
}

export default CreditCheckTabNav;