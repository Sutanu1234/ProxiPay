import React from "react";
import { View } from "react-native";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { Globe, Sun } from "lucide-react-native";

export default function Preferences() {
  // Reusable button with icon on left
  const SettingsButton = ({
    icon,
    title,
    iconBg = "#0ea5e9",
  }: {
    icon?: React.ReactNode;
    title: string;
    iconBg?: string;
  }) => (
    <Button
      variant="ghost"
      className="h-12 flex-row items-center justify-start px-4 rounded-xl"
    >
      {icon && (
        <View
          className="h-8 w-8 items-center justify-center rounded-full mr-4"
          style={{ backgroundColor: iconBg }}
        >
          {icon}
        </View>
      )}
      <Text className="text-base font-medium">{title}</Text>
    </Button>
  );

  return (
    <View className="p-4 flex-1">
      <Text className="text-2xl font-bold">Preferences</Text>

      <SettingsButton
        icon={<Globe size={20} color="white" />}
        title="Change Language"
        iconBg="#3b82f6"
      />
      <SettingsButton
        icon={<Sun size={20} color="white" />}
        title="Change Theme"
        iconBg="#f59e0b"
      />
    </View>
  );
}
