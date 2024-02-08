// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './components/AuthStack';
import MainTabs from './components/MainTabs';
import Entrainement from './screens/Entrainement';

const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Entrainement" option={{ headerShown: false }}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="Entrainement" component={Entrainement} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
