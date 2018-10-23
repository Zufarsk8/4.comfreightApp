import React, { Component } from 'react';
import { Modal, Text, TouchableOpacity, View, Alert, Image } from 'react-native';

export default class AddAction extends Component {
    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <View style={{ position: 'absolute', bottom: 20, right: 20, }}>

                <TouchableOpacity
                >
                    <Image source={require("../assets/AddAction.png")} style={{

                        height: 42,
                        width: 40,
                    }} />

                </TouchableOpacity>
            </View>
        );
    }
}