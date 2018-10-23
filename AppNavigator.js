import { StyleSheet, Text, View, Button, Image, StatusBar, SafeAreaView } from 'react-native';
import React from 'react';
import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import Navbar from './src/components/Navbar';
import Login from './src/components/Login';
import Home from './src/components/Home/Home';
import InvoiceTabNav from './src/navigators/InvoiceTabNav';
import HomeTabNav from './src/navigators/HomeTabNav';
import GetPaidTabNav from './src/navigators/GetPaidTabNav';
import CreditCheckTabNav from './src/navigators/CreditCheckTabNav';
import ProfileTabNav from './src/navigators/ProfileTabNav';


showTitle = (Title) => {
    if (Title !== '') {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#f7f8f8' }}>
                <View style={{ flex: 1, position: 'relative' }}>
                    <Text style={{
                        color: 'black',
                        fontSize: 18,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginBottom: 'auto',
                        marginTop: 'auto',
                        textAlign: 'center',
                        width: '90%'
                    }} >
                        {Title}
                    </Text >
                    <View style={{
                        position: 'absolute',
                        height: '100%',
                        right: 0,
                    }}>

                        <Image source={require("./src/assets/bell.png")}
                            style={{
                                marginBottom: 'auto',
                                marginTop: 'auto',
                                padding: 5
                            }} />
                    </View>
                </View>
            </SafeAreaView>

        )
    }
    else return null
}

var options = (Title, height) => (
    {
        headerTitle:
            (
                showTitle(Title)
            )
        ,
        headerStyle: {
            backgroundColor: '#0079b4',
            height: height,

        },
        headerTintColor: "#6D798D"
    }
)

const AuthStack = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions:
            {
                headerTitle: '',
                headerStyle: {
                    backgroundColor: '#0079b4',
                    height: 0,
                },
                headerTintColor: "#6D798D"
            }
    }
})


const AppStack = createBottomTabNavigator({
    Home: HomeTabNav,
    Invoicing: InvoiceTabNav,
    GetPaid: GetPaidTabNav,
    CreditCheck: CreditCheckTabNav,
    Profile: ProfileTabNav,
}, {
        tabBarOptions: {
            showLabel: false,
            activeTintColor: "#0079b4",
            inactiveTintColor: "#858585",
            style: {
                height: 60,
                backgroundColor: "#fff"
            }
        }
    })

const AppNavigator = createSwitchNavigator(
    {
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'Auth',
    }
);



export default AppNavigator;
