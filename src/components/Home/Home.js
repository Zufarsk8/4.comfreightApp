import React from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, TextInput, StatusBar, WebView } from 'react-native';
import Context from "../../../Context";
import TopBar from './../TopBar';
// import YouTube from 'react-native-youtube'

import Video from './Video'
import RecentActivities from './RecentActivities'
import Pallete from '../Pallete'
import { FloatingAction } from 'react-native-floating-action';

const actions = [{
    text: 'Accessibility',
    icon: require('../../assets/bell.png'),
    name: 'bt_accessibility',
    position: 2
}, {
    text: 'Language',
    icon: require('../../assets/bell.png'),
    name: 'bt_language',
    position: 1
}, {
    text: 'Location',
    icon: require('../../assets/bell.png'),
    name: 'bt_room',
    position: 3
}];
export default class Home extends React.Component {

    constructor() {
        super();
        this.state = {
        }
    }



    render() {

        return (
            <View style={{ flex: 1 }}>

                <ScrollView >
                    <View style={{ height: 24, backgroundColor: '#0079b4' }}></View>
                    <View style={{ height: 50, backgroundColor: '#f7f8f8' }}>
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
                                Home
                    </Text >
                            <View style={{
                                position: 'absolute',
                                height: '100%',
                                right: 0,
                            }}>

                                <Image source={require("../../assets/bell.png")}
                                    style={{
                                        marginBottom: 'auto',
                                        marginTop: 'auto',
                                        height: 21,
                                        width: 18,
                                        margin: 10,
                                    }} />
                            </View>
                        </View>
                    </View>
                    <View style={{ height: 40 }}>

                        <View style={{ display: 'flex', flexDirection: 'row', }}>
                            <Text style={{ marginLeft: 20, marginTop: 10, marginBottom: 'auto', fontSize: 18, color: 'grey', }}>WELCOME TO</Text>
                            <Image source={require("../../assets/banner-logo.png")}
                                style={{
                                    height: 50,
                                    width: 200,

                                }} />
                        </View>
                    </View>
                    <Text style={{
                        marginLeft: 20,
                        marginBottom: 20,
                        color: 'grey'
                    }}>Check out our new features.</Text>


                    <Video />

                    <RecentActivities />
                    {/*Not working <YouTube
                    videoId="4oQ8qnNc_uo"
                    play={true}             // control playback of video with true/false
                    fullscreen={true}       // control whether the video should play in fullscreen or inline

                    apiKey="AIzaSyDYwK9wOffGv84QPqVpplf3d9JjM1AwaOw "
                /> */}
                </ScrollView>


                {/* < FloatingAction
                    ref={(ref) => { this.floatingAction = ref; }}
                    actions={actions}
                    onPressItem={
                        (name) => {
                            console.log(`selected button: ${name}`);
                        }
                    }
                /> */}

                <Pallete />
            </View >
        )


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
    }, container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    video: {
        marginTop: 20,
        maxHeight: 200,
        width: 320,
        flex: 1
    }

});