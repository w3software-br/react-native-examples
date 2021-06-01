import AsyncStorage from '@react-native-async-storage/async-storage';

const User = {

  save: async function(data) {
    const jsonData = JSON.stringify(data);
    try {
      await AsyncStorage.setItem('user', jsonData);
      return jsonData;
    } catch (error) {
      return error;
    }
  },

  getData: async function() {
    try {
      const user = await AsyncStorage.getItem('user');
      if(user !== null) {
        return user;
      } else {
        return null;
      }
    } catch (error) {
      return error;
    }
  }

}

export default User;