import LinearGradient from 'react-native-linear-gradient'

import React, { Component } from 'react'
import { SafeAreaView,StyleSheet } from 'react-native'

export default class Linear extends Component {
  render(children) {
    return (
      <LinearGradient colors={[ rgba(14, 18, 177, 0.87),rgba(14, 177, 138, 0.84)]} 
      style={styles.container}>
        <SafeAreaView style={styles.items}>
            {children}
        </SafeAreaView>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    items: {
        flex: 1
    }
})