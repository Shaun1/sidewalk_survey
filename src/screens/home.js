// HomeScreen is the main screen after a user is logged in

import React from 'react';

import {ScreenTemplate, Debug, BasicButton} from '../components';

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      campaign_code: '',
      user: '',
    };
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScreenTemplate>
        <BasicButton
          title="Add Sidewalk Entry"
          onPress={() => navigate('EntryScreen')}
        />
        <Debug title="globals" data={GLOBALS} />
        <Debug title="state" data={this.state} />
      </ScreenTemplate>
    );
  }
}
