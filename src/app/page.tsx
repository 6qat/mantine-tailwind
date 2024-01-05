'use client';

import { AppShell, Button, ScrollArea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export default function CollapseDesktop() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      padding='md'
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      transitionDuration={200}
      transitionTimingFunction='ease'
    >
      <AppShell.Header>Header</AppShell.Header>
      <AppShell.Navbar>
        <AppShell.Section>Navbar header</AppShell.Section>
        <AppShell.Section grow component={ScrollArea}>
          Navbar main section, it will
        </AppShell.Section>
        <AppShell.Section>Navbar footer – always at the bottom</AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main>
        <Button onClick={toggleDesktop} visibleFrom='sm'>
          Toggle navbar
        </Button>
        <Button onClick={toggleMobile} hiddenFrom='sm'>
          Toggle navbar
        </Button>
      </AppShell.Main>
    </AppShell>
  );
}
