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
          name="About"
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

    // <NavigationContainer>
    //   <Tab.Navigator
    //     tabBarLabelStyle="blue"
    //     screenOptions={({route}) => ({
    //       tabBarIcon: ({focused}) => {
    //         let iconName;

    //         if (route.name === 'Home') {
    //           iconName = focused ? 'home-circle' : 'home';
    //         } else if (route.name === 'About') {
    //           iconName = focused ? 'information' : 'information-outline';
    //         } else if (route.name === 'Map') {
    //           iconName = focused ? 'map-marker-multiple' : 'map-marker-alert';
    //         } else if (route.name === 'Apples') {
    //           iconName = focused ? 'food-apple' : 'food-apple-outline';
    //         } else if (route.name === 'Feed') {
    //           iconName = focused ? 'newspaper' : 'newspaper-variant-outline';
    //         }

    //         return <Icon name={iconName} size={25} color="blue" />;
    //       },
    //       tabBarActiveTintColor: 'blue',
    //       tabBarpressColor: 'true',
    //       tabBarinactiveTintColor: 'green',
    //       tabBarLabelStyle: {
    //         fontSize: 17,
    //       },
    //     })}>
    //     <Tab.Screen name="Home" component={Home} />
    //     <Tab.Screen name="About" component={About} />
    //     <Tab.Screen name="Map" component={Map} />
    //     <Tab.Screen name="Apples" component={Apples} />
    //     <Tab.Screen name="Feed" component={Feed} />
    //   </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default MainNavigation;
