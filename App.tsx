import React from 'react';
import Footer from './Footer';
import MyComponent from './test';
import Prodect from './Prodect';
import SearchBar from './SearchBar';
import { Text ,Image} from 'react-native';




const App: React.FC = () => {
  return (
    <>
    <MyComponent></MyComponent>
    <Text></Text>
    <Prodect></Prodect>
    <Footer></Footer>
    </>
  );
};


export default App;
