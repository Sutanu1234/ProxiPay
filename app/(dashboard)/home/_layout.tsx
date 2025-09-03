import React from "react";
import { View, ScrollView } from "react-native";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Toast from "react-native-toast-message";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "expo-router";
import {
  Bell,
  ChartSpline,
  ClipboardEdit,
  Download,
  Menu,
  Search,
} from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";
import OptionComponents from "./components/OptionComponents";
import RecentTransfers from "./components/RecentTransfers";
import { showToast } from "@/utils/ToastHelper";

export default function HomePage() {
  const router = useRouter();

  const handleLogout = () => {
    showToast({ title: 'Logout', message: 'Logout Successfully!', type: 'error' });
    router.replace("../login");
  };

  return (
    <LinearGradient
      colors={["#ace1f8", "#ffffff"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 0.45 }}
      className="flex-1"
    >
      {/* Navbar */}
      <View className="flex-row items-center justify-between bg-transparent px-4 py-3">
        {/* Menu Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="rounded-full bg-[#c3eefd] p-3">
              <Menu size={24} color="white" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent side="bottom" className="w-32 bg-white">
            <DropdownMenuItem onPress={() => router.push("./profile")}>
              <Text className="text-base font-semibold text-gray-800">
                Profile
              </Text>
            </DropdownMenuItem>
            <DropdownMenuItem onPress={() => router.push("./settings")}>
              <Text className="text-base font-semibold text-gray-800">
                Settings
              </Text>
            </DropdownMenuItem>
            <DropdownMenuItem onPress={handleLogout}>
              <Text className="text-base font-semibold text-red-600">
                Logout
              </Text>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Text className="text-xl font-bold text-white">ProxiPay</Text>

        <Button variant="ghost" className="rounded-full bg-[#c3eefd] p-3">
          <Bell size={24} color="white" />
        </Button>
      </View>

      {/* ✅ Scrollable Content */}
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {/* ✅ Search Bar */}
        <View className="px-4">
          <Text className="p-2 text-lg font-bold text-white">
            Hello!
            <Text className="text-3xl font-bold text-white"> Sutanu Bera</Text>
          </Text>
          <View className="h-12 flex-row items-center rounded-2xl bg-white px-3 py-2">
            <Search size={20} color="black" />
            <Input
              placeholder="Search..."
              className="ml-2 h-full flex-1 border-0 text-gray-800"
              placeholderClassName="text-gray-400"
            />
          </View>
        </View>

        {/* Money Spent Card */}
        <View className="mx-4 mt-6 h-40 rounded-md border-t-[2px] border-x-[1px] border-white bg-transparent p-2 flex-col justify-between">
          <View className="flex-row items-center justify-between">
            <Text className="text-xl font-bold"> Money Spent </Text>

            <View className="flex-row items-center gap-2">
              <Text className="rounded-full bg-white p-2 text-sm font-bold">
                ProxiPay
              </Text>
              <Button variant="ghost" className="rounded-full bg-white p-3">
                <ClipboardEdit size={16} color="black" />
              </Button>
              <Button variant="ghost" className="rounded-full bg-white p-3">
                <Download size={16} color="black" />
              </Button>
            </View>
          </View>
          <ChartSpline size={24} color="#0ea5e9" />
          <View className="flex-row items-center justify-between">
            <View className="flex items-start">
              <Text className="text-sm text-gray-400"> Total amount </Text>
              <Text className="text-2xl font-semibold"> ₹ 12,430 </Text>
            </View>
            <View className="flex items-start">
              <Text className="text-sm text-gray-400"> Monthly </Text>
              <Text className="text-2xl font-semibold"> ₹ 1,523 </Text>
            </View>
            <View className="flex items-start">
              <Text className="text-sm text-gray-400"> Daily </Text>
              <Text className="text-2xl font-semibold"> ₹ 400 </Text>
            </View>
          </View>
        </View>

        {/* Options + Transfers */}
        <View className="mt-6 px-4">
          <OptionComponents />
        </View>
        <View className="mt-6 px-4">
          <RecentTransfers />
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
