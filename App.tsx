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
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#2196F3"
            },
            headerTintColor: "white"
          }}
        >
          
          <Stack.Screen name="Home" component={Home} options={{title: "RN Starter"}}/>
          
          <Stack.Screen name="Example" component={ExampleView} 
          //? Remember, can't use "this." to pass parameters to title, cause "this", is defined b4 rendering.
          //? Options can be an object, or a function that returns an object. It receives navigation and route, in this case, the latter contains the title.
          options={({route}:any) => ({title: route.params.title})}
          />
        </Stack.Navigator>

    </CtxProvider>
    </NavigationContainer>
 
  );
}


