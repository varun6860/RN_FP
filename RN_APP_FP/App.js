import * as React from 'react';
import {Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LocationPage from './src/pages/LocationPage';
import ApiPage from './src/pages/ApiPage';
import HomePage from './src/pages/HomePage';
import MyAccountPage from './src/pages/MyAccountPage';
import DataPage from './src/pages/DataPage';

const BottomTab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          headerShown: true,
          tabBarStyle: {},
        }}>
        <BottomTab.Screen
          options={{
            tabBarLabel: ({focused}) => (
              <Text
                style={{
                  color: focused ? '#ed088c' : '#005699',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  fontSize: 12,
                }}>
                Home
              </Text>
            ),
            tabBarIcon: ({focused}) => (
              <Image
                source={require('./src/assets/images/home.png')}
                style={{
                  marginTop: hp('1%'),
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: wp('5.57%'),
                  height: wp('5.57%'),
                  tintColor: focused ? '#ed088c' : '#005699',
                  resizeMode: 'contain',
                }}
              />
            ),
          }}
          name="Home"
          component={HomePage}
        />

        <BottomTab.Screen
          options={{
            tabBarLabel: ({focused}) => (
              <Text
                style={{
                  color: focused ? '#ed088c' : '#005699',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  fontSize: 12,
                }}>
                Data
              </Text>
            ),
            tabBarIcon: ({focused}) => (
              <Image
                source={require('./src/assets/images/editIcon.png')}
                style={{
                  marginTop: hp('1%'),
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: wp('5.57%'),
                  height: wp('5.57%'),
                  tintColor: focused ? '#ed088c' : '#005699',
                  resizeMode: 'contain',
                }}
              />
            ),
          }}
          name="Data Page"
          component={DataPage}
        />

        <BottomTab.Screen
          options={{
            tabBarLabel: ({focused}) => (
              <Text
                style={{
                  color: focused ? '#ed088c' : '#005699',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  fontSize: 12,
                }}>
                API
              </Text>
            ),
            tabBarIcon: ({focused}) => (
              <Image
                source={require('./src/assets/images/apicall.png')}
                style={{
                  marginTop: hp('1%'),
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: wp('5.57%'),
                  height: wp('5.57%'),
                  tintColor: focused ? '#ed088c' : '#005699',
                  resizeMode: 'contain',
                }}
              />
            ),
          }}
          name="API"
          component={ApiPage}
        />

        <BottomTab.Screen
          options={{
            tabBarLabel: ({focused}) => (
              <Text
                style={{
                  color: focused ? '#ed088c' : '#005699',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  fontSize: 12,
                }}>
                Location
              </Text>
            ),
            tabBarIcon: ({focused}) => (
              <Image
                source={require('./src/assets/images/location.png')}
                style={{
                  marginTop: hp('1%'),
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: wp('5.57%'),
                  height: wp('5.57%'),
                  tintColor: focused ? '#ed088c' : '#005699',
                  resizeMode: 'contain',
                }}
              />
            ),
          }}
          name="Location"
          component={LocationPage}
        />

        <BottomTab.Screen
          options={{
            tabBarLabel: ({focused}) => (
              <Text
                style={{
                  color: focused ? '#ed088c' : '#005699',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  fontSize: 12,
                }}>
                My Account
              </Text>
            ),
            tabBarIcon: ({focused}) => (
              <Image
                source={require('./src/assets/images/my-profile.png')}
                style={{
                  marginTop: hp('1%'),
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: wp('5.57%'),
                  height: wp('5.57%'),
                  tintColor: focused ? '#ed088c' : '#005699',
                  resizeMode: 'contain',
                }}
              />
            ),
          }}
          name="MyAccount"
          component={MyAccountPage}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default App;
