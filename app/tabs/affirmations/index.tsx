import AppGradient from "@/components/AppGradient";
import GuidedAffirmationGallery from "@/components/GuidedAffirmationGallery";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery";
import { View, Text, ScrollView } from "react-native";

const Affirmations = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#3A1C71", "#D76D77", "#FFAF7B"]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text className="text-zinc-50 text-3xl font-bold">
            Change your Belief With Affirmation
          </Text>
          <View>
            {AFFIRMATION_GALLERY.map((g) => (
              <GuidedAffirmationGallery
                key={g.title}
                title={g.title}
                previews={g.data}
              />
            ))}
          </View>
        </ScrollView>
      </AppGradient>
    </View>
  );
};

export default Affirmations;
