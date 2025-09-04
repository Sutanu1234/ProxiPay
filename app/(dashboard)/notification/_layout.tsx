import React, { useState } from "react";
import { View, Switch, ScrollView } from "react-native";
import { Text } from "@/components/ui/text";
import { Bell } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Notifications() {
  const [pushEnabled, setPushEnabled] = useState(true);

  // Demo notification data
  const notifications = [
    {
      id: 1,
      title: "Payment Successful",
      body: "Your ₹500 payment to Paytm was successful.",
      date: "03 Sept 2025",
      time: "10:30 AM",
    },
    {
      id: 2,
      title: "New Offer Available",
      body: "Get 10% cashback on your next recharge.",
      date: "02 Sept 2025",
      time: "06:15 PM",
    },
    {
      id: 3,
      title: "Reminder",
      body: "Don’t forget to pay your electricity bill.",
      date: "01 Sept 2025",
      time: "08:45 AM",
    },
  ];

  const NotificationCard = ({
    title,
    body,
    date,
    time,
  }: {
    title: string;
    body: string;
    date: string;
    time: string;
  }) => (
    <View className="bg-white rounded-xl p-4 mb-2 border-gray-100 border-[1px] shadow-sm">
      <Text className="text-base font-semibold mb-1">{title}</Text>
      <Text className="text-gray-600 mb-2">{body}</Text>
      <Text className="text-gray-400 text-sm">
        {date} • {time}
      </Text>
    </View>
  );

  return (
    <LinearGradient
      colors={["#ace1f8", "#ffffff"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 0.45 }}
      className="flex-1"
    >
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text className="text-2xl text-white text-center font-bold mb-6">Notifications</Text>

        {/* Push Toggle */}
        <View className="flex-row items-center justify-between bg-white rounded-xl p-4 mb-6">
          <View className="flex-row items-center">
            <View className="h-8 w-8 items-center justify-center rounded-full bg-sky-500 mr-4">
              <Bell size={18} color="white" />
            </View>
            <Text className="text-base font-medium">Push Notifications</Text>
          </View>
          <Switch value={pushEnabled} onValueChange={setPushEnabled} />
        </View>

        {/* Demo Notifications */}
        {notifications.map((n) => (
          <NotificationCard
            key={n.id}
            title={n.title}
            body={n.body}
            date={n.date}
            time={n.time}
          />
        ))}
      </ScrollView>
    </LinearGradient>
  );
}
