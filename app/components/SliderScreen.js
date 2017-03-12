import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, Button, Slider, StyleSheet } from 'react-native';

import text from '../text/text';
import * as userInfoActions from '../actions/userInfo';

class SliderScreen extends React.Component {
  static navigationOptions = {
    title: 'Start',
  };

  // Update risk profile when slider changes
  handleSliderChange(value) {
    this.props.actions.setRiskProfile(value);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{text.title}</Text>
        <Slider
          minimumValue={1}
          maximumValue={10}
          value={this.props.userInfo.riskProfile}
          step={1}
          onSlidingComplete={this.handleSliderChange.bind(this)}
        />
        <Text style={styles.text}>{text.riskProfileLabel} {this.props.userInfo.riskProfile}</Text>
        <Button
          onPress={() => navigate('Chart')}
          title="Next"
        />
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