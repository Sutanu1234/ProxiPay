import React, { useState, useEffect } from 'react';
import { View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Text } from '@/components/ui/text';
import { Button } from '@/components/ui/button';
import { LinearGradient } from 'expo-linear-gradient';
import { Pen, Plus, Bell, Camera } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { showToast } from '@/utils/ToastHelper';

type UserProfile = {
  avatar: string;
  name: string;
  email: string;
  mobile: string;
  bankAccount: string;
};

export default function ProfilePage() {
  const router = useRouter();

  const [profile, setProfile] = useState<UserProfile>({
    avatar: '',
    name: '',
    email: '',
    mobile: '',
    bankAccount: '',
  });

  // Simulate fetching user data
  useEffect(() => {
    const fetchProfile = async () => {
      // Replace with actual API call
      const userData: UserProfile = {
        avatar: 'https://i.pravatar.cc/150',
        name: 'Sutanu Bera',
        email: 'sutanu@example.com',
        mobile: '+91 9876543210',
        bankAccount: 'HDFC Bank •••• 1234',
      };
      setProfile(userData);
    };

    fetchProfile();
  }, []);

  const handleUpdate = (field: keyof UserProfile, value: string) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
    showToast({ title: 'Updated', message: `${field} Updated Successfully!`, type: 'update' });
  };

  return (
    <LinearGradient
      colors={['#ace1f8', '#ffffff']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 0.45 }}
      className="flex-1">
      {/* Navbar */}
      <View className="items-center bg-transparent px-4 py-3">
        <Text className="text-xl font-bold text-white">Profile</Text>
        <View className="w-10" />
      </View>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}>
        {/* Avatar */}
        <View className="mb-4 mt-6 items-center">
          <View className="relative">
            {profile.avatar ? (
              <Image
                source={{ uri: profile.avatar }}
                className="h-24 w-24 rounded-full border-2 border-white"
              />
            ) : (
              <View className="h-24 w-24 items-center justify-center rounded-full border-2 border-white bg-gray-200">
                <Text className="text-gray-500">No Avatar</Text>
              </View>
            )}
            <TouchableOpacity
              className="absolute bottom-0 right-0 rounded-full bg-blue-600 p-2"
              onPress={() =>
                showToast({ title: 'Info', message: 'Please wait...', type: 'info' })
              }>
              <Camera size={16} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Editable Fields */}
        <View className="flex-col gap-2 px-6">
          {(['name', 'email', 'mobile', 'bankAccount'] as (keyof UserProfile)[]).map((field) => (
            <View
              key={field}
              className="flex-row items-center justify-between rounded-xl bg-white p-4 border-2 border-gray-200">
              <Text className="text-base font-semibold">{profile[field]}</Text>
              <TouchableOpacity onPress={() => handleUpdate(field, `Updated ${field}`)}>
                <Pen size={18} color="#0ea5e9" />
              </TouchableOpacity>
            </View>
          ))}

          {/* Add New Bank */}
          <TouchableOpacity
            className="flex-row items-center rounded-xl bg-white px-4 py-3"
            onPress={() =>
              showToast({ title: 'Success', message: 'New Bank Added Successfully!', type: 'success' })
            }>
            <Plus size={20} color="#0ea5e9" />
            <Text className="ml-2 font-semibold text-blue-600">Add New Bank Account</Text>
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <View className="mt-8 px-6">
          <Button
            onPress={() => {
              showToast({ title: 'Logout', message: 'Logout Successfully!', type: 'error' });
              router.replace('../login');
            }}
            className="bg-red-600">
            <Text className="font-semibold text-white">Logout</Text>
          </Button>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
