import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as userInfoActions from '../actions/userInfo';
import text from '../text/text';

class CurrencyInput extends React.Component {
  
  // Update current allocation of assets when input changes
  handleChange(input) {
    this.props.actions.setCurrentAllocation(this.props.category, input);
  }

  render() {
    return (
      <View>
        <Text>{text.currency}</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={this.handleChange.bind(this)}
          keyboardType="numeric"
          autoCorrect={false}
          placeholder={this.props.placeholder}
          returnKeyType="done"
          autoCapitalize="none"
        />
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userInfoActions, dispatch)
  };
}

export default connect(
  null,
  mapDispatchToProps
)(CurrencyInput);