import RecommendedListingCard from '@/components/RecommendedListingCard';
import { recommendedListingsData } from '@/utils/constants';
import { Icons } from '@/utils/icons';
import { Images } from '@/utils/images';
import React from 'react';
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Favourites = () => {
  return (
    <SafeAreaView className='h-full w-full bg-pure-light'>
      <ScrollView showsVerticalScrollIndicator={false} className='h-full w-full'>
        <View className='w-full pt-[20px] pb-[100px] px-[16px] flex flex-col gap-[24px]'>
          <View className='h-[44px] w-full flex flex-row justify-between items-center gap-[40px]'>
            <View className='flex flex-row items-center gap-[10px]'>
              <Image source={Images.ProfileBanner} className='h-[44px] w-[44px] rounded-full' />

              <View className='flex flex-col gap-[4px]'>
                <Text className='text-ash-silver text-[12px] font-rubik-regular leading-none'>Welcome Back</Text>
                <Text className='text-ink-night text-[16px] font-rubik-medium leading-none'>Anshul Gupta</Text>
              </View>
            </View>

            <TouchableOpacity activeOpacity={0.8} className='h-[22px] w-[22px] relative'>
              <Image source={Icons.NotificationIcon} className='h-full w-full cursor-pointer' />
              <View className='absolute right-[2px] top-[2px] h-[8px] w-[8px] bg-royal-blue rounded-full z-10'></View>
            </TouchableOpacity>
          </View>

          <View className='w-full flex flex-col gap-[5px]'>
            <View className='w-full flex flex-row justify-between items-center gap-[40px]'>
              <Text className='text-ink-night text-[18px] font-rubik-semibold'>Favourites Listings</Text>
              <Text className='text-royal-blue text-[14px] font-rubik-semibold'>See All</Text>
            </View>

            <FlatList
              data={recommendedListingsData}
              renderItem={({ item }) => <RecommendedListingCard banner={item.banner} title={item.title} location={item.location} price={item.price} />}
              scrollEnabled={false}
              numColumns={2}
              contentContainerStyle={{ rowGap: 10 }}
              columnWrapperStyle={{ justifyContent: 'space-between', gap: 10 }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Favourites;