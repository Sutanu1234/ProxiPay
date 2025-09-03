import React from 'react';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { View } from 'react-native';
import { Headset, Mail, FileText, Shield } from 'lucide-react-native';

export default function Other() {
  // Reusable button with icon on left
  const SettingsButton = ({
    icon,
    title,
    iconBg = '#0ea5e9',
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
      <Text className="text-2xl font-bold">About</Text>

      <View className="flex-col gap-1">
        <SettingsButton
          icon={<Headset size={20} color="white" />}
          title="Help"
          iconBg="#0ea5e9"
        />
        <SettingsButton
          icon={<Mail size={20} color="white" />}
          title="Contact"
          iconBg="#f97316"
        />
        <SettingsButton
          icon={<FileText size={20} color="white" />}
          title="Terms & Conditions"
          iconBg="#10b981"
        />
        <SettingsButton
          icon={<Shield size={20} color="white" />}
          title="Privacy Policy"
          iconBg="#8b5cf6"
        />
      </View>
    </View>
  );
}
