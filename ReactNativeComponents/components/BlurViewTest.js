import React from 'react';
import { Image, Text, StyleSheet, View } from 'react-native';
import { BlurView } from 'expo-blur';

const uri = 'https://s3.amazonaws.com/exp-icon-assets/ExpoEmptyManifest_192.png';

export default function BlurViewTest() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image style={styles.blurredImage} source={require('./../assets/onion-skin-diagram.gif')} />

        {/* Adjust the tint and the itensity */}
        <BlurView itensity={100} style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}>
          <Text style={{color: 'red'}}> This is a simple BlurView example </Text>
        </BlurView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  blurredImage: {
    width: 192,
    height: 192,
    opacity: 0.5
  },
  nonBlurredContent: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});
