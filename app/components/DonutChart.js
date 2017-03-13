import React from 'react';
import { connect } from 'react-redux';
import { Pie } from 'react-native-pathjs-charts';

import text from '../text/text';
import colors from '../styles/chartColors';

class DonutChart extends React.Component {
    render() {
        let data = [{
          "name": text.largeCapLabel,
          [text.seriesName]: this.props.assetAllocation.largeCap
        }, {
          "name": text.midSmallCapLabel,
          [text.seriesName]: this.props.assetAllocation.midSmallCap
        }, {
          "name": text.internationalLabel,
          [text.seriesName]: this.props.assetAllocation.international
        }, {
          "name": text.bondsLabel,
          [text.seriesName]: this.props.assetAllocation.bonds
        }, {
          "name": text.cashLabel,
          [text.seriesName]: this.props.assetAllocation.cash
        }]

        let options = {
          margin: {
            top: 20,
            left: 20,
            right: 20,
            bottom: 20
          },
          width: 350,
          height: 350,
          color: colors.default,
          r: 50,
          R: 150,
          legendPosition: 'topLeft',
          animate: {
            type: 'oneByOne',
            duration: 200,
            fillTransition: 3
          },
          label: {
            fontFamily: 'Arial',
            fontSize: 12,
            fontWeight: true,
            color: '#333333'
          }
        }

        return (
            <Pie
              data={data}
              options={options}
              accessorKey={text.seriesName}
            />
        )
    }
}

function mapStateToProps(state) {
  return {
    assetAllocation: state.assetAllocation
  };
}

export default connect(
  mapStateToProps
)(DonutChart);