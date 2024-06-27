import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screen/home/HomeScreen";
import { SettingScreen } from "../screen/settings/SettingScreen";
import { ProductScreen } from "../screen/products/ProductScreen";


type Product = {
  id: number
  name: string
}

export type RootStackParams = {
  Home: undefined,
  Products: Product,
  Settings: undefined,
}


const Stack = createStackNavigator<RootStackParams>()


export const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,
      headerStyle: {
        elevation: 0,
        shadowColor: 'transparent'
      }
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductScreen} />
      <Stack.Screen name="Settings" component={SettingScreen} />
    </Stack.Navigator>
  )
}
