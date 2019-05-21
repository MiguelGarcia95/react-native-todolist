import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

class Note extends Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.note}>
        <Text style={styles.noteText}>{this.props.val.date}</Text>
        <Text style={styles.noteText}>{this.props.val.text}</Text>

        <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>

        </TouchableOpacity>

      </View>
    )
  }
}

export default Note;