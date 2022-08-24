import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {launchCamera} from 'react-native-image-picker';
const image = require('../assets/images/profile.png');
class MyAccountPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uri: '',
    };
  }
  render() {
    return (
      <>
        {this.state.uri === '' ? (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{
                marginTop: 100,
                height: 200,
                width: 200,
              }}
              source={image}></Image>
          </View>
        ) : (
          <View>
            <Image
              style={{
                marginLeft: 80,
                marginTop: 80,
                height: 200,
                width: 200,
              }}
              source={{
                uri: this.state.uri,
              }}></Image>
          </View>
        )}
        <TouchableOpacity
          style={{
            paddingTop: 30,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={async () => {
            await launchCamera(
              {
                mediaType: 'photo',
                includeBase64: false,
                maxHeight: 200,
                maxWidth: 200,
              },
              async response => {
                this.setState({
                  uri: response.assets[0].uri,
                });
                console.log('varun-response', response);
              },
            );
          }}>
          <View>
            <Text
              style={{
                color: 'black',
              }}>
              {'Click here to Upload Selfie'}
            </Text>
          </View>
        </TouchableOpacity>
      </>
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

export default MyAccountPage;
