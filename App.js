import React, { useRef, useReducer, useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Vibration, Platform } from 'react-native';
import styles from './app.style'
import Clock from './components/Clock/Clock';

const initialClockData = {
  isWork: false,
  duration: 0
}
function minToSec(n) { return n * 60 }
function clockReducer(state, action) {
  switch (action.type) {
    case 'SET_TYPE':
      return { ...state, isWork: action.payload }
    case 'SET_DURATION':
      return { ...state, duration: action.payload }
    case 'DECREMENT_DURATION':
      if (state.duration > 0) {
        return { ...state, duration: state.duration - 1 }
      }
      return state
    case 'CHANGE_TYPE':
      return { ...state, isWork: !state.isWork }
    default:
      return state
  }
}
export default function App() {
  const [clock, dispatchClock] = useReducer(clockReducer, initialClockData);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const timerRef = useRef(null);
  const durationRef = useRef(clock.duration);
  useEffect(() => {
    return () => {
      clearInterval(timerRef.current)
    }
  }, [])

  useEffect(() => {
    durationRef.current = clock.duration;
    if (clock.duration === 0) {
      clearInterval(timerRef.current)
      if (Platform.OS === "android") {
        Vibration.vibrate(2 * 1000)
      }
      timerRef.current = null;
      setIsTimerRunning(false)
      dispatchClock({ type: 'CHANGE_TYPE' })
    }
    // console.log('clock.duration watcher', clock.duration)
  }, [clock.duration])

  const startTimer = () => {
    const duration = clock.duration > 0 ? clock.duration : (clock.isWork ? minToSec(25) : minToSec(5));
    setIsTimerRunning(true);
    dispatchClock({ type: 'SET_DURATION', payload: duration })
    timerRef.current = setInterval(() => {
      dispatchClock({ type: 'DECREMENT_DURATION' })
    }, 1000)
  }
  const toggleTimer = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setIsTimerRunning(false)
    } else {
      startTimer();
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: '#fff' }}>Timer</Text>
      <TouchableOpacity style={{ width: 100 + '%' }} onPress={toggleTimer}>
        <Clock time={clock.duration} />
      </TouchableOpacity>
      <StatusBar style="auto" />

      {!isTimerRunning &&
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center'
        }}>
          <TouchableOpacity onPress={startTimer} style={{ backgroundColor: '#ff8906', color: '#000', padding: 10, borderRadius: 4 }}>
            <Text style={{ color: '#000', fontWeight: '900' }}>
              {clock.duration > 0 ? 'Resume ' : 'Start '}
              {clock.isWork ? 'Work' : 'Break'}
            </Text>
          </TouchableOpacity>
        </View>
      }
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   ,
// });
