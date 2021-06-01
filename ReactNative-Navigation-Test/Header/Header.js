import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function Header({ navigation, title }) {
  const openMenu = () => {
    navigation.openDrawer();
  }

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.icon} onPress={openMenu}>
        <Ionicons name="md-menu" size={28} color="black" />
      </TouchableOpacity>
      <View style={styles.headerTitle}>
        <Text style={styles.headerText}>
          {title}
        </Text>
      </View>
    </View>
  );

} 

const styles = StyleSheet.create({
  header: {
    marginTop: 26,
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center"
  },

  headerTitle: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center"
  },

  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#000",
    letterSpacing: 1
  },

  icon: {
    position: "absolute",
    left: 16,
    top: 15
  }
});

export default Header;