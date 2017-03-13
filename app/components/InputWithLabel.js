import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import text from '../text/text';
import CurrencyInput from './CurrencyInput';

export default class InputWithLabel extends React.Component {
  render() {
    return (
        <View>
            <Text style={styles.label}>{text[this.props.category]}</Text>
            <CurrencyInput category={this.props.category} placeholder={text[this.props.category]} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    color: '#333333',
    fontWeight: 'bold',
    marginLeft: 15,
  }
});