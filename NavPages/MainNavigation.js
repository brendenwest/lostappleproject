import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './Home';
import About from './About';
import Map from './Map';
import Apples from './Apples';
import Feed from './Feed';
import AppleDetails from './AppleDetails';

const Tab = createBottomTabNavigator();


function MainNav({navigation}) {
  return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'grey',
          tabBarLabelStyle: {
            fontSize: 14,
            textTransform: 'uppercase',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={28} />
            ),
          }}
        />
        <Tab.Screen
          name="About Us"
          component={About}
          options={{
            tabBarLabel: 'About',
            tabBarIcon: ({color, size}) => (
              <Icon name="information" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Map of found apples"
          component={Map}
          options={{
            tabBarLabel: 'Map',
            tabBarIcon: ({color, size}) => (
              <Icon name="map-marker-multiple" color={color} size={28} />
            ),
          }}
        />
        <Tab.Screen
          name="Apple List"
          component={Apples}
          options={{
            tabBarLabel: 'Apples',
            tabBarIcon: ({color, size}) => (
              <Icon name="food-apple" color={color} size={28} />
            ),
          }}
        />
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarLabel: 'Feed',
            tabBarIcon: ({color, size}) => (
              <Icon name="newspaper-variant-outline" color={color} size={28} />
            ),
          }}
        />
      </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function MainNavigation({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="MainNav"
          component={MainNav} />
        <Stack.Screen
          name="AppleDetails"
          component={AppleDetails}
          options={{headerShown: true}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainNavigation;




