import React from "react";
import { View, Image } from "react-native";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { CreditCard, Bell } from "lucide-react-native";

export default function Account() {
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
      {/* Avatar + Name + Phone */}
      <View className="flex-row items-center gap-4">
        <Image
          source={{ uri: "https://i.pravatar.cc/150" }}
          className="h-24 w-24 rounded-full border-2 border-white"
        />
        <View>
          <Text className="text-lg font-bold">Sutanu Bera</Text>
          <Text className="text-gray-500">+91 9876543210</Text>
        </View>
      </View>

      {/* Buttons */}
      <SettingsButton
        icon={<CreditCard size={20} color="white" />}
        title="Payment Methods"
        iconBg="#3b82f6"
      />
      <SettingsButton
        icon={<Bell size={20} color="white" />}
        title="Notifications"
        iconBg="#f59e0b"
      />
    </View>
  );
}
