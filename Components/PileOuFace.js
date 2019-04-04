import React from 'react';
import { TouchableOpacity, TextInput, Image, StyleSheet, Text, View } from 'react-native';


class PileOuFace extends React.Component {
    constructor(props) {
        super(props)
        this.state = { count: 0, display: true, result : "Let's Play"}
    }


    onPressP = () => {
        if (this.pileOuface() == 1) {
            console.log('C\'est Pile, vous avez gagné')
            this.setState({ result:'C\'est Pile, vous avez gagné'})
        }
        else {
            console.log('C\'est Face, vous avez perdu')
            this.setState({ result: 'C\'est Face, vous avez perdu'})
        }
    }
    onPressF = () => {
        if (this.pileOuface() == 1) {
            console.log('C\'est Pile, vous avez perdu')
            this.setState({ result: 'C\'est Pile, vous avez perdu'})
        }
        else {
            console.log('C\'est Face, vous avez gagné')
            this.setState({ result: 'C\'est Face, vous avez gagné'}) 
        }
    }

    pileOuface() {
        return Math.floor(Math.random() * Math.floor(2))
    }

    render() {
        return (
            <View style={{ backgroundColor: 'white' }} >
                {this.state.display == true ?
                    <View>
                        <View>
                            <Text>Pile ou Face?</Text>
                        </View>
                        <View style={{ borderWidth: 5, borderColor: 'black' }}>
                            <TouchableOpacity onPress={this.onPressP}>
                                <Text>
                                    Pile
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ borderWidth: 5, borderColor: 'black' }}>
                            <TouchableOpacity onPress={this.onPressF}>
                                <Text>
                                    Face
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    : console.log()
                }

                <View>
                    <TouchableOpacity
                        style={styles.buttonAbout}
                        onPress={() => this.pileOuface}
                    >
                        <Text style={styles.txtButtonSubmit2}> {this.state.result}  </Text>
                    </TouchableOpacity>
                    <Image
                        style={styles.gif}
                        source={{ uri: '../Images/7736b1d30d303e4.gif' }} />
                </View>
            </View>

        );
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
        color: 'green',
    },
    txtButtonSubmit2: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'red',
    },
    txtButtonSubmit3: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'skyblue',
    },
    txtButtonSubmit4: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'pink',
    },
    gif: {
        width: '100%',
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20%'
    }
})

export default PileOuFace

