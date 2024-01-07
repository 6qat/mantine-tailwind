import React, { useState } from 'react';
import { Box, Collapse, Group, rem, Text, ThemeIcon, UnstyledButton } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import { cn } from '@/lib/utils';

interface LinksGroupProps {
  icon: React.FC<any>;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
}

export function LinksGroup({ icon: Icon, label, initiallyOpened, links }: LinksGroupProps) {
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);

  const items = (hasLinks ? links : []).map((link) => (
    <Text
      component='a'
      className={cn(
        'hover:bg-[var(--mantine-color-gray-0)] dark:hover:bg-[var(--mantine-color-dark-7)]',
        'hover:text-[var(--mantine-color-black)] hover:dark:text-[var(--mantine-color-dark-0)]',
        'text-[var(--mantine-color-gray-7)] dark:text-[var(--mantine-color-dark-0)]',
        'border-0 border-l border-solid border-[var(--mantine-color-gray-3)] dark:border-[var(--mantine-color-dark-4)]',
        'font-[var(--mantine-font-size-sm)]',
        'block font-medium no-underline',
        'ml-[var(--mantine-spacing-xl)] px-[var(--mantine-spacing-md)] py-[var(--mantine-spacing-xs)]'
      )}
      href={link.link}
      key={link.label}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </Text>
  ));

  return (
    <>
      <UnstyledButton
        onClick={() => setOpened((o) => !o)}
        className={cn(
          'hover:bg-[var(--mantine-color-gray-0)] dark:hover:bg-[var(--mantine-color-dark-7)]',
          'hover:text-[var(--mantine-color-black)] hover:dark:text-[var(--mantine-color-dark-0)]',
          'font-[var(--mantine-font-size-sm)]',
          'text-[var(--mantine-color-text)]',
          'px-[var(--mantine-spacing-md)] py-[var(--mantine-spacing-xs)]',
          'block w-full font-medium'
        )}
      >
        <Group justify='space-between' gap={0}>
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <ThemeIcon variant='light' size={30}>
              <Icon style={{ width: rem(18), height: rem(18) }} />
            </ThemeIcon>
            <Box ml='md'>{label}</Box>
          </Box>
          {hasLinks && (
            <IconChevronRight
              className={cn('transition-transform duration-200 ease-in-out')}
              stroke={1.5}
              style={{
                width: rem(16),
                height: rem(16),
                transform: opened ? 'rotate(-90deg)' : 'none',
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}

// const mockdata = {
//   label: 'Releases',
//   icon: IconCalendarStats,
//   links: [
//     { label: 'Upcoming releases', link: '/' },
//     { label: 'Previous releases', link: '/' },
//     { label: 'Releases schedule', link: '/' },
//   ],
// };
//
// export function NavbarLinksGroup() {
//   return (
//     <Box mih={220} p='md'>
//       <LinksGroup {...mockdata} />
//     </Box>
//   );
// }
