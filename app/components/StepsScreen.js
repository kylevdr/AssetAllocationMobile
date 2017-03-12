import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, Button } from 'react-native';

import * as movesActions from '../actions/moves';
import text from '../text/text';
import globalStyles from '../styles/globalStyles';

class StepsScreen extends React.Component {
  static navigationOptions = {
      title: 'Next Steps',
  };

  // Calculate steps when component mounts
  componentDidMount() {
    this.props.actions.calculateMoves(this.props.userInfo, this.props.assetAllocation);
  }

  // Render section differently depending on whether user needs to make any transactions
  renderSteps() {
    if (this.props.userInfo.total === 0) {
      return(
        <Text>{text.nextStepsInstructions}</Text>
      );
    } else if (this.props.moves.moves.length > 0) {
      return(
        <View>
          <Text>{text.nextStepsSub}</Text>
          {this.renderMoves.bind(this)()}
        </View>
      );
    } else {
      return(
        <Text>{text.noStepsText}</Text>
      );
    }
  }

  // Return a text element for each item in the moves array
  renderMoves() {
    return this.props.moves.moves.map((item, index) => {
      return (
        <Text key={index}>{index + 1}. {item}</Text>
      );
    })
  }

  // Render the entire component
  render() {
    return (
      <View style={globalStyles.container}>
        <Text>{text.nextSteps}</Text>
        {this.renderSteps.bind(this)()}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo,
    assetAllocation: state.assetAllocation,
    moves: state.moves
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(movesActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepsScreen);