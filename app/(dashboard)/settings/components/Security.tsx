import React, { useState } from "react";
import { View, Switch } from "react-native";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { Lock, Fingerprint } from "lucide-react-native";

export default function Security() {
  const [biometricEnabled, setBiometricEnabled] = useState(false);

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
      <Text className="text-2xl font-bold">Security</Text>

      {/* Biometric login */}
      <View className="flex-row items-center  justify-between rounded-xl px-4">
        <View className="flex-row items-center gap-2">
          <View className="h-8 w-8 items-center justify-center rounded-full bg-blue-500">
            <Fingerprint size={18} color="white" />
          </View>
          <Text className="text-base font-medium ">Enable Biometric Login</Text>
        </View>
        <Switch value={biometricEnabled} onValueChange={setBiometricEnabled} />
      </View>

      {/* Change PIN */}
      <SettingsButton
        icon={<Lock size={20} color="white" />}
        title="Change PIN"
        iconBg="#f97316"
      />
    </View>
  );
}
