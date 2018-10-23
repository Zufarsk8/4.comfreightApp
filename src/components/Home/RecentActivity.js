import React from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, TextInput, StatusBar, WebView } from 'react-native';
import Context from "../../../Context";

// import YouTube from 'react-native-youtube'


export default class RecentActivity extends React.Component {

    constructor() {
        super();
        this.state = {
        }
    }


    StatusRender = (type) => {

        if (type == 'APPROVED') {
            return (
                <View style={styles.shadow}>
                    <Image source={require("../../assets/GreenDollar.png")}
                        style={{

                            height: 24,
                            width: 15,
                        }} />
                    <View style={{ marginBottom: 30, }}>
                        <Text>Your Request is</Text>
                        <Text style={{ color: '#2EBD00' }}>APPROVED</Text>
                    </View>
                    <Text style={{ position: 'absolute', bottom: 5, left: 5, color: 'grey' }}>
                        {this.props.day} day ago
                </Text>
                </View >
            )
        }

        if (type == 'ALERT') {
            return (
                <View style={styles.shadow}>
                    <Image source={require("../../assets/OrangeDollar.png")}
                        style={{

                            height: 24,
                            width: 15,
                        }} />
                    <View style={{ marginBottom: 30, }}>
                        <Text style={{ color: '#F5A623' }}>Alert!</Text>
                        <Text>Document issue on your Request</Text>
                    </View>
                    <Text style={{ position: 'absolute', bottom: 5, left: 5, color: 'grey' }}>
                        {this.props.day} day ago
                </Text>

                </View >
            )

        }
    }

    render() {

        return this.StatusRender(this.props.type)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        paddingTop: 10,
        backgroundColor: "#f5f5f5",
        flexWrap: 'wrap',
    },
    shadow: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        width: 150,
        padding: 10,
        marginTop: 5,
        marginBottom: 5,
        marginRight: 20,
        position: 'relative',
        backgroundColor: '#F0F2F4'
    }

});