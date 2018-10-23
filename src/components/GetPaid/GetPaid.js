import React from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, TextInput, StatusBar, WebView } from 'react-native';
import Context from "../../../Context";
import SearchBar from './SearchBar'
import Summary from './Summary'
import SingleReceipt from './SingleReceipt'
import AddAction from '../AddAction'


export default class GetPaid extends React.Component {

    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <SearchBar />
                <View style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 10 }}>
                    <Summary />
                </View>
                <ScrollView style={{ paddingLeft: 10, paddingRight: 10, }}>
                    <SingleReceipt status="PENDING" billedTo="TQL" />
                    <SingleReceipt status="APPROVED" billedTo="Target" />
                    <SingleReceipt status="DOCUMENT" billedTo="Walmart" />
                    <SingleReceipt status="PENDING" billedTo="TQL" />
                    <SingleReceipt status="PENDING" billedTo="TQL" />
                </ScrollView>
                <AddAction />
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
    },

    container: {
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