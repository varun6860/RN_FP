import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  FlatList,
  ImageBackground,
} from 'react-native';
import Carousel from 'react-native-banner-carousel-updated';
const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 300;

const images = [
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcQUCd9mi2eaLhtkCQ7jfFEB-pKKxo0pngRw&usqp=CAU',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtG3lyXGcOYxVxpW7mluzRfu2mxZKT2okh7Q&usqp=CAU',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2eRZ0sYsbGI6u9AxQLfy1IJiipKIHzlziGQ&usqp=CAU',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5_GTQuWyaxq55hIomn-dOGOy_eQwKbP9i8Q&usqp=CAU',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVK_IzjqfHMnXNRaPu7Z3XEBA-yH0jpVV8sw&usqp=CAU',
  },
];

class HomePage extends React.Component {
  renderPage(image, index) {
    return (
      <View key={index}>
        <Image
          style={{
            width: BannerWidth,
            height: BannerHeight,
            resizeMode: 'contain',
            borderRadius: 15,
            borderColor: 'red',
          }}
          source={{uri: image.src}}
        />
      </View>
    );
  }
  render() {
    return (
      <>
        <View
          style={{
            backgroundColor: 'white',
            alignItems: 'center',
            paddingTop: 40,
          }}>
          <Text
            style={{
              color: 'darkblue',
              fontSize: 25,
            }}>
            {'WELCOME TO FINANCEPEER'}
          </Text>
        </View>
        <ImageBackground
          source={{
            uri: 'data:image/png;base64,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',
          }}
          resizeMode="cover"
          style={styles.screen}>
          <View style={styles.container}>
            <Carousel
              autoplay
              autoplayTimeout={5000}
              loop
              index={0}
              pageSize={BannerWidth}
              useNativeDriver={true}>
              {images.map((image, index) => this.renderPage(image, index))}
            </Carousel>
          </View>
        </ImageBackground>
      </>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    // padding: 8,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  container: {
    // flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export default HomePage;
