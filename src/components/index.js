import React from 'react';
import {SafeAreaView, ScrollView, View, Text, TextInput} from 'react-native';
import {Button} from 'react-native-elements';

import {styles} from '../styles';

// ScreenTemplate wraps an entire screen.
export class ScreenTemplate extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            {this.props.children}
          </ScrollView>
        </SafeAreaView>
      </React.Fragment>
    );
  }
}

// TextBox is a standard text input box.
export function TextBox(props) {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{props.title}</Text>
      <TextInput
        style={styles.textInput}
        value={props.value}
        onChangeText={props.onChangeText}
      />
    </View>
  );
}

// BasicButton is a basic button.
export function BasicButton(props) {
  return (
    <View style={styles.sectionContainer}>
      <Button title={props.title} onPress={props.onPress} />
    </View>
  );
}

// Debug prints an object for debugging
export function Debug(props) {
  return (
    <View>
      <Text style={styles.sectionTitle}>{props.title}</Text>
      <Text>{JSON.stringify(props.data, null, 2)}</Text>
    </View>
  );
}
