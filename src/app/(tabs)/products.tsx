import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Products() {
  return (
    <SafeAreaView className="flex-1 p-5 gap-3 bg-cyan-900 ">
      <Text className="text-white text-xl font-semibold">Products Pages</Text>
    </SafeAreaView>
  );
}
