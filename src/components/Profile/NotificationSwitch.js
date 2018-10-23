import React from 'react';
import { ImageBackground, Switch, TouchableOpacity, StyleSheet, Text, View, Button, Image, ScrollView, TextInput, StatusBar, WebView } from 'react-native';

export default NotificationSwitch = (props) => {


    return (
        <View style={{ flexDirection: 'row' }}>
            <Text style={{ color: '#5E6B7B', marginTop: 'auto', marginBottom: 'auto' }}>
                Enable Notification
            </Text>
            <View style={{ backgroundColor: '#ff7800', padding: 1, marginLeft: 'auto', borderRadius: 20, marginTop: 'auto', marginBottom: 'auto' }}>
                <Switch
                    tintColor="transparent"
                    thumbTintColor="#ffffff"
                    onTintColor="transparent"
                    style={{ transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }], }}
                    onValueChange={props.toggleSwitch1}
                    value={props.switch1Value} />
            </View>
        </View>
    )


}

const styles = StyleSheet.create({


});