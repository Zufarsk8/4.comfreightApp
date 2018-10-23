import React from 'react';
import { ImageBackground, TouchableOpacity, StyleSheet, Text, View, Button, Image, ScrollView, TextInput, StatusBar, WebView } from 'react-native';
import CameraApp from './CameraApp'
import { Modal } from 'react-native';

export default class UserImg extends React.Component {

    state = {
        modalVisible: false,
    };
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    render() {

        return (
            <View style={{
                position: 'absolute', width: '100%', top: 70,
            }}>


                <TouchableOpacity
                    onPress={() => {
                        this.setModalVisible(true);
                    }}
                >
                    <View style={{
                        width: 120,
                        height: 120,
                        borderWidth: 5,
                        borderColor: 'white',
                        borderRadius: 60,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        position: 'relative',
                        overflow: 'hidden'
                    }} >
                        <ImageBackground source={require('../../assets/elon.png')}
                            style={{
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                            }} resizeMode="cover" />
                        <Image source={require('../../assets/AddImage.png')}
                            style={{
                                width: 110,
                                height: 30,
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                position: 'absolute',
                                bottom: 0,
                            }} resizeMode="contain" />
                    </View>

                </TouchableOpacity>


                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}
                >
                    <CameraApp />
                    <TouchableOpacity
                        onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                        }}
                        style={{ position: 'absolute', top: 10, right: 10, }}>
                        <Image source={require("../../assets/crossWhite.png")} style={{
                            height: 30,
                            width: 30,
                            margin: 5,
                        }} />
                    </TouchableOpacity>
                </Modal>
            </View>
        )


    }
}

const styles = StyleSheet.create({


});