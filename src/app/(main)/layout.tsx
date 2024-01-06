import React from 'react';
import MainNavbar from '@/components/main-navbar';
import { Flex, Group, Stack } from '@mantine/core';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack h='100vh'>
      <Group h='100%'>
        <MainNavbar className='w-70 h-full' />
        {children}
      </Group>
    </Stack>
  );
};

export default MainLayout;
