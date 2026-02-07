import { handleUserLogout } from '@/services/appwrite';
import { Icons } from '@/utils/icons';
import { Images } from '@/utils/images';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await handleUserLogout();
      if (response?.isSuccess) {
        router.push('/');
      }
    } catch (error) {
      console.error('Error while doing Logout', error);
    }
  };

  return (
    <SafeAreaView className='h-full w-full bg-pure-light'>
      <ScrollView className='h-full w-full'>
        <View className='h-full w-full px-[16px] pt-[20px] pb-[70px] flex flex-col gap-[25px]'>
          <View className='w-full flex flex-row justify-between items-center gap-[40px]'>
            <Text className='text-ink-night text-[17px] font-rubik-medium'>Profile</Text>

            <View className='relative'>
              <Image source={Icons.NotificationIcon} tintColor='#191D31' className='h-[20px] w-[20px]' />
              <View className='absolute right-[1px] top-[4px] h-[6px] w-[6px] rounded-full bg-royal-blue z-10'></View>
            </View>
          </View>

          <View className='w-full flex flex-col items-center gap-[14px]'>
            <View className='h-[140px] w-full flex justify-center items-center'>
              <View className='h-[140px] w-[140px] relative'>
                <Image source={Images.ProfileBanner} className='h-full w-full rounded-full' />

                <TouchableOpacity activeOpacity={0.8} className='absolute bottom-0 right-[10px] h-[30px] w-[30px] bg-royal-blue rounded-[4px] flex justify-center items-center z-10'>
                  <Image source={Icons.EditIcon} className='h-[20px] w-[20px]' />
                </TouchableOpacity>
              </View>
            </View>

            <Text className='text-ink-night text-[20px] font-rubik-medium'>Anshul Gupta</Text>
          </View>

          <View className='w-full flex flex-col gap-[16px]'>
            <View className='w-full flex flex-row justify-between items-center gap-[40px]'>
              <View className='flex flex-row items-center gap-[6px]'>
                <Image source={Icons.BookingIcon} tintColor='#191D31' className='h-[20px] w-[20px]' />
                <Text className='text-ink-night text-[16px] font-rubik-medium'>Booking</Text>
              </View>

              <Image source={Icons.ChevronRightIcon} tintColor='#191D31' className='h-[20px] w-[20px]' />
            </View>

            <View className='w-full flex flex-row justify-between items-center gap-[40px]'>
              <View className='flex flex-row items-center gap-[6px]'>
                <Image source={Icons.PaymentsIcon} tintColor='#191D31' className='h-[20px] w-[20px]' />
                <Text className='text-ink-night text-[16px] font-rubik-medium'>Payments</Text>
              </View>

              <Image source={Icons.ChevronRightIcon} tintColor='#191D31' className='h-[20px] w-[20px]' />
            </View>

            <View className='h-[1px] w-full border-b border-solid border-royal-blue-soft'></View>

            <View className='w-full flex flex-row justify-between items-center gap-[40px]'>
              <View className='flex flex-row items-center gap-[6px]'>
                <Image source={Icons.NotificationIcon} tintColor='#191D31' className='h-[20px] w-[20px]' />
                <Text className='text-ink-night text-[16px] font-rubik-medium'>Notification</Text>
              </View>

              <Image source={Icons.ChevronRightIcon} tintColor='#191D31' className='h-[20px] w-[20px]' />
            </View>

            <View className='w-full flex flex-row justify-between items-center gap-[40px]'>
              <View className='flex flex-row items-center gap-[6px]'>
                <Image source={Icons.SecurityIcon} tintColor='#191D31' className='h-[20px] w-[20px]' />
                <Text className='text-ink-night text-[16px] font-rubik-medium'>Security</Text>
              </View>

              <Image source={Icons.ChevronRightIcon} tintColor='#191D31' className='h-[20px] w-[20px]' />
            </View>

            <View className='w-full flex flex-row justify-between items-center gap-[40px]'>
              <View className='flex flex-row items-center gap-[6px]'>
                <Image source={Icons.LanguageIcon} tintColor='#191D31' className='h-[20px] w-[20px]' />
                <Text className='text-ink-night text-[16px] font-rubik-medium'>Language</Text>
              </View>

              <Image source={Icons.ChevronRightIcon} tintColor='#191D31' className='h-[20px] w-[20px]' />
            </View>

            <View className='w-full flex flex-row justify-between items-center gap-[40px]'>
              <View className='flex flex-row items-center gap-[6px]'>
                <Image source={Icons.HelpCenterIcon} tintColor='#191D31' className='h-[20px] w-[20px]' />
                <Text className='text-ink-night text-[16px] font-rubik-medium'>Help Center</Text>
              </View>

              <Image source={Icons.ChevronRightIcon} tintColor='#191D31' className='h-[20px] w-[20px]' />
            </View>

            <View className='w-full flex flex-row justify-between items-center gap-[40px]'>
              <View className='flex flex-row items-center gap-[6px]'>
                <Image source={Icons.InviteFriendsIcon} tintColor='#191D31' className='h-[20px] w-[20px]' />
                <Text className='text-ink-night text-[16px] font-rubik-medium'>Invite Friends</Text>
              </View>

              <Image source={Icons.ChevronRightIcon} tintColor='#191D31' className='h-[20px] w-[20px]' />
            </View>

            <TouchableOpacity activeOpacity={0.8} className='w-full flex flex-row items-center gap-[6px]' onPress={handleLogout}>
              <Image source={Icons.LogoutIcon} tintColor='#F75555' className='h-[20px] w-[20px]' />
              <Text className='text-crimson-alert text-[16px] font-rubik-medium'>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;