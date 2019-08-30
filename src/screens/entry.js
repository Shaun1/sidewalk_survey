// EntryScreen is where a user enters information about the sidewalks on a property face.

import React from 'react';

import {ScreenTemplate, TextBox, Debug, BasicButton} from '../components';

import {View, Text, Picker, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';

import {styles} from '../styles';

export class EntryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      app_version: GLOBALS.app_version,
      campaign_code: GLOBALS.campaign_code,
      user: GLOBALS.user,
      address: '',
      street_face: '',
      notes: '',
      condition: null,
      material: null,
      photos: [],
    };
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScreenTemplate>
        <TextBox
          title="Address:"
          value={this.state.address}
          onChangeText={address => this.setState({address})}
        />
        <TextBox
          title="Street Face:"
          value={this.state.street_face}
          onChangeText={street_face => this.setState({street_face})}
        />
        <TextBox
          title="Notes:"
          value={this.state.notes}
          onChangeText={notes => this.setState({notes})}
        />
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
        <BasicButton
          title="Add Photo"
          onPress={() => {
            const options = {noData: true};
            ImagePicker.showImagePicker(options, response => {
              console.log('response', response);
              if (response.uri) {
                var photos = this.state.photos.concat(response);
                this.setState({photos: photos});
              }
            });
          }}
        />
        <View>
          {this.state.photos.map((photo, _) => {
            return (
              <Image
                source={{uri: photo.uri}}
                style={{width: 200, height: 200}}
                key={photo.uri}
              />
            );
          })}
        </View>
        <BasicButton title="Submit" onPress={() => navigate('HomePage')} />
        <Debug title="globals" data={GLOBALS} />
        <Debug title="state" data={this.state} />
      </ScreenTemplate>
    );
  }
}
