// LoginScreen is the initial login screen that a user sees after the app loads.

import React from 'react';

import {ScreenTemplate, TextBox, Debug, BasicButton} from '../components';

export class LoginScreen extends React.Component {
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
        <TextBox
          title="Campaign Code:"
          onChangeText={campaign_code => this.setState({campaign_code})}
        />
        <TextBox
          title="Your Name:"
          onChangeText={user => this.setState({user})}
        />
        <BasicButton
          title="Enter"
          onPress={() => {
            GLOBALS.campaign_code = this.state.campaign_code;
            GLOBALS.user = this.state.user;
            return navigate('HomeScreen');
          }}
        />
        <Debug title="globals" data={GLOBALS} />
        <Debug title="state" data={this.state} />
      </ScreenTemplate>
    );
  }
}
