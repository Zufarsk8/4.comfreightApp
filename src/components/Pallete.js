import React, { Component } from 'react';
import { Modal, Text, TouchableOpacity, View, Alert, Image } from 'react-native';

export default class Pallete extends Component {
    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <View style={{ position: 'absolute', bottom: 20, right: 20, }}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}
                >
                    <View style={{ backgroundColor: 'rgba(52, 52, 52, 0.2)', width: '100%', height: '100%' }}>
                        <View style={{ position: 'absolute', bottom: 80, right: 20, }}>
                            <Image source={require("../assets/ActionHistory.png")} style={{

                                height: 37,
                                width: 35,
                                marginBottom: 10,
                                marginLeft: 3,
                            }} />
                            <Image source={require("../assets/weirdbtn.png")} style={{

                                height: 37,
                                width: 35,
                                marginBottom: 10,
                                marginLeft: 3,

                            }} />


                            <Image source={require("../assets/ActionMessage.png")} style={{

                                height: 37,
                                width: 35,
                                marginBottom: 10,
                                marginLeft: 3,

                            }} />
                            <TouchableOpacity
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <Image source={require("../assets/cross.png")} style={{

                                    height: 42,
                                    width: 40,
                                }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <TouchableOpacity
                    onPress={() => {
                        this.setModalVisible(true);
                    }}
                >
                    <Image source={require("../assets/ActionMenu.png")} style={{

                        height: 42,
                        width: 40,
                    }} />

                </TouchableOpacity>
            </View>
        );
    }
}