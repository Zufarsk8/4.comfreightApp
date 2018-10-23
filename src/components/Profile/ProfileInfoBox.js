import React from 'react';
import { ImageBackground, TouchableOpacity, StyleSheet, Text, View, Button, Image, ScrollView, TextInput, StatusBar, WebView } from 'react-native';
import ProfileInfo from './ProfileInfo'
import NotificationSwitch from './NotificationSwitch'

export default class ProfileInfoBox extends React.Component {

    constructor() {
        super();
        this.state = {
        }
    }
    toggleSwitch1 = (value) => {
        this.setState({ switch1Value: value })
    }


    render() {

        return (
            <ScrollView style={{ padding: 20, }}>

                <ProfileInfo header="Name" content="John Smith" />
                <ProfileInfo header="Phone" content="424-413-2332" />
                <ProfileInfo header="E-mail" content="example@gmail.com" />
                <ProfileInfo header="DOT #" content="12343" />
                <NotificationSwitch toggleSwitch1={this.toggleSwitch1}
                    switch1Value={this.state.switch1Value} />
            </ScrollView>
        )


    }
}

const styles = StyleSheet.create({


});