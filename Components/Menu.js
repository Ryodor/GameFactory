import React from 'react';
import bg from '../Images/playsationManetteOdd.png'
import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity, ImageBackground } from 'react-native';
class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <ImageBackground source={bg}
                style={{ width: '100%', height: '100%' }}>
                <View style={styles.container}>

                    <TouchableOpacity
                        style={styles.GameButton}
                        onPress={() => this.props.navigation.navigate("LeNombrePerdu")}
                    >
                        <Text style={styles.txtButtonSubmit1}> Le Nombre à Trouver ! </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.GameButton}
                        onPress={() => this.props.navigation.navigate("LePendu")}
                    >
                        <Text style={styles.txtButtonSubmit2}> Le Pendu ! </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.GameButton}
                        onPress={() => this.props.navigation.navigate("PileOuFace")}
                    >
                        <Text style={styles.txtButtonSubmit3}> Pile ou Face ? </Text>
                    </TouchableOpacity>




                </View>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleCreator: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    textCreator: {
        fontSize: 30,
    },
    txtButtonSubmit1: {
        fontSize: 15,
        fontWeight: 'bold',
        color:'green',
    },
    txtButtonSubmit2: {
        fontSize: 15,
        fontWeight: 'bold',
        color:'red',
    },
    txtButtonSubmit3: {
        fontSize: 15,
        fontWeight: 'bold',
        color:'skyblue',
    },
    txtButtonSubmit4: {
        fontSize: 15,
        fontWeight: 'bold',
        color:'pink',
    },
    GameButton:{
        borderRadius:55,
        borderWidth:0.5
    }
})
export default Menu;