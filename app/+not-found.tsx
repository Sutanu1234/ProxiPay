import { Link, Stack } from "expo-router";
import { View } from "react-native";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { LinearGradient } from "expo-linear-gradient";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Page Not Found" }} />
      <LinearGradient
        colors={["#ace1f8", "#ffffff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        className="flex-1 justify-center items-center px-6"
      >
        {/* Error Emoji / Icon */}
        <Text className="text-6xl mb-4">😕</Text>

        {/* Heading */}
        <Text className="text-2xl font-bold text-center mb-2">
          Oops! Page Not Found
        </Text>

        {/* Subtext */}
        <Text className="text-gray-500 text-center mb-6">
          The page you are looking for doesn’t exist or has been moved.
        </Text>

        {/* Button to go Home */}
        <Link href="/" asChild>
          <Button>
            <Text className="text-white font-medium">Go to Home</Text>
          </Button>
        </Link>
      </LinearGradient>
    </>
  );
}
