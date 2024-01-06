'use client';

import { useState } from 'react';
import { UnstyledButton, Tooltip, Title, rem, useMantineColorScheme, Button } from '@mantine/core';
import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconAt,
} from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './page.module.scss';
import { cn } from '@/lib/utils';

const mainLinksMockdata = [
  {
    icon: IconHome2,
    label: 'Home',
  },
  {
    icon: IconGauge,
    label: 'Dashboard',
  },
  {
    icon: IconDeviceDesktopAnalytics,
    label: 'Analytics',
  },
  {
    icon: IconCalendarStats,
    label: 'Releases',
  },
  {
    icon: IconUser,
    label: 'Account',
  },
  {
    icon: IconFingerprint,
    label: 'Security',
  },
  {
    icon: IconSettings,
    label: 'Settings',
  },
];

const linksMockdata = [
  'Security',
  'Settings',
  'Dashboard',
  'Releases',
  'Account',
  'Orders',
  'Clients',
  'Databases',
  'Pull Requests',
  'Open Issues',
  'Wiki pages',
];

export default function DoubleNavbar() {
  const [active, setActive] = useState('Releases');
  const [activeLink, setActiveLink] = useState('Settings');

  const { setColorScheme, clearColorScheme, colorScheme } = useMantineColorScheme();
  const toggleColorScheme = () => {
    if (colorScheme === 'dark') {
      setColorScheme('light');
    } else {
      setColorScheme('dark');
    }
  };

  const mainLinks = mainLinksMockdata.map((link) => (
    <Tooltip
      label={link.label}
      position='right'
      withArrow
      transitionProps={{ duration: 0 }}
      key={link.label}
    >
      <UnstyledButton
        onClick={() => setActive(link.label)}
        className={classes.mainLink}
        data-active={link.label === active || undefined}
      >
        <link.icon
          style={{
            width: rem(22),
            height: rem(22),
          }}
          stroke={1.5}
        />
      </UnstyledButton>
    </Tooltip>
  ));

  const links = linksMockdata.map((link) => (
    <a
      className={classes.link}
      data-active={activeLink === link || undefined}
      href='#'
      onClick={(event) => {
        event.preventDefault();
        setActiveLink(link);
      }}
      key={link}
    >
      {link}
    </a>
  ));

  const gradient =
    'linear-gradient(45deg, var(--mantine-color-pink-filled) 0%, var(--mantine-color-orange-filled) 50%, var(--mantine-color-yellow-filled) 100%)';

  return (
    <nav className={classes.navbar}>
      <div className={classes.wrapper}>
        <div className={classes.aside}>
          <div className={classes.logo}>
            <MantineLogo type='mark' size={30} />
          </div>
          {mainLinks}
        </div>
        <div className={classes.main}>
          <Title
            order={4}
            className={cn(
              // classes.title,
              'mb-8 h-[60px] border-b border-[var(--mantine-color-gray-3)] bg-[var(--mantine-color-body)] p-4 pt-[18px] font-sans dark:border-b-[var(--mantine-color-red-8)]'
            )}
          >
            {/*<Title order={4} className={classes.title}>*/}
            {active}
          </Title>
          <Button
            // disabled
            // data-disabled
            // loading
            // loaderProps={{ type: 'bars' }}
            variant='gradient'
            gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
            size='compact-sm'
            onClick={toggleColorScheme}
          >
            Color Mode
          </Button>
          <Button
            variant='outline'
            size='compact-sm'
            leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
            classNames={{
              root: 'border-2 dark:border-yellow-500 bg-[var(--mantine-color-red-2)] dark:bg-[var(--mantine-color-green-2)]',
              section: '',
              loader: '',
              inner: '',
              label: '',
            }}
            styles={
              {
                // root: { backgroundColor: 'var(--mantine-color-red-1)' },
                // root: { backgroundImage: gradient },
              }
            }
          >
            Your email
          </Button>
          {links}
        </div>
      </div>
    </nav>
  );
}
