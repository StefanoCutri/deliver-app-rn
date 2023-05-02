import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import 'react-native-url-polyfill/auto';
const Stack = createNativeStackNavigator();
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import { Provider } from "react-redux";
import { store } from "./store";
import BasketScreen from "./screens/BasketScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";


export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="Basket" component={BasketScreen} options={{
          presentation: "modal",
          headerShown: false
        }}/>
        <Stack.Screen name="PreparingOrder" component={PreparingOrderScreen} options={{
          presentation: 'fullScreenModal',
          headerShown: false
        }} />
      </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
