import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Fetcher from '../components/Fetcher';
import Results from '../components/Results';

export default class App extends React.Component {
  render() {
    return (
      < View style={styles}>
        <Fetcher />
        <Results />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
