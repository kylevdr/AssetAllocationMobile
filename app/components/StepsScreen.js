import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';

import text from '../text/text';

class StepsScreen extends React.Component {
    static navigationOptions = {
        title: 'Next Steps',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>{text.title}</Text>
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
)(StepsScreen);