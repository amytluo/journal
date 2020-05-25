// libraries
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


// components
import Home from './components/Home.js';
import EntryScreen from './components/EntryScreen.js';

// stack navigator
const Navigator = createStackNavigator({
  Home: {screen: Home},
  EntryScreen: {screen: EntryScreen},
});

const App = createAppContainer(Navigator);

export default App;