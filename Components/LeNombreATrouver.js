import React from 'react';
import { StyleSheet, Text, View,FlatList,Button,TextInput,Alert, TouchableOpacity, Vibration} from 'react-native';
class Test extends React.Component{

    constructor(props) {
        super(props)
        this.numberRandom = this.generated()
        this.state ={
            messageResult: "",
            tentative: 0,
            resetButton: "Reset",
            inputSearch: "",
            displayButton: false
        }
    }
    
    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    generated() {
        let random = this.getRandomInt(100)
        return random
    }
    getValidValue(){
        Vibration.vibrate(200)
        console.log('numberPlayer : ',this.state.inputSearch)
        console.log('numberRandom : ',this.numberRandom)
        if(this.state.inputSearch > this.numberRandom){
            this.setState({messageResult:"plus petit"})
            this.setState({tentative:this.state.tentative+=1})
        }else if(this.state.inputSearch < this.numberRandom){
            this.setState({messageResult:"plus grand"})
            this.setState({tentative:this.state.tentative+=1})
        }else if(this.state.inputSearch == this.numberRandom){
            this.setState({messageResult:"gagner"})
            this.alertGame();
            this.setState({resetButton:"Re Jouer"})
            this.setState({displayButton:true})
        }else{

        }
        this.setState({inputSearch: ""})
        console.log('messageresult : ',this.state.messageResult)
    }
    getValue(value){
        this.setState({inputSearch: value})
    }
    resetGame(){
        setTimeout(() => {
            this.setState({messageResult:"Le jeu va redémarer"})
            setTimeout(() => {
                this.setState({displayButton:false})
                this.setState({inputSearch: ""})
                this.setState({messageResult:""})
                this.setState({tentative:0})
                this.numberRandom = this.generated();
                this.setState({resetButton:"Reset"})
            }, 3000); 
        }, 1000);

    }
    alertGame(){
        Alert.alert(
            'Vous avez gagner',
            'Voulez vous rejouer ? (OUI / NON)',
            [
              {text: 'NON', onPress: () => this.setState({resetButton:"Re Jouer"}), style: 'cancel'},
              {text: 'OUI', onPress: () => this.resetGame()},
            ],
            { cancelable: false }
          )
    }

    render(){
        return(
            <View style={styles.main_container}>
                <View style={styles.play_container}>
                    <Text>{this.state.messageResult}</Text>
                    <TextInput
                        id="inputNumber"
                        style={styles.inputValueGame}
                        value={this.state.inputSearch}
                        placeholder="enter value"
                        keyboardType="numeric"
                        maxLength={3} 
                        underlineColorAndroid='transparent'
                        onChangeText={(number) => this.getValue(number)}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={()=> this.getValidValue()}
                    >
                        <Text style={styles.txtButtonSubmit}> {'Submit'.toUpperCase()} </Text>
                    </TouchableOpacity>
                    {this.state.displayButton == true?
                        <TouchableOpacity
                            style={styles.button}
                             onPress={()=> this.resetGame()}
                        >
                            <Text style={styles.txtButtonSubmit}> {this.state.resetButton} </Text>
                        </TouchableOpacity>
                    : console.log('')
                    }
                    <Text>number of attempts : {this.state.tentative}</Text>
                </View>
                <TouchableOpacity
                        style={styles.buttonAbout}
                        onPress={()=> this.props.navigation.navigate("About")}
                    >
                        <Text style={styles.txtButtonSubmit}> ABOUT </Text>
                    </TouchableOpacity>
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
    inputValueGame:{
        width:100,
        borderRadius: 55,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        padding: 10, 
        textAlign:'center',
        margin: 5
    },
    button:{
        width:100,
        borderRadius: 55,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        padding: 10, 
        margin: 5,
        backgroundColor: '#368edb',
    },
    buttonAbout:{
        flex:0,
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
export default Test;