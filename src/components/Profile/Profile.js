import React from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, TextInput, StatusBar, WebView } from 'react-native';
import Context from "../../../Context";
import UserImg from './UserImg'
import ProfileInfoBox from './ProfileInfoBox'
import CameraApp from './CameraApp'


export default class Profile extends React.Component {

    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {

        return (

            <View style={{ flex: 1 }}>
                <View style={{ paddingTop: 24, backgroundColor: '#0079b4' }}>
                    <Text style={{
                        textAlign: 'center',
                        margin: 5,
                        fontSize: 18,
                    }}>
                        Profile
            </Text>
                </View>
                <View style={{ backgroundColor: '#0079b4', position: 'relative' }}>

                    <View style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: 20,
                        marginBottom: 30,
                        width: 120,
                        height: 120,
                        borderRadius: 60,
                        overflow: 'hidden',
                    }}></View>
                </View>


                <ProfileInfoBox />
                <UserImg />

            </View>
        )


    }
}

const styles = StyleSheet.create({


});