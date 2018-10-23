import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Button, Image, ScrollView, TextInput } from 'react-native';
import Context from "../../Context";

export default class Login extends React.Component {

    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, backgroundColor: '#fff', position: 'relative' }}>

                <Image style={{
                    width: 210,
                    height: 70,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: 10,
                }} source={require("../assets/banner-logo.png")} />

                <Text style={{
                    color: '#5c6979',
                    fontSize: 20,
                    textAlign: 'center',
                    marginTop: 10
                }}>WELCOME BACK!</Text>

                <Text style={{
                    color: "#b3b3b3",
                    textAlign: 'center',
                    marginTop: 5
                }}>You can sign in using gmail.</Text>

                <View style={styles.form}>
                    <View style={styles.inputBox}>
                        <View style={{ width: '15%' }}>
                            <Image source={require("../assets/email.png")} />
                        </View>
                        <TextInput underlineColorAndroid="transparent" style={{ width: '85%', }} placeholder="Email">
                        </TextInput>
                    </View>
                    <View style={styles.inputBox}>
                        <View style={{ width: '15%' }}>
                            <Image source={require("../assets/password.png")} />
                        </View>
                        <TextInput underlineColorAndroid="transparent" style={{ width: '85%', }} placeholder="Password">
                        </TextInput>
                    </View>
                </View>

                <View style={{
                    position: 'absolute',
                    bottom: 50,
                    width: '100%'
                }}>
                    <TouchableOpacity>
                        < Text style={styles.SignInBtn} onPress={() => navigate('Home')}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.GoogleBtn}>Sign in with Google+</Text>
                    </TouchableOpacity>

                </View>

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
    SignInBtn: {
        width: 200,
        textAlign: 'center',
        color: 'white',
        borderRadius: 20,
        backgroundColor: '#ff7800',
        padding: 10,
        marginBottom: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    GoogleBtn: {
        width: 200,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#fc370e',
        borderRadius: 20,
        color: '#fc370e',
        padding: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    inputBox: {
        borderBottomColor: '#0079b4',
        borderBottomWidth: 2,
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 20,
        paddingBottom: 10
    },
    form: {
        paddingTop: 50,
    }


});