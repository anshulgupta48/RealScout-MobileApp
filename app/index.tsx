import { Icons } from '@/utils/icons';
import { Images } from '@/utils/images';
import { Link } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = () => {
  return (
    <SafeAreaView className='h-full w-full bg-pure-light'>
      <View className='h-full w-full px-[16px] pt-[20px] flex flex-col justify-between'>
        <View className='h-[500px] w-full'>
          <Image source={Images.LoginBanner} className='h-full w-full' />
        </View>

        <View className='w-full flex flex-col items-center gap-[16px] relative bottom-[10px]'>
          <View className='w-full flex flex-col items-center gap-[8px]'>
            <Image source={Images.Logo} className='h-[90px] w-[107px]' />

            <View className='w-full flex flex-col'>
              <Text className='w-full text-graphite-gray text-[14px] font-rubik-regular uppercase text-center'>Welcome To Real Scout</Text>
              <Text className='w-full text-royal-blue text-[13px] font-rubik-medium uppercase text-center'>Connecting You to Your Ideal Home</Text>
            </View>
          </View>

          <Link href='/(tabs)/Home' asChild>
            <TouchableOpacity activeOpacity={0.8} className='h-[48px] w-full bg-royal-blue-fade border border-solid border-royal-blue-soft rounded-[5px] flex flex-row justify-center items-center gap-[10px]'>
              <Image source={Icons.GoogleIcon} className='h-[20px] w-[20px]' />
              <Text className='text-ink-night text-[16px] font-rubik-medium'>Sign Up with Google</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;