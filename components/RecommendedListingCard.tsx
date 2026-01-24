import { Icons } from '@/utils/icons';
import { RecommendedListingCardProps } from '@/utils/interfaces';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const RecommendedListingCard = ({ banner, title, location, price }: RecommendedListingCardProps) => {
  return (
    <View className='h-[240px] w-[49%] bg-pure-light border boder-solid border-royal-blue-fade flex flex-col gap-[12px]'>
      <Image source={banner} className='h-[154px] w-full rounded-[5px]' />

      <View className='px-[8px] flex flex-row justify-between items-end'>
        <View className='w-[120px] flex flex-col gap-[6px]'>
          <Text numberOfLines={1} className='text-ink-night text-[16px] font-rubik-semibold leading-none'>{title}</Text>
          <Text numberOfLines={1} className='text-ash-silver text-[12px] font-rubik-regular leading-none'>{location}</Text>
          <Text numberOfLines={1} className='text-royal-blue text-[16px] font-rubik-semibold leading-none'>${price}</Text>
        </View>

        <TouchableOpacity activeOpacity={0.8} className='h-[20px] w-[20px]'>
          <Image source={Icons.HeartIcon} tintColor='#8C8E98' className='h-full w-full' />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RecommendedListingCard;