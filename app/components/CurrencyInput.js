import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as userInfoActions from '../actions/userInfo';
import text from '../text/text';
import globalStyles from '../styles/globalStyles';

class CurrencyInput extends React.Component {
  
  // Update current allocation of assets when input changes
  handleChange(input) {
    this.props.actions.setCurrentAllocation(this.props.category, input);
  }

  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: .5}} />
        <View style={styles.inputLine}>
          <Text style={styles.currencySymbol}>{text.currency}</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={this.handleChange.bind(this)}
            keyboardType="numeric"
            autoCorrect={false}
            placeholder={this.props.placeholder}
            returnKeyType="done"
            autoCapitalize="none"
            defaultValue={this.props.userInfo[this.props.category] ? this.props.userInfo[this.props.category].toString() : null}
          />
        </View>
        <View style={{flex: .5}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: 300,
    backgroundColor: 'white',
    borderColor: '#ccc',
    shadowOffset: {width: 0, height: 0},
    borderWidth: .7,
    borderRadius: 4,
    padding: 5,
    marginLeft: 5
  },
  currencySymbol: {
    fontSize: 20,
    color: '#777'
  },
  inputLine: {
    flexDirection: 'row',
    flex: 11,
    alignItems: 'center',
    marginTop: 7,
    marginBottom: 7
  }
});

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userInfoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyInput);