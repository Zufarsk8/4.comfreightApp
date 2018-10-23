import React from 'react';
import { StyleSheet, Text, View, Button, Image, StatusBar, SafeAreaView } from 'react-native';
import Context from "../../Context";

export default class TopBar extends React.Component {

    constructor() {
        super();
        this.state = {
        }
    }

    render() {
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
                        {this.props.title}
                    </Text >
                    <View style={{
                        position: 'absolute',
                        height: '100%',
                        right: 0,
                    }}>

                        <Image source={require("../assets/bell.png")}
                            style={{
                                marginBottom: 'auto',
                                marginTop: 'auto',
                            }} />
                    </View>
                </View>
            </SafeAreaView>
        )


    }
}

const styles = StyleSheet.create({


});