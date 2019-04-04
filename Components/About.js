import React from 'react';
import ptAlan from '../Images/ptAlan.jpeg'
import ptTheo from '../Images/ptTheo.jpg'
import ptRyad from '../Images/ptRyad.jpg'
import { StyleSheet, Text, View, Image, TextInput, Alert, TouchableOpacity } from 'react-native';
class About extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleCreator}>Game Factory's Creator</Text>
                <Text style={styles.textCreator} >Alan </Text>
                <Image
                    source={ptAlan}
                    style={styles.avatar}
                />
                <Text style={styles.textCreator}>Ryad </Text>
                <Image
                    source={ptRyad}
                    style={styles.avatar}
                />
                <Text style={styles.textCreator}>Theo </Text>
                <Image
                    source={ptTheo}
                    style={styles.avatar}
                />
                <Text style={styles.law}>2018-2019 RIGER'X TEAM - (All Rights Reserved) - Legal Mentions -</Text>
            </View>
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
        fontSize: 20,
        marginTop: '8%',
    },
    law: {
        flex: 1,
        flexDirection: 'row',
        marginTop: '34%',
        fontSize: 10
    },
    avatar: {
        width: 80,
        height: 80
    }
})
export default About;