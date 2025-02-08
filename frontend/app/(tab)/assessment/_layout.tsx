import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FinAssessment = () => {
  return (
    <View style={styles.container}>
      <Text>_layout</Text>
    </View>
  )
}

export default FinAssessment

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: 'blue',
    }
})