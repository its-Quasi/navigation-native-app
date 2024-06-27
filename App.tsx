import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStack } from './src/presentations/routes';
import { Text } from 'react-native';

export default function App() {
  return (

    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
