import React from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, TextInput, StatusBar, WebView } from 'react-native';


export default class SearchBar extends React.Component {

    constructor() {
        super();
        this.state = {
        }
    }



    render() {

        return (
            <View>
                <View style={{ height: 24, backgroundColor: '#0079b4' }}></View>
                <View style={{ height: 50, backgroundColor: '#f7f8f8' }}>
                    <View style={{ flex: 1, position: 'relative' }}>
                        <View style={{
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            marginBottom: 'auto',
                            marginTop: 'auto',
                            width: '90%',
                            display: 'flex',
                            flexDirection: 'row'
                        }} >
                            <Image source={require("../../assets/search.png")}
                                style={{
                                    marginBottom: 'auto',
                                    marginTop: 'auto',
                                    height: 15,
                                    width: 15,
                                    margin: 10,
                                }} />
                            <TextInput underlineColorAndroid="transparent" style={{ width: '100%' }} placeholder=" Search by load or invoice number">
                            </TextInput>
                        </View >
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
            </View>
        )


    }
}

const styles = StyleSheet.create({


});