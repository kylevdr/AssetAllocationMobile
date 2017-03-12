import React from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

import text from '../text/text';

class DonutChart extends React.Component {
    render() {
        return (
            <Text>Chart</Text>
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
)(DonutChart);