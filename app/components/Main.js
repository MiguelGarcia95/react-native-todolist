import React, { Component } from 'react'
import { 
  StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity 
} from 'react-native'

class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>- NOTER -</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default Main;