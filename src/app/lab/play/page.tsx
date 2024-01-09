'use client';

import MyIcons from '@/app/lab/play/myIcons';
import { Button, Divider, useMantineColorScheme, Text } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import MyCenter from '@/app/lab/play/my-center';
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  base: {
    ':hover': {
      backgroundColor: 'rebeccapurple',
    },
  },
});

const gradient =
  'linear-gradient(45deg, var(--mantine-color-pink-filled) 0%, var(--mantine-color-orange-filled) 50%, var(--mantine-color-yellow-filled) 100%)';

const textStyles = stylex.create({
  root: {
    backgroundImage: gradient,
    marginTop: 'calc(calc(var(--text-lh)-var(--text-fz))/2)',
  },
});

export default function PlayPage() {
  const { setColorScheme, clearColorScheme, colorScheme } = useMantineColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  let toggleColorScheme = () => {
    if (colorScheme === 'dark') {
      clearColorScheme();
    } else {
      setColorScheme('dark');
    }
  };

  return (
    <>
      <Button {...stylex.props(styles.base)} onClick={toggleColorScheme}>
        Color Scheme: {mounted ? colorScheme : ''}{' '}
      </Button>
      <Divider />
      <Text
        lightHidden
        size='xl'
        fw={900}
        classNames={{
          root: { ...stylex.props(textStyles.root) }.className,
        }}
      >
        Gradient Text
      </Text>
      <Text>{JSON.stringify({ ...stylex.props(textStyles.root) })}</Text>
      <Divider />
      <MyCenter />
      <Divider />
      <MyIcons />
    </>
  );
}
