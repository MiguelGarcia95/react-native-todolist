import React, { Component } from 'react'
import { 
  StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity 
} from 'react-native'
import Note from './Note';
import { regExpLiteral } from '@babel/types';

class Main extends Component {
  state = {
    noteArray: [],
    noteText: ''
  }

  deleteNoteKey = key => {
    this.state.noteArray.splice(key, 1);
    this.setState({noteArray: this.state.noteArray});
  }

  addNote = () => {
    if (this.state.noteText) {
      let d = new Date();
      this.state.noteArray.push({
        date: `${ d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`,
        text: this.state.noteText
      })
      this.setState({
        noteArray: this.state.noteArray, 
        noteText: ''
      });
    }
  }

  displayNotes = (notes) => {
    return notes.map((note, key) => {
      return <Note key={key} keyval={key} val={note} deleteMethod={this.deleteNoteKey} />
    })
  }

  render() {
    const {noteArray, noteText} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>- NOTER -</Text>
        </View>
        <ScrollView style={styles.scrollContainer}>
          {this.displayNotes(noteArray)}
        </ScrollView>

        <View style={styles.footer}>
          <TextInput 
            style={styles.textInput} 
            placeholder={'>note'} 
            placeholderTextColor='white' 
            underlineColorAndroid='transparent'
            onChangeText={(noteText) => this.setState({noteText})}
            value={noteText}
          >

          </TextInput>
        </View>

        <TouchableOpacity onPress={this.addNote} style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#e91e63',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    padding: 26,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed'
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: '#e91e63',
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24
  }
});


export default Main;