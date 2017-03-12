import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, Button, Slider, StyleSheet } from 'react-native';

import text from '../text/text';
import * as userInfoActions from '../actions/userInfo';
import globalStyles from '../styles/globalStyles';
import DonutChart from './DonutChart';

class SliderScreen extends React.Component {
  static navigationOptions = {
    title: text.sliderScreenTitle,
    header: {
      backTitle: text.backButtonText
    }
  };

  // Update risk profile when slider changes
  handleSliderChange(value) {
    this.props.actions.setRiskProfile(value);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={globalStyles.flexNine}>
          <Text style={styles.text}>{text.sliderInstructions}</Text>
          <View style={styles.row}>
            <View style={styles.spacer} />
            <Slider
              style={styles.slider}
              minimumValue={1}
              maximumValue={10}
              value={this.props.userInfo.riskProfile}
              step={1}
              onSlidingComplete={this.handleSliderChange.bind(this)}
            />
            <View style={styles.spacer} />
          </View>
          <Text style={styles.text}>{text.riskProfileLabel} {this.props.userInfo.riskProfile}</Text>
        </View>
        <View style={globalStyles.flexOne}>
          <Button
            onPress={() => navigate('Chart')}
            title="Next"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    // backgroundColor: '#F5FCFF',
  },
  text: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 5,
    marginBottom: 5
  },
  row: {
    flexDirection: 'row'
  },
  spacer: {
    flex: 1
  },
  slider: {
    flex: 8
  }
});

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userInfoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SliderScreen);