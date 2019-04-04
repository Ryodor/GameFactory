// Navigation/Navigation.js
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import About from '../Components/About'
import Menu from '../Components/Menu'
import LeNombrePerdu from '../Components/LeNombrePerdu'
import LePendu from '../Components/LePendu'
import PileOuFace from '../Components/PileOuFace'
import ScoreHubFTN from '../Components/LogFindTheNumber'

const GameListStackNavigator = createStackNavigator({
  Menu: {
    screen: Menu,
    navigationOptions: {
      title: 'Menu Gaming'
    }
  },
  LeNombrePerdu: {
    screen: LeNombrePerdu,
    navigationOptions: {
      title: 'Find The Number'
    }
  },
  LePendu: {
    screen: LePendu,
    navigationOptions: {
      title: 'Le Pendu'
    }
  },
  About: {
    screen: About,
    navigationOptions: {
      title: 'About'
    }
  },
  PileOuFace: {
    screen: PileOuFace,
    navigationOptions: {
      title: 'PileOuFace'
    }
  },
  ScoreHubFTN: {
    screen: ScoreHubFTN,
    navigationOptions: {
      title: 'Score Hub'
    }
  },
})

const TabNavigator = createBottomTabNavigator(
  {
    Home: GameListStackNavigator,
    About: About,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'white',
    },
  }
);

export default TabNavigator