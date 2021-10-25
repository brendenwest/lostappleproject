import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './Home';
import About from './About';
import Map from './Map';
import Apples from './Apples';
import Feed from './Feed';

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
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
          name="Map"
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
    </NavigationContainer>
  );
};

export default MainNavigation;
