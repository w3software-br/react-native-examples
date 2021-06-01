import React from 'react';
import { Image, Text, View } from 'react-native';
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';

export default class AppLoadingTest extends React.Component {
  state = {
    isReady: false,
  };

  render() {
    if (!this.state.isReady) {
      return (
        <View style={{ flex: 1, alignItems: 'center'}}>
          <AppLoading
            startAsync={this._cacheResourcesAsync}
            onFinish={() => this.setState({ isReady: true })}
            onError={console.warn}
          />
        </View>
      ); }

    return (
      <View style={{ flex: 1 }}>
        <Image source={require('./../assets/favicon.png')} />
      </View>
    );
  }

  async _cacheResourcesAsync() {
    const images = [require('./../assets/favicon.png')];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  }
}
