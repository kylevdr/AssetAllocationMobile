import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import text from '../text/text';

class CategoryAllocationText extends React.Component {
  render() {
    return (
      <Text style={{marginLeft: 20}}><Text style={{fontWeight: 'bold'}}>{text[this.props.category]}:</Text> {this.props.assetAllocation[this.props.category]}%</Text>
    );
  }
}

function mapStateToProps(state) {
  return {
    assetAllocation: state.assetAllocation
  };
}

export default connect(
  mapStateToProps
)(CategoryAllocationText);