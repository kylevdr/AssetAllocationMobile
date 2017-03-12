import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';

import text from '../text/text';
import DonutChart from './DonutChart';
import globalStyles from '../styles/globalStyles';

class ChartScreen extends React.Component {
    static navigationOptions = {
        title: text.chartScreenTitle,
        header: {
          backTitle: text.backButtonText
        }
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={globalStyles.container}>
              <View style={globalStyles.flexNine}>
                <Text style={globalStyles.centerText}>{text.chartTitle}</Text>
                <DonutChart />
              </View>
              <View style={globalStyles.flexOne}>
                <Button
                  onPress={() => navigate('Input')}
                  title="Next"
                />
              </View>
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