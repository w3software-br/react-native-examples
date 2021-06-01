import React, { useState } from 'react';
import { Text, View } from 'react-native';
import CheckInternet from './helpers/CheckeInternet';

import Connected from './screens/Connected';
import NoConnected from './screens/NoConnected';

export default function App() {
  const [connectStatus, setConnectStatus] = useState(false);
  
  CheckInternet().then(res => {
    setConnectStatus(res);
  });

  return (
    connectStatus ? (<Connected />) : (<NoConnected />)
  );

}

