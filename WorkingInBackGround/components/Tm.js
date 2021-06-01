import React from 'react';
import {View, Text} from 'react-native';

export default function Tm() {
  const [second, setSecond] = React.useState(new Date().getUTCSeconds());

  React.useEffect(() => {
    setInterval(() => {
      setSecond(new Date().getSeconds());
    }, 1000)
  })
  return (
    <View>
      <Text>{second}</Text>
    </View>
  );
}