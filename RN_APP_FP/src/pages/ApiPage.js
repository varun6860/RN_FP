import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';

class ApiPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  async componentDidMount() {
    this.setState({isLoading: true, users: []});
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (response.ok) {
      const users = await response.json();
      setTimeout(() => {
        this.setState({users, isLoading: false});
      }, 1000);

      console.log('user', users);
    } else {
      this.setState({isLoading: false});
    }
  }

  render() {
    return (
      <View style={styles.screen}>
        {!this.state.isLoading ? (
          <FlatList
            data={this.state.users}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    flex: 1,
                    borderRadius: 10,
                    marginLeft: 20,
                    marginRight: 20,
                    marginTop: 10,
                    backgroundColor: 'lightblue',
                    alignItems: 'center',
                    padding: 10,
                  }}>
                  <Text>
                    {'NAME : '}
                    {item.name}
                  </Text>
                  <Text>
                    {'USER-NAME : '}
                    {item.username}
                  </Text>
                  <Text>
                    {'MOBILE : '}
                    {item.phone}
                  </Text>
                  <Text>
                    {'WEBSITE : '}
                    {item.website}
                  </Text>
                </View>
              );
            }}></FlatList>
        ) : (
          <View style={{flex: 1, justifyContent: 'center'}}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default ApiPage;
