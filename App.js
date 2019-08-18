/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Picker,
} from 'react-native';

import { Button } from 'react-native-elements';

import {
  Colors,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
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
                  this.setState({language: itemValue})
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
                  this.setState({language: itemValue})
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
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
