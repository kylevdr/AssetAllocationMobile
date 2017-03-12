import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { AppRegistry, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import rootReducer from './reducers/index';
import SliderScreen from './components/SliderScreen';
import ChartScreen from './components/ChartScreen';
import InputScreen from './components/InputScreen';
import StepsScreen from './components/StepsScreen';

const store = createStore(rootReducer);

const Navigation = StackNavigator({
    Home: { screen: SliderScreen },
    Chart: { screen: ChartScreen },
    Input: { screen: InputScreen },
    Steps: { screen: StepsScreen }
});

const App = () => (
    <Provider store={store}>
        <Navigation />
    </Provider>
);

AppRegistry.registerComponent('AssetAllocationMobile', () => App);