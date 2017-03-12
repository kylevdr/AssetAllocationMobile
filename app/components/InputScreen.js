import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, Text, Button } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';

import text from '../text/text';
import CurrencyInput from './CurrencyInput';
import globalStyles from '../styles/globalStyles';

class InputScreen extends React.Component {
    static navigationOptions = {
        title: 'Input',
    };
    render() {
        const { navigate } = this.props.navigation;
        // ScrollView with scroll disabled allows user to dismiss keyboard by tapping outside
        return (
            <View style={globalStyles.container}>
                <Text>{text.title}</Text>
                <CurrencyInput category="largeCap" placeholder={text.largeCap} />
                <CurrencyInput category="midSmallCap" placeholder={text.midSmallCap} />
                <CurrencyInput category="international" placeholder={text.international} />
                <CurrencyInput category="bonds" placeholder={text.bonds} />
                <CurrencyInput category="cash" placeholder={text.cash} />
                <Button
                  onPress={() => navigate('Steps')}
                  title="Next"
                />
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