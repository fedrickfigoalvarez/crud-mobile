import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "Home" }}></Tabs.Screen>
      <Tabs.Screen name="profile" options={{ title: "Profile" }}></Tabs.Screen>
      <Tabs.Screen
        name="products"
        options={{ title: "Products" }}
      ></Tabs.Screen>
    </Tabs>
  );
};

export default TabsLayout;
