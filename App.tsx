import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import TabBottom from './src/screens/TabBottom';

const   Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:true}}>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="TabBottom" component={TabBottom} options={{title:"Plantas"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

