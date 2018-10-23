import React from 'react';
import { ImageBackground, TouchableOpacity, StyleSheet, Text, View, Button, Image, ScrollView, TextInput, StatusBar, WebView } from 'react-native';
import CameraApp from './CameraApp'
import { Modal } from 'react-native';

export default class UserIasdmg extends React.Component {

    constructor() {
        super();
        this.state = {
        }
    }

    render() {

        return (
            <View>

                <View style={{ backgroundColor: '#0079b4', position: 'relative' }}>
                    <View style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: 20,
                        marginBottom: 30,
                        width: 120,
                        height: 120,
                        borderRadius: 60,
                        borderWidth: 5,
                        overflow: 'hidden',
                        borderColor: 'white'
                    }}>
                        <ImageBackground source={require('../../assets/elon.png')}
                            style={{
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                            }} resizeMode="cover" />

                        <TouchableOpacity style={{
                            position: 'absolute',
                            bottom: 0,
                        }}>
                            <Image source={require('../../assets/AddImage.png')}
                                style={{
                                    width: 110,
                                    height: 30,
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                }} resizeMode="contain" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )


    }
}

const styles = StyleSheet.create({


});