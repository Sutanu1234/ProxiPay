import React from 'react';
import { View, Text } from 'react-native';

interface CustomToastProps {
  text1?: string;
  text2?: string;
  props?: {
    title?: string;
    message?: string;
    bgColor?: string;
  };
}

export const CustomToast: React.FC<CustomToastProps> = ({ text1, text2, props }) => {
  return (
    <View
      style={{
        width: '90%',
        backgroundColor: props?.bgColor || '#2563eb',
        padding: 12,
        borderRadius: 8,
        marginTop: 50,
        alignSelf: 'center',
      }}
    >
      <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>
        {props?.title || text1}
      </Text>
      <Text style={{ color: 'white', fontSize: 16 }}>{props?.message || text2}</Text>
    </View>
  );
};
