import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, Text, Button, StyleSheet } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';

import text from '../text/text';
import InputWithLabel from './InputWithLabel';
import globalStyles from '../styles/globalStyles';

class InputScreen extends React.Component {
  static navigationOptions = {
      title: text.inputScreenTitle,
      header: {
        backTitle: text.backButtonText
      }
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={globalStyles.container}>
        <Text style={styles.instructions}>{text.formTitle}</Text>
        <InputWithLabel category="largeCap" />
        <InputWithLabel category="midSmallCap" />
        <InputWithLabel category="international" />
        <InputWithLabel category="bonds" />
        <InputWithLabel category="cash" />
        <Button
          onPress={() => navigate('Steps')}
          title="Next"
        />
        <KeyboardSpacer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    color: '#333333',
    fontWeight: 'bold',
    marginLeft: 15,
  },
  instructions: {
    color: '#333333',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 15
  }
});

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  };
}

export default connect(
  mapStateToProps
)(InputScreen);