import React, { useState } from "react";
import { View, FlatList, Pressable } from "react-native";
import { Text } from "@/components/ui/text";
import { ArrowUpRight, ArrowDownRight } from "lucide-react-native";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Transaction = {
  id: string;
  type: "credit" | "debit";
  amount: number;
  date: string;
  avatar: string;
  fallback: string;
  sender: {
    name: string;
    phone: string;
    avatar: string;
    fallback: string;
  };
  receiver: {
    name: string;
    phone: string;
    avatar: string;
    fallback: string;
  };
  status: "success" | "pending" | "cancelled";
};

const transactions: Transaction[] = [
  {
    id: "TXN123456",
    type: "credit",
    amount: 500,
    date: "2025-09-01 10:30 AM",
    avatar: "https://github.com/mrzachnugent.png",
    fallback: "ZN",
    sender: {
      name: "John Doe",
      phone: "+91 9876543210",
      avatar: "https://github.com/mrzachnugent.png",
      fallback: "JD",
    },
    receiver: {
      name: "Jane Smith",
      phone: "+91 9123456780",
      avatar: "https://github.com/shadcn.png",
      fallback: "JS",
    },
    status: "success",
  },
  {
    id: "TXN123457",
    type: "debit",
    amount: 200,
    date: "2025-09-02 02:15 PM",
    avatar: "https://github.com/shadcn.png",
    fallback: "CN",
    sender: {
      name: "Alice Roy",
      phone: "+91 9988776655",
      avatar: "https://github.com/shadcn.png",
      fallback: "AR",
    },
    receiver: {
      name: "Mark Lee",
      phone: "+91 7766554433",
      avatar: "https://github.com/evilrabbit.png",
      fallback: "ML",
    },
    status: "pending",
  },
  {
    id: "TXN123458",
    type: "credit",
    amount: 1200,
    date: "2025-09-03 08:45 AM",
    avatar: "https://github.com/leerob.png",
    fallback: "LR",
    sender: {
      name: "David Paul",
      phone: "+91 8899776655",
      avatar: "https://github.com/leerob.png",
      fallback: "DP",
    },
    receiver: {
      name: "Sophia Khan",
      phone: "+91 6655443322",
      avatar: "https://github.com/evilrabbit.png",
      fallback: "SK",
    },
    status: "cancelled",
  },
];

export default function TransactionHistory() {
  const [filter, setFilter] = useState<"all" | "credit" | "debit">("all");

  const filteredTransactions =
    filter === "all"
      ? transactions
      : transactions.filter((t) => t.type === filter);

  const renderTransaction = ({ item }: { item: Transaction }) => (
    <Popover>
      <PopoverTrigger asChild>
        <Pressable>
          <View className="flex-row items-center justify-between px-4 py-3 bg-white rounded-xl mb-3 shadow-sm">
            {/* Avatar + Details */}
            <View className="flex-row items-center">
              <Avatar alt="" className="h-12 w-12 mr-4 border-2 border-background">
                <AvatarImage source={{ uri: item.avatar }} />
                <AvatarFallback>
                  <Text>{item.fallback}</Text>
                </AvatarFallback>
              </Avatar>

              <View>
                <Text className="font-semibold">
                  {item.type === "credit" ? "Received" : "Sent"}
                </Text>
                <Text className="text-xs text-gray-500">{item.date}</Text>
                <Text className="text-xs text-gray-400">ID: {item.id}</Text>
              </View>
            </View>

            {/* Amount + Arrow */}
            <View className="items-end">
              <View className="flex-row items-center">
                {item.type === "credit" ? (
                  <ArrowUpRight size={18} color="green" />
                ) : (
                  <ArrowDownRight size={18} color="red" />
                )}
                <Text
                  className={`ml-1 font-bold ${
                    item.type === "credit" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  ₹{item.amount}
                </Text>
              </View>
            </View>
          </View>
        </Pressable>
      </PopoverTrigger>

      {/* Popover Content */}
      <PopoverContent side="top" align="center" className="w-60">
        <View className="gap-2">
          {/* Sender */}
          <Text className="font-bold">Sender</Text>
          <View className="flex-row items-center gap-3">
            <Avatar alt="" className="h-10 w-10 border-2 border-background">
              <AvatarImage source={{ uri: item.sender.avatar }} />
              <AvatarFallback>
                <Text>{item.sender.fallback}</Text>
              </AvatarFallback>
            </Avatar>
            <View>
              <Text>{item.sender.name}</Text>
              <Text className="text-xs text-gray-500">{item.sender.phone}</Text>
            </View>
          </View>

          <Separator className="my-2" />

          {/* Receiver */}
          <Text className="font-bold">Receiver</Text>
          <View className="flex-row items-center gap-3">
            <Avatar alt="" className="h-10 w-10 border-2 border-background">
              <AvatarImage source={{ uri: item.receiver.avatar }} />
              <AvatarFallback>
                <Text>{item.receiver.fallback}</Text>
              </AvatarFallback>
            </Avatar>
            <View>
              <Text>{item.receiver.name}</Text>
              <Text className="text-xs text-gray-500">{item.receiver.phone}</Text>
            </View>
          </View>

          <Separator className="my-2" />

          {/* Transaction Details */}
          <Text className="font-bold">Transaction</Text>
          <Text>ID: {item.id}</Text>
          <Text>Amount: ₹{item.amount}</Text>
          <Text>Date: {item.date}</Text>
          <Text
            className={`font-semibold ${
              item.status === "success"
                ? "text-green-600"
                : item.status === "pending"
                ? "text-yellow-600"
                : "text-red-600"
            }`}
          >
            Status: {item.status}
          </Text>
        </View>
      </PopoverContent>
    </Popover>
  );

  return (
    <View className="flex-1">
      {/* Header */}
      <Text className="text-2xl font-bold mb-4">History</Text>

      {/* Filter Menubar-like */}
      <View className="flex-row items-center mb-4">
        <Text
          className={`px-4 py-2 ${
            filter === "all" ? "font-bold text-blue-600" : "text-gray-600"
          }`}
          onPress={() => setFilter("all")}
        >
          All
        </Text>
        <Separator orientation="vertical" />
        <Text
          className={`px-4 py-2 ${
            filter === "credit" ? "font-bold text-blue-600" : "text-gray-600"
          }`}
          onPress={() => setFilter("credit")}
        >
          Credits
        </Text>
        <Separator orientation="vertical" />
        <Text
          className={`px-4 py-2 ${
            filter === "debit" ? "font-bold text-blue-600" : "text-gray-600"
          }`}
          onPress={() => setFilter("debit")}
        >
          Debits
        </Text>
      </View>

      {/* Transaction List */}
      <FlatList
        data={filteredTransactions}
        keyExtractor={(item) => item.id}
        renderItem={renderTransaction}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
