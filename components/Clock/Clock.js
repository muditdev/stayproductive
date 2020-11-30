import React from 'react'
import { View, Text } from 'react-native'
import { secondsToClock } from '../../utilities/secondsToClock';


const Clock = ({ time }) => {
	return (
		<View>
			<Text style={{ fontSize: 70, fontWeight: '600', color: '#fff', textAlign: 'center' }}>
				{secondsToClock(time)}
			</Text>
		</View>
	)
}

export default Clock
