import React from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, TextInput, StatusBar, WebView } from 'react-native';
import SingleReceipt from './SingleReceipt'


export default class Summary extends React.Component {

    constructor() {
        super();
        this.state = {
        }
    }



    render() {

        return (
            <View>
                <Text style={{ fontSize: 20, color: 'grey' }}>
                    Your recent payment requests
                </Text>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Text style={{ fontSize: 12, fontWeight: 'bold' }}>
                            Total Revenue:
                </Text>
                        <Text style={{ marginLeft: 5, fontSize: 12, color: '#AEC990' }}>
                            $4,500.00
                </Text>
                    </View>
                    <View style={{ marginLeft: 'auto', display: 'flex', flexDirection: 'row' }}>
                        <Text style={{ fontSize: 12, fontWeight: 'bold' }}>
                            Total Outstanding:
                         </Text>
                        <Text style={{ marginLeft: 5, fontSize: 12, color: '#EA8995' }}>
                            $1,100.00
                         </Text>
                    </View>
                </View>

                <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row' }}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Text style={{ fontSize: 12, fontWeight: 'bold' }}>
                            Reserve Balance:
                </Text>
                        <Text style={{ marginLeft: 5, fontSize: 12, color: '#AEC990' }}>
                            $0
                </Text>
                    </View>
                    <View style={{ marginLeft: 'auto', display: 'flex', flexDirection: 'row' }}>
                        <Text style={{ fontSize: 12, fontWeight: 'bold' }}>
                            Your Rate:
                         </Text>
                        <Text style={{ marginLeft: 5, fontSize: 12, color: '#AEC990' }}>
                            3.5%
                         </Text>
                    </View>
                </View>


                <Image source={require("../../assets/slider.png")} style={{

                    height: 20,
                    width: 20,
                    marginTop: 10,
                    marginBottom: 10,
                    marginLeft: 'auto',

                }} />
            </View>
        )


    }
}

const styles = StyleSheet.create({


});