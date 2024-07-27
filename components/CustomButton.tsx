import { View, Text, Pressable, TouchableOpacity } from "react-native";

interface customButtonProps {
  onPress: () => void;
  title: string;
  textStyles?: string;
  containerStyles?: string;
}

const CustomButton = ({
  onPress,
  title,
  textStyles = "",
  containerStyles = "",
}: customButtonProps) => {
  return (
    <TouchableOpacity
      className={`bg-white rounded-xl min-h-[62px] justify-center items-center ${containerStyles} `}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text className={`font-semibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
