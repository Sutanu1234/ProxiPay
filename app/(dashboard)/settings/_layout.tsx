import React from 'react';
import { View, SafeAreaView, StyleSheet, ScrollView, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Stack } from 'expo-router';
import Account from './components/Account';

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { useRouter } from 'expo-router';

import { Bell, ChartSpline, ClipboardEdit, Download, Menu, Search } from 'lucide-react-native';
import { Button } from '@/components/ui/button';
import { showToast } from '@/utils/ToastHelper';
import Preferences from './components/Preferences';
import Security from './components/Security';
import Other from './components/Other';

export default function SettingsLayout() {
  const router = useRouter();

  const handleLogout = () => {
    showToast({ title: 'Logout', message: 'Logout Successfully!', type: 'error' });
    router.replace('../login');
  };
  return (
    <LinearGradient
      colors={['#ace1f8', '#ffffff']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 0.45 }}
      className="flex-1">
      {/* Navbar */}
      <View className="items-center bg-transparent px-4 py-3">
        <Text className="text-xl font-bold text-white">Settings</Text>
        <View className="w-10" />
      </View>

      {/* ✅ Scrollable Content */}
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}>
        <View>
          <Account />
          <Preferences />
          <Security />
          <Other />
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
