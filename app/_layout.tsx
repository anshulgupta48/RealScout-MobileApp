import { Images } from '@/utils/images';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { Image, StatusBar, Text, View } from 'react-native';
import './globals.css';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Rubik-Regular': require('@/assets/fonts/Rubik-Regular.ttf'),
    'Rubik-Medium': require('@/assets/fonts/Rubik-Medium.ttf'),
    'Rubik-SemiBold': require('@/assets/fonts/Rubik-SemiBold.ttf'),
    'Rubik-Bold': require('@/assets/fonts/Rubik-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View className='h-full w-full bg-pure-light flex flex-col justify-center items-center gap-[12px]'>
        <Image source={Images.Logo} className='h-[113px] w-[134px]' />

        <View className='w-full flex flex-col'>
          <Text className='w-full text-royal-blue text-[20px] font-rubik-semibold font-semibold uppercase text-center'>Real Scout</Text>
          <Text className='w-full text-graphite-gray text-[12px] font-rubik-medium font-medium uppercase text-center'>Connecting You to Your Ideal Home</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <StatusBar barStyle='light-content' />

      <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen name='properties/[propertyId]' options={{ headerShown: false }} />
      </Stack>
    </>
  );
};