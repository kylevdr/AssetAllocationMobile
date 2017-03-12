import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, Text, Button } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';

import text from '../text/text';
import CurrencyInput from './CurrencyInput';
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
        <View style={globalStyles.flexNine}>
          <Text style={globalStyles.centerText}>{text.formTitle}</Text>
          <CurrencyInput category="largeCap" placeholder={text.largeCap} />
          <CurrencyInput category="midSmallCap" placeholder={text.midSmallCap} />
          <CurrencyInput category="international" placeholder={text.international} />
          <CurrencyInput category="bonds" placeholder={text.bonds} />
          <CurrencyInput category="cash" placeholder={text.cash} />
        </View>
        <View style={globalStyles.flexOne}>
          <Button
            onPress={() => navigate('Steps')}
            title="Next"
          />
        </View>
        <KeyboardSpacer />
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
)(InputScreen);