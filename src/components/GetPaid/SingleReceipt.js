import React from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, TextInput, StatusBar, WebView } from 'react-native';


export default class SingleReceipt extends React.Component {

    constructor() {
        super();
        this.state = {
        }
    }

    renderStatus = (status) => {
        if (status == 'APPROVED') {
            return (

                <View style={{
                    flexDirection: 'row',
                    position: 'absolute',
                    padding: 5,
                    right: 0,
                }}>
                    <Text style={{

                        fontStyle: 'italic',
                        color: '#75D450'
                    }}>
                        APPROVED
</Text>
                    <Image source={require("../../assets/tick.png")} style={{
                        height: 15,
                        width: 15,
                        marginLeft: 5,
                    }} />
                </View>)
        }

        if (status == 'PENDING') {
            return (<Text style={{
                position: 'absolute',
                padding: 5,
                right: 0,
                fontStyle: 'italic',
                color: '#F5AA2E'
            }}>
                PENDING...
</Text>)
        }
        if (status == 'DOCUMENT') {
            return (<Text style={{
                position: 'absolute',
                padding: 5,
                right: 0,
                fontStyle: 'italic',
                color: 'red'
            }}>
                Document Issue!!
</Text>)
        }


    }

    renderFooter = (status) => {
        if (status == 'APPROVED')
            return ("Funded At:")
        if (status == 'PENDING')
            return ("Requested At:")
        if (status == 'DOCUMENT')
            return ("Requested At:")
    }

    render() {

        return (
            <View style={styles.shadow}>
                {this.renderStatus(this.props.status)}
                <View style={{
                    padding: 5,
                }}>

                    <View style={{ flexDirection: 'row', paddingTop: 5, }}>
                        <Text style={{ color: '#7E8995', fontWeight: 'bold' }}>
                            Billed to:
            </Text>
                        <Text style={{ color: '#7E8995', marginLeft: 5, }}>
                            {this.props.billedTo}
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row', paddingTop: 5, }}>
                        <Text style={{ color: '#7E8995', fontWeight: 'bold' }}>
                            Invoice Amount:
            </Text>
                        <Text style={{ color: '#AEC990', marginLeft: 5, }}>
                            $1,200.00
            </Text>
                    </View>
                    <View style={{ flexDirection: 'row', paddingTop: 5, }}>
                        <Text style={{ color: '#7E8995', fontWeight: 'bold' }}>
                            Load #:
            </Text>
                        <Text style={{ color: '#7E8995', marginBottom: 20, marginLeft: 5, }}>
                            12334
            </Text>
                    </View>

                </View>
                <View style={{ flexDirection: 'row', backgroundColor: 'white', padding: 5 }}>

                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ color: '#7E8995', fontWeight: 'bold' }}>
                            {this.renderFooter(this.props.status)}
                        </Text>
                        <Text style={{ color: '#7E8995', marginLeft: 5, }}>
                            Wed, 23rd 2018
     </Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                        <Image source={require('../../assets/eye.png')} style={{ width: 23, height: 13, marginTop: 'auto', marginBottom: 'auto' }} />
                        <Text style={{ color: '#007AB4', marginLeft: 5, }}>
                            View
     </Text>
                    </View>
                </View>
            </View>
        )


    }
}

const styles = StyleSheet.create({
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
        marginTop: 5,
        marginBottom: 5,
        marginRight: 20,
        width: '100%',
        position: 'relative',
        backgroundColor: '#F0F2F4',
        position: 'relative'
    }

});