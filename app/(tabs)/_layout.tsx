import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { Provider as ZenStackHooksProvider } from "../../src/lib/db/hooks"

export default function TabLayout() {
  const colorScheme = useColorScheme();
    const queryClient = new QueryClient()

  return (
      <QueryClientProvider client={queryClient}>
          <ZenStackHooksProvider value={{ endpoint: 'http://localhost:3000/api/z' }}>
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
              </ZenStackHooksProvider>
      </QueryClientProvider>
  );
}
