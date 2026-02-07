import { handleUserLogin } from '@/services/appwrite';
import { useGlobalContext } from '@/services/globalProvider';
import { Icons } from '@/utils/icons';
import { Images } from '@/utils/images';
import { Redirect, useRouter } from 'expo-router';
import React from 'react';
import { ActivityIndicator, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = () => {
  const router = useRouter();
  const { isLoggedIn, loading } = useGlobalContext();
  console.log(isLoggedIn, loading);

  const handleLogin = async () => {
    try {
      const response = await handleUserLogin();
      if (response?.isSuccess) {
        router.push('/(tabs)/Home');
      }
    } catch (error) {
      console.error('Error while doing Login', error);
    }
  };

  if (!loading && isLoggedIn) {
    return (
      <Redirect href='/(tabs)/Home' />
    );
  };

  return (
    <SafeAreaView className='h-full w-full bg-pure-light'>
      {loading && <View className='absolute left-0 top-0 h-screen w-full bg-black/40 z-10 flex justify-center items-center'>
        <ActivityIndicator color='#FFFFFF' size='large' />
      </View>}

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

          <TouchableOpacity activeOpacity={0.8} className='h-[48px] w-full bg-royal-blue-fade border border-solid border-royal-blue-soft rounded-[5px] flex flex-row justify-center items-center gap-[10px]' onPress={handleLogin}>
            <Image source={Icons.GoogleIcon} className='h-[20px] w-[20px]' />
            <Text className='text-ink-night text-[16px] font-rubik-medium'>Sign Up with Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;