import AppGradient from "@/components/AppGradient";
import { StatusBar } from "expo-status-bar";
import { View, Text, FlatList, Pressable, ImageBackground } from "react-native";
import { MEDITATION_DATA } from "@/constants/meditationData";
import MEDITATION_IMAGES from "@/constants/meditation-images";
const NatureMeditate = () => {
  return (
    <View className="flex-1 ">
      <AppGradient colors={["#0F2027", "#203A43", "#2C5364"]}>
        <View className="mb-6">
          <Text className="text-gray-200 mb-3 font-bold text-4xl text-left">
            Welcome Nishant
          </Text>
          <Text className="text-indigo-100 text-xl font-medium">
            Start your meditation practice today
          </Text>
        </View>
        <View>
          <FlatList
            data={MEDITATION_DATA}
            className="mb-20"
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => console.log("press")}
                className="h-48 my-3 rounded-md overflow-hidden"
              >
                <ImageBackground
                  source={MEDITATION_IMAGES[item.id - 1]}
                  resizeMode="cover"
                  className="flex-1 rounded-lg justify-center"
                >
                  <Text className="text-center text-gray-100 text-3xl font-bold">
                    {item.title}
                  </Text>
                </ImageBackground>
              </Pressable>
            )}
          />
        </View>
      </AppGradient>
      <StatusBar style="light" />
    </View>
  );
};

export default NatureMeditate;
