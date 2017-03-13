# Asset Allocation Planner Mobile
Mobile version of [Asset Allocation Planner](https://github.com/kylevdr/asset-allocation-planner) created with React Native. Currently iOS only.

### Description
- Calculates and charts ideal allocation of assets based on risk profile.
- Determines fewest number of transactions to reach recommended asset allocation based on current allocation.
- Video demonstration available [here](https://youtu.be/z_SnqGqYeP8).

### Tech Used
- React
- React Native
- Redux
- react-native-pathjs-charts

### Installation
1. [Node.js (with npm)](https://nodejs.org/en/) and [git](https://git-scm.com/) are required. Follow the instructions [here](https://facebook.github.io/react-native/docs/getting-started.html#content) to set up your computer to run the iOS simulation.
2. Clone the git repository by running `git clone https://github.com/kylevdr/AssetAllocationMobile.git` in the directory you would like the project to be installed in.
3. Navigate to the newly created directory by running `cd AssetAllocationMobile` in your terminal.
4. Install the required dependencies by running `npm install` in your terminal.
5. Link the React Native SVG interface by running `react-native link react-native-svg` in your terminal.
6. Run `react-native run-ios` in your terminal to start the iOS simulation.

### Comments
This is the first project I have built using React Native. The most difficult and time-consuming part of the project was styling, due to the differences in styling with CSS and React Native. Another challenge was finding a good charting library for React Native. Most charting libraries cannot be used with React Native because they work off the DOM. I was very glad when I found [React-native-pathjs-charts](https://github.com/capitalone/react-native-pathjs-charts), although it is still a little buggy and lacking in features. Getting the functionality running did not take very long because all of the actions and reducers were able to be copied directly from my original project, [Asset Allocation Planner](https://github.com/kylevdr/asset-allocation-planner).
