import { TabsBarIconProps } from '@/utils/interfaces';
import React from 'react';
import { Image, Text, View } from 'react-native';

const TabsBarIcon = ({ focused, title, icon }: TabsBarIconProps) => {
  return (
    <View className='h-full min-w-[100px] flex flex-col gap-[2px] justify-center items-center'>
      <Image source={icon} tintColor={focused ? '#0061FF' : '#666876'} className='h-[20px] w-[20px]' />
      <Text className={`text-[12px] font-rubik-medium ${focused ? 'text-royal-blue' : 'text-graphite-gray'}`}>{title}</Text>
    </View>
  );
};

export default TabsBarIcon;