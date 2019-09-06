// HomeScreen is the main screen after a user is logged in

import React from 'react';

import {Text} from 'react-native';

import {StaticView, Debug, BasicButton, TextBox} from '../components';

export class HomeScreen extends React.Component<any, any> {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <StaticView>
        <Text>{'User: ' + GLOBALS.user}</Text>
        <Text>{'Campaign: ' + GLOBALS.campaign_code}</Text>
        <BasicButton
          title="Add Sidewalk Entry"
          onPress={() => navigate('EntryScreen')}
        />
        <Debug title="globals" data={GLOBALS} />
      </StaticView>
    );
  }
}
