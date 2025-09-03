import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRightLeft, CircleMinus, Scan } from 'lucide-react-native'
import { Separator } from '@/components/ui/separator'

export class OptionComponents extends Component {
  render() {
    return (
      <View className='py-4 bg-transparent rounded-lg border-2 border-[#ace1f8] h-16 flex-row justify-between items-center'>
        <Button className='items-center' variant="ghost">
            <CircleMinus size={16} color="#0ea5e9" />
            <Text className='text-lg'>Deposite</Text>
        </Button>
        <Separator orientation="vertical" />
        <Button className='items-center' variant="ghost">
            <ArrowRightLeft size={16} color="#0ea5e9" />
            <Text className='text-lg'>Transfer</Text>
        </Button>
        <Separator orientation="vertical" />
        <Button className='items-center' variant="ghost">
            <Scan size={16} color="#0ea5e9" />
            <Text className='text-lg'>Scan</Text>
        </Button>
      </View>
    )
  }
}

export default OptionComponents