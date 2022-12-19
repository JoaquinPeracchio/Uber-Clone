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
import SearchDestination from './src/screens/SearchScreen/indes';
import  SearchResult  from './src/screens/SearchResult/index';

const App = () => {


  return (
    <>
        <StatusBar
        barStyle={'dark-content'}
      />
      {/* <HomeScreen/> */}
      {/* <SearchDestination/> */}
       <SearchResult/> 

    </>
        
  );
};


export default App;
