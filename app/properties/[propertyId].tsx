import { facilitiesData } from '@/utils/constants';
import { Icons } from '@/utils/icons';
import { Images } from '@/utils/images';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PropertyDetails = () => {
  return (
    <SafeAreaView className='h-full w-full bg-pure-light'>
      <ScrollView className='h-full w-full'>
        <View className='h-full w-full flex flex-col'>
          <View className='h-[450px] w-full relative'>
            <Image source={Images.ListingBanner1} className='h-full w-full' />

            <View className='w-full px-[16px] absolute left-0 top-[20px] flex flex-row justify-between items-center gap-[20px]'>
              <Image source={Icons.ArrowLeftIcon} tintColor='#191D31' className='h-[28px] w-[28px]' />

              <View className='flex flex-row items-center gap-[10px]'>
                <Image source={Icons.FavouritesIcon} tintColor='#191D31' className='h-[24px] w-[24px]' />
                <Image source={Icons.ShareIcon} tintColor='#191D31' className='h-[24px] w-[24px]' />
              </View>
            </View>
          </View>

          <View className='w-full px-[16px] py-[20px] flex flex-col gap-[16px]'>
            <View className='w-full flex flex-col gap-[10px]'>
              <Text className='text-ink-night text-[22px] font-rubik-medium leading-none'>Modernica Apartment</Text>

              <View className='w-full flex flex-row items-center gap-[10px]'>
                <View className='h-[24px] px-[10px] bg-royal-blue-soft rounded-[3px] flex justify-center items-center'>
                  <Text className='text-royal-blue text-[12px] font-rubik-medium uppercase'>Apartment</Text>
                </View>

                <View className='flex flex-row items-center gap-[2px]'>
                  <Image source={Icons.StarIcon} className='h-[16px] w-[16px] relative bottom-[1px]' />
                  <Text className='text-graphite-gray text-[12px] font-rubik-medium'>4.8 (1275 reviews)</Text>
                </View>
              </View>

              <View className='flex flex-row items-center gap-[14px]'>
                <View className='flex flex-row items-center gap-[8px]'>
                  <View className='h-[36px] w-[36px] bg-royal-blue-soft rounded-full flex justify-center items-center'>
                    <Image source={Icons.BedsIcon} className='h-[18px] w-[18px] rounded-full' />
                  </View>

                  <Text className='text-ink-night text-[14px] font-rubik-medium'>8 Beds</Text>
                </View>

                <View className='flex flex-row items-center gap-[8px]'>
                  <View className='h-[36px] w-[36px] bg-royal-blue-soft rounded-full flex justify-center items-center'>
                    <Image source={Icons.BathIcon} className='h-[18px] w-[18px] rounded-full' />
                  </View>

                  <Text className='text-ink-night text-[14px] font-rubik-medium'>3 Bath</Text>
                </View>

                <View className='flex flex-row items-center gap-[8px]'>
                  <View className='h-[36px] w-[36px] bg-royal-blue-soft rounded-full flex justify-center items-center'>
                    <Image source={Icons.AreaIcon} className='h-[18px] w-[18px] rounded-full' />
                  </View>

                  <Text className='text-ink-night text-[14px] font-rubik-medium'>2000 sqft</Text>
                </View>
              </View>
            </View>

            <View className='mt-[4px] flex flex-col gap-[4px]'>
              <Text className='text-ink-night text-[18px] font-rubik-medium'>Agent</Text>

              <View className='flex flex-row justify-between items-center gap-[20px]'>
                <View className='flex flex-row items-center gap-[7px]'>
                  <Image source={Images.ListingOwnerBanner} className='h-[50px] w-[50px] rounded-full' />

                  <View className='flex flex-col'>
                    <Text className='text-ink-night text-[16px] font-rubik-medium leading-none'>Natasya Wilodra</Text>
                    <Text className='text-graphite-gray text-[14px] font-rubik-medium'>Owner</Text>
                  </View>
                </View>

                <View className='flex flex-row items-center gap-[10px]'>
                  <Image source={Icons.ChatIconBlue} className='h-[24px] w-[24px]' />
                  <Image source={Icons.PhoneIconBlue} className='h-[24px] w-[24px]' />
                </View>
              </View>
            </View>

            <View className='mt-[4px] flex flex-col gap-[4px]'>
              <Text className='text-ink-night text-[18px] font-rubik-medium leading-none'>Overview</Text>
              <Text className='text-graphite-gray text-[13px] font-rubik-medium'>Sleek, modern 2-bedroom apartment with open living space, high-end finishes, and city views. Minutes from downtown, dining, and transit.</Text>
            </View>

            <View className='mt-[4px] flex flex-col gap-[10px]'>
              <Text className='text-ink-night text-[18px] font-rubik-medium leading-none'>Facilities</Text>

              <View className='flex flex-row justify-between items-center flex-wrap gap-y-[10px]'>
                {facilitiesData.map((item, index) => (
                  <View className='flex flex-col items-center gap-[2px]' key={index}>
                    <View className='h-[50px] w-[50px] bg-royal-blue-soft rounded-full flex justify-center items-center'>
                      <Image source={item.icon} className='h-[24px] w-[24px] rounded-full' />
                    </View>

                    <Text className='w-[80px] text-ink-night text-[12px] text-center font-rubik-medium' numberOfLines={1}>{item.title}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>

          <View className='w-full mt-[10px] p-[20px] border border-b-0 border-solid border-royal-blue-soft rounded-tl-[36px] rounded-tr-[36px] flex flex-row justify-between items-center gap-[20px]'>
            <View className='flex flex-col'>
              <Text className='text-graphite-gray text-[12px] font-rubik-medium uppercase leading-none'>Price</Text>
              <Text className='text-royal-blue text-[20px] font-rubik-medium'>$17821</Text>
            </View>

            <TouchableOpacity activeOpacity={0.8} className='h-[48px] w-[200px] bg-royal-blue rounded-[100px] flex justify-center items-center'>
              <Text className='text-pure-light text-[15px] font-rubik-medium'>Booking Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PropertyDetails;