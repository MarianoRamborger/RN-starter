import { StatusBar } from 'expo-status-bar';
import { Home, ExampleView } from './containers/containers';
import { CtxProvider } from './contexts/context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <CtxProvider> {/* Remember, CTX is the recommended way to pass state to screens. Callbacks remove re-rendering optimizations  */}
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{title: "RN Starter"}}/>
          <Stack.Screen name="Example" component={ExampleView} options={{title: "Example"}}/>
        </Stack.Navigator>

    </CtxProvider>
    </NavigationContainer>
 
  );
}


