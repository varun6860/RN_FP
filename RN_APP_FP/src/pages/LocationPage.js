import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import GetLocation from '@react-native-community/geolocation';
const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'location Permission',
        message: ' App needs access to your Location ',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the location services');
    } else {
      console.log('location permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

class LocationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: '',
      long: '',
    };
  }
  componentDidMount() {
    let config = {
      skipPermissionRequests: false,
      authorizationLevel: 'whenInUse',
    };
    GetLocation.setRNConfiguration(config);
    if (Platform.OS === 'android') {
      requestLocationPermission();
    }
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text
          style={{
            paddingTop: 20,
            fontSize: 24,
            color:'black'
          }}>
          {'Click Below for Your Coordinates'}
        </Text>
        <TouchableOpacity
          style={{
            paddingTop: 30,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => {
            if (Platform.OS === 'ios') {
              GetLocation.requestAuthorization();
            }
            
            GetLocation.getCurrentPosition(response => {
              this.setState({
                lat: response.coords.latitude,
                long: response.coords.longitude,
              });
            });
          }}>
          <View
            style={{
              backgroundColor: 'lightblue',
              width: 80,
              height: 30,
              borderRadius: 5,
              marginTop: 10,
            }}>
            <Text
              style={{
                fontSize: 18,
                justifyContent: 'center',
                alignSelf: 'center',
                textAlign: 'center',
                paddingTop: 4,
                
              }}>
              {'Find'}
            </Text>
          </View>
        </TouchableOpacity>
        <View>
          <Text
            style={{
              fontSize: 20,
              justifyContent: 'center',
              alignSelf: 'center',
              textAlign: 'center',
              marginTop: 20,
              color:'black'
            }}>
            {'Latitude : '} {this.state.lat}
          </Text>
          <Text
            style={{
              fontSize: 20,
              justifyContent: 'center',
              alignSelf: 'center',
              textAlign: 'center',
              marginTop: 20,
              color:'black',
            }}>
            {'Longitude : '} {this.state.long}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LocationPage;
