import { Stack } from "expo-router";

const AffirmationLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="[itemId]"
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack>
  );
};

export default AffirmationLayout;
