// EntryScreen is where a user enters information about the sidewalks on a property face.

import * as React from 'react';

import {
  ScrollerView,
  TextBox,
  Debug,
  BasicButton,
  ListPicker,
  PhotoGallery,
} from '../components';

import ImagePicker from 'react-native-image-picker';

export class EntryScreen extends React.Component<any, any> {
  constructor(props: any) {
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
      <ScrollerView>
        <TextBox
          title="Address:"
          value={this.state.address}
          onChangeText={(address: string) => this.setState({address})}
        />
        <TextBox
          title="Street Face:"
          value={this.state.street_face}
          onChangeText={(street_face: string) => this.setState({street_face})}
        />
        <TextBox
          title="Notes:"
          value={this.state.notes}
          onChangeText={(notes: string) => this.setState({notes})}
        />
        <ListPicker
          title="Condition:"
          value={this.state.condition}
          onValueChange={(val: string, _: number) => this.setState({condition: val})}
          choices={[
            {
              label: 'Good - Meets ADA Standards',
              value: 'good',
            },
            {
              label: 'Fair - Useable by able-bodied adults',
              value: 'fair',
            },
            {
              label: 'Poor - Severely damaged or difficult to traverse',
              value: 'poor',
            },
            {
              label: 'Missing - No Sidewalk',
              value: 'missingg',
            },
          ]}
        />
        <ListPicker
          title="Material:"
          value={this.state.material}
          onValueChange={(val: string, _: number) => this.setState({material: val})}
          choices={[
            {
              label: 'Concrete',
              value: 'concrete',
            },
            {
              label: 'Brick',
              value: 'brick',
            },
          ]}
        />
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
        <PhotoGallery photos={this.state.photos} />
        <BasicButton title="Submit" onPress={() => navigate('HomeScreen')} />
        <Debug title="globals" data={GLOBALS} />
        <Debug title="state" data={this.state} />
      </ScrollerView>
    );
  }
}
