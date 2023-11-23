import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProximaTela } from './src/screens/ProximaTela';
import { LoginScreen } from './src/screens/LoginScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer initialRouteName="Login" >
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ProximaTela" component={ProximaTela} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
