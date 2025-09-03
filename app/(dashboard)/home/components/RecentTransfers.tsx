import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { Button } from '@/components/ui/button'
import { ChartSpline, ClipboardEdit, Download } from 'lucide-react-native'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export class RecentTransfers extends Component {
  render() {
    return (
      <View className="h-40 rounded-md border-x-[2px] border-gray-200 bg-transparent p-2 flex-col justify-between">
        <View className='flex-row justify-between items-center'>
          <Text className="text-xl font-bold"> Recent Transfers </Text>

          <View className='flex-row gap-2 items-center'>
            <Text className="text-sm p-2 bg-blue-50 rounded-full font-bold">Weekly</Text>
            <Button variant="ghost" className="rounded-full bg-white p-3">
              <Download size={16} color="black" />
            </Button>
          </View>
        </View>
        <View className="flex-row">
        <Avatar
          alt="@mrzachnugent"
          className="border-background web:border-0 web:ring-2 web:ring-background -mr-2 border-2 h-10 w-10">
          <AvatarImage source={{ uri: 'https://github.com/mrzachnugent.png' }} />
          <AvatarFallback>
            <Text>ZN</Text>
          </AvatarFallback>
        </Avatar>
        <Avatar
          alt="@leerob"
          className="border-background web:border-0 web:ring-2 web:ring-background -mr-2 border-2 h-10 w-10">
          <AvatarImage source={{ uri: 'https://github.com/leerob.png' }} />
          <AvatarFallback>
            <Text>LR</Text>
          </AvatarFallback>
        </Avatar>
        <Avatar
          alt="@evilrabbit"
          className="border-background web:border-0 web:ring-2 web:ring-background -mr-2 border-2 h-10 w-10">
          <AvatarImage source={{ uri: 'https://github.com/evilrabbit.png' }} />
          <AvatarFallback>
            <Text>ER</Text>
          </AvatarFallback>
        </Avatar>
      </View>
        <View className='flex-row justify-between items-center'>
          <View className='flex items-start'>
            <Text className="text-sm text-gray-400"> Send </Text>
            <Text className="text-xl font-bold"> ₹ 400 </Text>
          </View>
          <View className='flex items-start'>
            <Text className="text-sm text-gray-400"> Receive </Text>
            <Text className="text-xl font-bold"> ₹ 523 </Text>
          </View>
          <View className='flex items-start'>
            <Text className="text-sm text-gray-400"> Overall Transfer </Text>
            <Text className="text-xl font-bold"> ₹ 12,430 </Text>
          </View>
        </View>
      </View>
    )
  }
}

export default RecentTransfers