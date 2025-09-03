import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from '@/components/ui/text';
import { Home, CreditCard, User, Settings } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function BottomNavBar() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const [activeTab, setActiveTab] = React.useState('home');

  const tabs = [
    { key: 'home', label: 'Home', icon: Home, route: '../home' },
    { key: 'payments', label: 'Pay', icon: CreditCard, route: '../payments' },
    { key: 'profile', label: 'Profile', icon: User, route: '../profile' },
    { key: 'settings', label: 'Settings', icon: Settings, route: '../settings' },
  ] as const;

  return (
    <View
      className="absolute left-4 right-4 flex-row items-center justify-around border-2 border-gray-200 rounded-xl bg-white"
      style={{ bottom: insets.bottom + 12, height: 56 }}>
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.key;
        return (
          <TouchableOpacity
            key={tab.key}
            className="items-center"
            onPress={() => {
              setActiveTab(tab.key);
              router.push(tab.route);
            }}>
            <Icon size={24} color={isActive ? '#0ea5e9' : '#6b7280'} />
            <Text className={`mt-1 text-xs ${isActive ? 'text-[#0ea5e9]' : 'text-gray-500'}`}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
