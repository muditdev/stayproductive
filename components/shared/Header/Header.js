import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.logoTxt}>StayProductive</Text>
      </View>
      <View>
        <Text style={{color: '#fff'}}>i</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0F0E17',
    width: '100%',
    height: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  logoTxt: {
    color: '#fff',
    fontWeight: '600',
    fontSize:18
  }
})

export default Header
