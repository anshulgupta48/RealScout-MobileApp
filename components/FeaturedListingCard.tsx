import { Icons } from '@/utils/icons';
import { FeaturedListingCardProps } from '@/utils/interfaces';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const FeaturedListingCard = ({ banner, title, location, price, rating }: FeaturedListingCardProps) => {
  return (
    <View className='h-[350px] w-[270px] bg-pure-light border boder-solid border-royal-blue-fade rounded-[5px] overflow-hidden relative'>
      <View className='absolute left-0 top-0 h-full w-full bg-black/10'></View>
      <Image source={banner} className='h-full w-full rounded-[5px]' />

      <View className='absolute right-[16px] top-[16px] h-[25px] w-[50px] bg-pure-light rounded-[3px] flex flex-row justify-center items-center gap-[4px] z-10'>
        <Image source={Icons.StarIcon} className='h-[14px] w-[14px]' />
        <Text className='text-royal-blue text-[12px] font-rubik-semibold'>{rating}</Text>
      </View>

      <View className='absolute left-0 bottom-[14px] w-full px-[14px] flex flex-row justify-between items-end z-10'>
        <View className='flex flex-col gap-[5px]'>
          <Text className='text-pure-light text-[18px] font-rubik-semibold leading-none'>{title}</Text>
          <Text className='text-pure-light text-[14px] font-rubik-regular leading-none'>{location}</Text>
          <Text className='text-pure-light text-[18px] font-rubik-semibold leading-none'>${price}</Text>
        </View>

        <TouchableOpacity activeOpacity={0.8} className='h-[22px] w-[22px]'>
          <Image source={Icons.HeartIcon} tintColor='#FFFFFF' className='h-full w-full' />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FeaturedListingCard;