/**
 * Sidewalk Survey App
 * https://github.com/Shaun1/sidewalk_survey
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Picker,
} from 'react-native';

import { Button } from 'react-native-elements';

class PageTemplate extends React.Component {
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
    )
  }
}

class HomePage extends React.Component {
  render() {
    return (
      <PageTemplate>
        <View style={styles.sectionContainer}>
          <Button title="New Entry" />
        </View>
      </PageTemplate>
    )
  }
}

class NewEntryForm extends React.Component {
  state = {
    address: "",
    street_face: "",
    notes: "",
    condition: null,
    material: null,
    img_srcs: []
  }
  render() {
    return (
      <PageTemplate>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Address:</Text>
            <TextInput style={styles.textInput} />
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Street Face:</Text>
            <TextInput style={styles.textInput} />
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Notes:</Text>
            <TextInput style={styles.textInput} multiline={true} />
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Condition:</Text>
            <Picker
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ language: itemValue })
              }>
              <Picker.Item label="Good - Meets ADA Standards" value="good" />
              <Picker.Item label="Fair - " value="fair" />
              <Picker.Item label="Poor - " value="poor" />
              <Picker.Item label="Missing - No Sidewalk" value="missing" />
            </Picker>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Material:</Text>
            <Picker
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ language: itemValue })
              }>
              <Picker.Item label="Concrete" value="concrete" />
              <Picker.Item label="Brick" value="brick" />
            </Picker>
          </View>
          <View style={styles.sectionContainer}>
            <Button title="Add Photo" />
          </View>
          <View style={styles.sectionContainer}>
            <Button title="Submit" />
          </View>
        </View>
      </PageTemplate>
    )
  }
}

const App = () => {
  return (<HomePage />);
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  footer: {
    color: 'steelblue',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
