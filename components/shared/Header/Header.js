import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, View, Text, StatusBar } from 'react-native'
import colors from '../../../constants/colors';
const Header = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#000'} />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <MaterialIcons name="details" size={40} color="#fff" />
        <Text style={styles.logoTxt}>Stay Productive</Text>
      </View>
      <View style={styles.sessionCountView}>
        <Text style={styles.sessionCountText}>01</Text>
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
    padding: 10,
    borderWidth: 1,
    borderBottomColor: 'rgba(255,255,255, .15)',
    marginBottom: 15
  },
  logoTxt: {
    color: '#fff',
    fontFamily: 'RobotoMono_700Bold',
    fontSize: 12
  },
  sessionCountView:{
    // padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 2,
    minWidth: 30,
    height: 30,
    borderBottomEndRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 5
  },
  sessionCountText: {
    fontFamily: 'RobotoMono_500Medium',
    color: '#fff',
    fontSize: 16
  }
})

export default Header
