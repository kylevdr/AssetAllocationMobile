import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, Button, StyleSheet } from 'react-native';

import * as movesActions from '../actions/moves';
import text from '../text/text';
import globalStyles from '../styles/globalStyles';

// Create stateless component that functions as <b> or <strong> tag
const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

class StepsScreen extends React.Component {
  static navigationOptions = {
      title: text.stepsScreenTitle,
      header: {
        backTitle: text.backButtonText
      }
  };

  // Calculate steps when component mounts
  componentDidMount() {
    this.props.actions.calculateMoves(this.props.userInfo, this.props.assetAllocation);
  }

  // Render section differently depending on whether user needs to make any transactions
  renderSteps() {
    if (this.props.userInfo.total === 0) {
      return(
        <Text style={styles.text}><B>{text.nextStepsInstructions}</B></Text>
      );
    } else if (this.props.moves.moves.length > 0) {
      return(
        <View>
          <Text style={styles.nextStepsSub}><B>{text.nextStepsSub}</B></Text>
          {this.renderMoves.bind(this)()}
        </View>
      );
    } else {
      return(
        <Text style={styles.text}><B>{text.noStepsText}</B></Text>
      );
    }
  }

  // Return a text element for each item in the moves array
  renderMoves() {
    return this.props.moves.moves.map((item, index) => {
      return (
        <Text style={styles.move} key={index}><B style={{fontWeight: 'bold'}}>{index + 1}.</B> {item}</Text>
      );
    })
  }

  // Render the entire component
  render() {
    return (
      <View style={globalStyles.container}>
        {this.renderSteps.bind(this)()}
        <View />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    marginLeft: 20,
    marginRight: 20,
    color: '#333333'
  },
  move: {
    marginLeft: 20,
    marginRight: 20,
    color: '#333333',
    marginBottom: 5
  },
  nextStepsSub: {
    marginLeft: 20,
    marginRight: 20,
    color: '#333333',
    marginBottom: 10
  }
});

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