import React from 'react';
import { ImageBackground, TouchableOpacity, StyleSheet, Text, View, Button, Image, ScrollView, TextInput, StatusBar, WebView } from 'react-native';


export default class ProfileInfo extends React.Component {

    constructor() {
        super();
        this.state = {
        }
    }



    render() {

        return (
            <View>
                <Text style={{ marginBottom: 10, color: '#5E6B7B' }}>
                    {this.props.header}
                </Text>
                <Text style={{ marginBottom: 10, color: '#60686F', }}>
                    {this.props.content}
                </Text>
                <View style={{ marginBottom: 10, borderBottomColor: '#F6F7F9', borderBottomWidth: 2, width: '100%' }}>
                </View>
            </View>
        )


    }
}

const styles = StyleSheet.create({


});