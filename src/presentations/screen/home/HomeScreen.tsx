import { Pressable, Text, View } from "react-native"
import { globalStyles } from "../../theme/theme"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { PrimaryButton } from "../../components/PrimatyButton"
import { RootStackParams } from "../../routes"

export const HomeScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>()

  return (
    <View style={globalStyles.container}>
      
      <PrimaryButton label='Products' screen="Products" />
      <PrimaryButton label='Settings' screen="Settings" />
      <PrimaryButton screen="Products" />
    </View>
  )
}