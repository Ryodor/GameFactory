import React from 'react';
import bg from '../Images/pendaison.png'
import { StyleSheet, Text, View, FlatList, Button, TextInput, Alert, ImageBackground, TouchableOpacity, Vibration } from 'react-native';

class LePendu extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                {/*<Image source={require('../Images/pendaison.png')} />;*/}
                <ImageBackground source={bg}
                    style={{ width: '100%', height: '100%' }}>
                </ImageBackground>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    main_container: {
        //   height: 190,
        flex: 1,
        marginTop: 40
    },
    play_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    player_element: {
        width: 200,
        borderRadius: 100,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        backgroundColor: 'blue',
        margin: 5
    },
    inputValueGame: {
        width: 100,
        borderRadius: 55,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        padding: 10,
        textAlign: 'center',
        margin: 5
    },
    button: {
        width: 100,
        borderRadius: 55,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        padding: 10,
        margin: 5,
        backgroundColor: '#368edb',
    },
    buttonAbout: {
        flex: 0,
        borderWidth: 0.5,
        borderColor: 'grey',
        padding: 20,
        marginBottom: 30,
        backgroundColor: 'grey',
    },
    txtButtonSubmit: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    }
})

export default LePendu