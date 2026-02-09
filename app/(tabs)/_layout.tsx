import TabsBarIcon from '@/components/TabsBarIcon';
import { useGlobalContext } from '@/services/globalProvider';
import { Icons } from '@/utils/icons';
import { Redirect, Tabs } from 'expo-router';
import React from 'react';

const TabsLayout = () => {
  const { isLoggedIn, loading } = useGlobalContext();

  if (!loading && !isLoggedIn) {
    return (
      <Redirect href='/' />
    );
  };

  return (
    <Tabs screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: { minHeight: 100, paddingTop: 14, backgroundColor: '#FFFFFF', borderTopWidth: 1, borderTopColor: '0061FF1A', position: 'absolute', overflow: 'hidden' },
      tabBarItemStyle: { height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' },
    }}>
      <Tabs.Screen name='Home' options={{
        headerShown: false, title: 'Home', tabBarIcon: ({ focused }) => (
          <TabsBarIcon focused={focused} title='Home' icon={Icons.HomeIcon} />
        )
      }} />

      <Tabs.Screen name='Explore' options={{
        headerShown: false, title: 'Explore', tabBarIcon: ({ focused }) => (
          <TabsBarIcon focused={focused} title='Explore' icon={Icons.ExploreIcon} />
        )
      }} />

      <Tabs.Screen name='Favourites' options={{
        headerShown: false, title: 'Favourites', tabBarIcon: ({ focused }) => (
          <TabsBarIcon focused={focused} title='Favourites' icon={Icons.FavouritesIcon} />
        )
      }} />

      <Tabs.Screen name='Profile' options={{
        headerShown: false, title: 'Profile', tabBarIcon: ({ focused }) => (
          <TabsBarIcon focused={focused} title='Profile' icon={Icons.ProfileIcon} />
        )
      }} />
    </Tabs>
  );
};

export default TabsLayout;