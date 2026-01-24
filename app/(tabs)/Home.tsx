import FeaturedListingCard from '@/components/FeaturedListingCard';
import RecommendedListingCard from '@/components/RecommendedListingCard';
import { featuredListingsData, propertyTypeOptions, recommendedListingsData } from '@/utils/constants';
import { Icons } from '@/utils/icons';
import { Images } from '@/utils/images';
import React, { useState } from 'react';
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  const [recommendationPropertyType, setRecommendationPropertyType] = useState<number>(0);

  return (
    <SafeAreaView className='h-full w-full bg-pure-light'>
      <ScrollView showsVerticalScrollIndicator={false} className='h-full w-full'>
        <View className='w-full pt-[20px] pb-[100px] flex flex-col gap-[24px]'>
          <View className='h-[44px] w-full px-[16px] flex flex-row justify-between items-center gap-[40px]'>
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
            <View className='w-full px-[16px] flex flex-row justify-between items-center gap-[40px]'>
              <Text className='text-ink-night text-[18px] font-rubik-semibold'>Featured Listings</Text>
              <Text className='text-royal-blue text-[14px] font-rubik-semibold'>See All</Text>
            </View>

            <FlatList
              data={featuredListingsData}
              renderItem={({ item }) => <FeaturedListingCard banner={item.banner} title={item.title} location={item.location} price={item.price} rating={item.rating} />}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 16, gap: 16 }}
            />
          </View>

          <View className='w-full flex flex-col gap-[10px]'>
            <View className='w-full px-[16px] flex flex-row justify-between items-center gap-[40px]'>
              <Text className='text-ink-night text-[18px] font-rubik-semibold'>Our Recommendation</Text>
              <Text className='text-royal-blue text-[14px] font-rubik-semibold'>See All</Text>
            </View>

            <View className='w-full flex flex-col'>
              <View className='h-[41px] w-full px-[16px]'>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ columnGap: 10 }}>
                  {propertyTypeOptions?.map((item, index) => (
                    <TouchableOpacity activeOpacity={0.8} key={index} className={`h-[30px] px-[20px] border border-solid rounded-[4px] flex justify-center items-center ${recommendationPropertyType === index ? 'bg-royal-blue border-royal-blue' : 'bg-royal-blue-fade border-royal-blue-soft'}`} onPress={() => setRecommendationPropertyType(index)}>
                      <Text className={`text-[13px] font-rubik-medium ${recommendationPropertyType === index ? 'text-pure-light' : 'text-ink-night'}`}>{item}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>

              <FlatList
                data={recommendedListingsData}
                renderItem={({ item }) => <RecommendedListingCard banner={item.banner} title={item.title} location={item.location} price={item.price} />}
                scrollEnabled={false}
                numColumns={2}
                contentContainerStyle={{ rowGap: 10, paddingHorizontal: 16 }}
                columnWrapperStyle={{ justifyContent: 'space-between', gap: 10 }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;