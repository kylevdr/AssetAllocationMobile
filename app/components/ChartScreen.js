import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';

import text from '../text/text';
import DonutChart from './DonutChart';

class ChartScreen extends React.Component {
    static navigationOptions = {
        title: 'Chart',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>{text.title}</Text>
                <DonutChart />
                <Button
                  onPress={() => navigate('Input')}
                  title="Next"
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  };
}

export default connect(
  mapStateToProps
)(ChartScreen);