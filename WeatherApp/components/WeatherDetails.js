import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { colors } from './../utils/index'
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'

export default function WeatherDetails({ currentWeather, unitsSystem }) {
  const  {
    main: { feels_like, humidity, pressure },
    wind: { speed }
  } = currentWeather

  const windSpeed = unitsSystem === 'metric' 
  ? `${Math.round(speed)} m/s` 
  : `${Math.round(speed)} miles/h`

  return (
    <View style={styles.weatherDetails}>
      <View style={styles.weatherDetailsRow}>
        <View style={styles.weatherDetailsBox}>
          <View style={styles.weatherDetailsRow}>
            <FontAwesome5 name="temperature-low" size={25} color={colors.PRIMARY_COLOR} />
            <View style={styles.weatherDetailsItems}>
              <Text>Feels Like</Text>
              <Text style={styles.textSecondary}>{feels_like}°</Text>
            </View>
          </View>
          <View style={styles.weatherDetailsRow}>
            <MaterialCommunityIcons name="water" size={30} color={colors.PRIMARY_COLOR} />
            <View style={styles.weatherDetailsItems}>
              <Text>Humidity</Text>
              <Text style={styles.textSecondary}>{humidity}%</Text>
            </View>
          </View> 
          <View style={styles.weatherDetailsRow}>
            <MaterialCommunityIcons name="weather-windy" size={30} color={colors.PRIMARY_COLOR} />
            <View style={styles.weatherDetailsItems}>
              <Text>Wind Speed</Text>
              <Text style={styles.textSecondary}>{speed}{windSpeed}</Text>
            </View>
          </View>  
          <View style={styles.weatherDetailsRow}>
            <MaterialCommunityIcons name="speedometer" size={30} color={colors.PRIMARY_COLOR} />
            <View style={styles.weatherDetailsItems}>
              <Text>Pressure</Text>
              <Text style={styles.textSecondary}>{pressure}</Text>
            </View>
          </View>        
        </View>        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  weatherDetails: {
    marginTop: 'auto',
    margin: 15,
    borderWidth: 1,
    borderColor: colors.BORDER_COLOR,
    borderRadius: 10
  },

  weatherDetailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    padding: 5
  },

  weatherDetailsBox: {
    flex: 1,
    padding: 20,
    alignContent: 'space-between'
  },

  weatherDetailsItems: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },

  textSecondary: {
    fontSize: 15,
    color: colors.SECONDARY_COLOR,
    fontWeight: '700',
    margin: 7
  }
})