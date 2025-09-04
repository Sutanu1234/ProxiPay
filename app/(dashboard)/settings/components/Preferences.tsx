import React from "react";
import { View, Platform } from "react-native";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { Globe, Sun } from "lucide-react-native";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Preferences() {
  const insets = useSafeAreaInsets();
  const contentInsets = {
    top: insets.top,
    bottom: Platform.select({ ios: insets.bottom, android: insets.bottom + 24 }),
    left: 12,
    right: 12,
  };

  return (
    <View className="p-4 flex-1">
      <Text className="text-2xl font-bold mb-4">Preferences</Text>

      {/* Change Language */}
      <View className="flex-row justify-between px-4 mb-2">
        <View className="flex-row items-center mb-2">
          <View className="h-8 w-8 items-center justify-center rounded-full mr-1 bg-blue-500">
            <Globe size={18} color="white" />
          </View>
          <Text className="text-base font-medium">Change Language</Text>
        </View>
        <Select>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Select Language" />
          </SelectTrigger>
          <SelectContent insets={contentInsets} className="w-[140px]">
            <SelectGroup>
              <SelectLabel>Languages</SelectLabel>
              <SelectItem label="English" value="english">
                English
              </SelectItem>
              <SelectItem label="Hindi" value="hindi">
                Hindi
              </SelectItem>
              <SelectItem label="Bengali" value="bengali">
                Bengali
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </View>

      {/* Change Theme */}
      <View className="flex-row justify-between px-4">
        <View className="flex-row items-center mb-2">
          <View className="h-8 w-8 items-center justify-center rounded-full mr-1 bg-amber-500">
          <Sun size={18} color="white" />
        </View>
        <Text className="text-base font-medium">Change Theme</Text>
        </View>
        <Select>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Select Theme" />
          </SelectTrigger>
          <SelectContent insets={contentInsets} className="w-[140px]">
            <SelectGroup>
              <SelectLabel>Theme</SelectLabel>
              <SelectItem label="Dark" value="Dark">
                Dark
              </SelectItem>
              <SelectItem label="Light" value="Light">
                Light
              </SelectItem>
              <SelectItem label="Default" value="Default">
                Default
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </View>
    </View>
  );
}
