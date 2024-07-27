import { View, Text, ImageBackground, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import imagebeach from "@/assets/meditation-images/beach.webp";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";
import AppGradient from "@/components/AppGradient";
export default function HomeScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 ">
      <ImageBackground
        source={imagebeach}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
          <SafeAreaView className="flex-1 px-1 justify-between">
            <View>
              <Text className="text-center text-white text-4xl mt-12">
                Simple Meditation
              </Text>
              <Text className="text-center text-white text-2xl mt-3">
                Simplify Meditation for everyone
              </Text>
            </View>
            <View>
              <CustomButton
                onPress={() => router.push("tabs/nature-meditate")}
                title="get started"
              />
            </View>
            <StatusBar style="light" />
          </SafeAreaView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
}
