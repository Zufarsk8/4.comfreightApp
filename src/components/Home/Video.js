import React from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, TextInput, StatusBar, WebView, Dimensions } from 'react-native';
// import YouTube from 'react-native-youtube'

// Get phone dimension
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default class Video extends React.Component {


    render() {
        console.log((deviceWidth - 20) / 16 * 9)

        return (
            <View style={[{
                width: deviceWidth - 20,
                marginLeft: 'auto',
                marginRight: 'auto',
            },
            styles.shadow
            ]}>
                <View
                    style={[{
                        width: deviceWidth - 20,
                        height: (deviceWidth - 20) / 16 * 9,
                        alignItems: 'center',
                    },
                    styles.shadow
                    ]}
                >
                    <WebView
                        source={{ uri: 'https://www.youtube.com/embed/O727LCYFG-Y' }}
                        style={styles.video}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        startInLoadingState={false}
                    />
                </View>

                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: deviceWidth - 20,
                    padding: 10,
                }}>
                    <Text
                        style={[{
                            backgroundColor: 'orange',
                            color: 'white',
                            paddingVertical: 5,
                            paddingHorizontal: 20,
                        },
                        styles.shadow
                        ]}
                    >
                        TRY IT
                </Text>

                    < Image source={require("../../assets/share.png")}
                        style={{
                            width: 18,
                            height: 22,
                            marginLeft: 'auto',
                            marginTop: 'auto',
                            marginBottom: 'auto',
                            marginRight: 10,
                        }} />
                </View>
            </View >
        )


    }
}

const styles = StyleSheet.create({
    video: {
        maxHeight: (deviceWidth - 20) / 16 * 9,
        width: deviceWidth - 20,
        flex: 1,
    }
    ,
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
    }

});