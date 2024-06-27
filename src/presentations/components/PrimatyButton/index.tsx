import { Pressable, Text } from "react-native"
import { globalStyles } from "../../theme/theme"
import { useNavigation } from "@react-navigation/native"

type ButtonProps = {
  screen?: string
  label?: string
}

export const PrimaryButton = ({ screen, label }: ButtonProps) => {
  const navigation = useNavigation()
  return (
    <Pressable
      style={globalStyles.primaryButton}
      onPress={() => navigation.navigate(screen as never)}
    >
      <Text style={globalStyles.buttonText}>Go {label}</Text>
    </Pressable>
  )
}