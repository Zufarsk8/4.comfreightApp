import React from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, TextInput, StatusBar, WebView } from 'react-native';
import Context from "../../../Context";
import RecentActivity from './RecentActivity'
// import YouTube from 'react-native-youtube'


export default class RecentActivities extends React.Component {

    constructor() {
        super();
        this.state = {
        }
    }



    render() {

        return (
            <View style={{
                marginLeft: 10, marginTop: 15,
                marginBottom: 5, zIndex: 1,
            }}>
                <Text>
                    Recent Activities
            </Text>
                <ScrollView
                    style={{ zIndex: -1 }}
                    horizontal={true} >
                    <RecentActivity type="APPROVED" day={1} />
                    <RecentActivity type="ALERT" day={3} />
                    <RecentActivity type="APPROVED" day={5} />

                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({


});