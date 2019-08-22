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

import {Button} from 'react-native-elements';

import {createStackNavigator, createAppContainer} from 'react-navigation';

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
    );
  }
}

class HomePage extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <PageTemplate>
        <View style={styles.sectionContainer}>
          <Button
            title="Add Sidewalk Entry"
            onPress={() => navigate('NewEntryForm')}
          />
        </View>
      </PageTemplate>
    );
  }
}

class NewEntryForm extends React.Component {
  state = {
    address: '',
    street_face: '',
    notes: '',
    condition: null,
    material: null,
    img_srcs: [],
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <PageTemplate>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Address:</Text>
            <TextInput
              style={styles.textInput}
              value={this.state.address}
              onChangeText={address => this.setState({address})}
            />
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Street Face:</Text>
            <TextInput
              style={styles.textInput}
              value={this.state.street_face}
              onChangeText={street_face => this.setState({street_face})}
            />
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Notes:</Text>
            <TextInput
              style={styles.textInput}
              multiline={true}
              value={this.state.notes}
              onChangeText={notes => this.setState({notes})}
            />
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Condition:</Text>
            <Picker
              selectedValue={this.state.condition}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({condition: itemValue})
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
              selectedValue={this.state.material}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({material: itemValue})
              }>
              <Picker.Item label="Concrete" value="concrete" />
              <Picker.Item label="Brick" value="brick" />
            </Picker>
          </View>
          <View style={styles.sectionContainer}>
            <Button title="Add Photo" />
          </View>
          <View style={styles.sectionContainer}>
            <Button title="Submit" onPress={() => navigate('HomePage')} />
          </View>
          <View>
            <Text>{JSON.stringify(this.state, null, 2)}</Text>
          </View>
        </View>
      </PageTemplate>
    );
  }
}

const MainNavigator = createStackNavigator({
  HomePage: {screen: HomePage},
  NewEntryForm: {screen: NewEntryForm},
});

const App = createAppContainer(MainNavigator);

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
    borderWidth: 1,
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
