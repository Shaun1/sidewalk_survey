import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  Picker,
  Image,
} from 'react-native';
import {Button} from 'react-native-elements';

import {styles} from '../styles';

// ScreenTemplate wraps an entire screen.
export class StaticView extends React.Component<any, any> {
  render() {
    return (
      <React.Fragment>
        <SafeAreaView>
          <View style={styles.body}>{this.props.children}</View>
        </SafeAreaView>
      </React.Fragment>
    );
  }
}

// Scroller lets you scroll through a menu
export class ScrollerView extends React.Component<any, any> {
  render() {
    return (
      <React.Fragment>
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.body}>
            {this.props.children}
          </ScrollView>
        </SafeAreaView>
      </React.Fragment>
    );
  }
}

// TextBox is a standard text input box.
export function TextBox(props: any) {
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
export function BasicButton(props: any) {
  return (
    <View style={styles.sectionContainer}>
      <Button title={props.title} onPress={props.onPress} />
    </View>
  );
}

interface ChoiceType {
  value: string;
  label: string;
}
// ListPicker presents a selection where the user can pick one option
export function ListPicker(props: any) {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{props.title}</Text>
      <Picker selectedValue={props.value} onValueChange={props.onValueChange}>
        {props.choices.map((choice: ChoiceType, _: number) => {
          return (
            <Picker.Item
              key={choice.value}
              label={choice.label}
              value={choice.value}
            />
          );
        })}
      </Picker>
    </View>
  );
}

interface PhotoType {
  uri: string;
}

// PhotoGallery displays a set of photos
export function PhotoGallery(props: any) {
  return (
    <View>
      {props.photos.map((photo: PhotoType, _: number) => {
        return (
          <View style={styles.image} key={photo.uri}>
            <Image
              source={{uri: photo.uri}}
              style={{width: 200, height: 200, alignContent: 'center'}}
              key={photo.uri}
            />
          </View>
        );
      })}
    </View>
  );
}

// Debug prints an object for debugging
export function Debug(props: any) {
  return (
    <View>
      <Text style={styles.debugHeading}>{props.title}</Text>
      <Text style={styles.debug}>{JSON.stringify(props.data, null, 2)}</Text>
    </View>
  );
}
