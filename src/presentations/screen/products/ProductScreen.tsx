import { FlatList, Text, View } from "react-native"
import { globalStyles } from "../../theme/theme"
import { PrimaryButton } from "../../components/PrimatyButton"

const products = [
  { id: 1, name: 'producto1' },
  { id: 2, name: 'producto2' },
  { id: 3, name: 'producto3' },
  { id: 4, name: 'producto4' },
  { id: 5, name: 'producto5' },
  { id: 6, name: 'producto6' },
  { id: 7, name: 'producto7' },
  { id: 8, name: 'producto8' }
]

export const ProductScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Text>Productos</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => <PrimaryButton label={item.name} />
        } />
    </View>
  )
}