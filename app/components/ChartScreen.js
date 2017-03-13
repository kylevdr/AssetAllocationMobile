import React from 'react';
import { View, Text, Button } from 'react-native';

import text from '../text/text';
import DonutChart from './DonutChart';
import globalStyles from '../styles/globalStyles';
import CategoryAllocationText from './CategoryAllocationText';

export default class ChartScreen extends React.Component {
    static navigationOptions = {
        title: text.chartScreenTitle,
        header: {
          backTitle: text.backButtonText
        }
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={globalStyles.container}>
              <View style={globalStyles.flexNine}>
                <Text style={globalStyles.centerText}>{text.chartTitle}</Text>
                <DonutChart />
                <CategoryAllocationText category="largeCap" />
                <CategoryAllocationText category="midSmallCap" />
                <CategoryAllocationText category="international" />
                <CategoryAllocationText category="bonds" />
                <CategoryAllocationText category="cash" />
              </View>
              <View style={globalStyles.flexOne}>
                <Button
                  onPress={() => navigate('Input')}
                  title="Next"
                />
              </View>
            </View>
        );
    }
}