import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import UploadImage from './UploadImage';
import NewsFeed from './NewsFeed';
const Tab = createMaterialBottomTabNavigator();

const MainScreen = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="UploadImage"
        activeColor="#ffffff"
        inactiveColor="#9e9e9e"
        barStyle={{backgroundColor: '#5B2C6F'}}>
        <Tab.Screen
          name="Upload Image"
          component={UploadImage}
          options={{
            tabBarLabel: 'Upload Image',
            tabBarIcon: ({color, focused}) => (
              <Icon
                name="ios-attach"
                color={color}
                focused={focused}
                size={25}
              />
            ),
          }}
        />
        <Tab.Screen
          name="News Feed"
          component={NewsFeed}
          options={{
            tabBarLabel: 'News Feed',
            tabBarIcon: ({color, focused}) => (
              <Icon name="ios-home" color={color} focused={focused} size={25} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainScreen;
