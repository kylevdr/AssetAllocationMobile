import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';

import text from '../text/text';

class InputScreen extends React.Component {
    static navigationOptions = {
        title: 'Input',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>{text.title}</Text>
                <Button
                  onPress={() => navigate('Steps')}
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
)(InputScreen);