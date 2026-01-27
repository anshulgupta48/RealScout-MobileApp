import RecommendedListingCard from '@/components/RecommendedListingCard';
import { propertyTypeOptions, recommendedListingsData } from '@/utils/constants';
import { Icons } from '@/utils/icons';
import { Images } from '@/utils/images';
import React, { useState } from 'react';
import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Explore = () => {
  const [searchPropertyType, setSearchPropertyType] = useState<number>(0);

  return (
    <SafeAreaView className='h-full w-full bg-pure-light'>
      <ScrollView showsVerticalScrollIndicator={false} className='h-full w-full'>
        <View className='w-full pt-[20px] pb-[100px] px-[16px] flex flex-col gap-[14px]'>
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

          <View className='w-full flex flex-col gap-[10px]'>
            <View className='h-[42px] w-full px-[14px] py-[16px] bg-cloud-white border border-solid border-royal-blue-fade rounded-[6px] flex flex-row justify-between items-center gap-[40px]'>
              <View className='w-[80%] flex flex-row items-center gap-[4px]'>
                <Image source={Icons.ExploreIcon} tintColor='#8C8E98' className='h-[20px] w-[20px]' />
                <TextInput placeholder='Search for your Ideal Home' placeholderTextColor='#8C8E98' className='h-full text-ink-night text-[14px] font-rubik-regular relative top-[2px]' />
              </View>

              <TouchableOpacity activeOpacity={0.8}>
                <Image source={Icons.FilterIcon} tintColor='#8C8E98' className='h-[20px] w-[20px]' />
              </TouchableOpacity>
            </View>

            <View className='w-full flex flex-col'>
              <View className='h-[41px] w-full'>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ columnGap: 10 }}>
                  {propertyTypeOptions?.map((item, index) => (
                    <TouchableOpacity activeOpacity={0.8} key={index} className={`h-[30px] px-[20px] border border-solid rounded-[4px] flex justify-center items-center ${searchPropertyType === index ? 'bg-royal-blue border-royal-blue' : 'bg-royal-blue-fade border-royal-blue-soft'}`} onPress={() => setSearchPropertyType(index)}>
                      <Text className={`text-[13px] font-rubik-medium ${searchPropertyType === index ? 'text-pure-light' : 'text-ink-night'}`}>{item}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Explore;