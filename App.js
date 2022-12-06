/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import Icon from 'react-native-vector-icons/FontAwesome';
 import { StatusBar } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';

const App = () => {


  return (
    <>
        <StatusBar
        barStyle={'dark-content'}
      />
      <HomeScreen/>
    </>
        
  );
};


export default App;