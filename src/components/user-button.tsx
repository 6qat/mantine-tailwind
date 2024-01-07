import { UnstyledButton, Group, Avatar, Text, rem } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import { cn } from '@/lib/utils';

export function UserButton() {
  return (
    <UnstyledButton
      className={cn(
        'hover:bg-[var(--mantine-color-gray-0)] dark:hover:bg-[var(--mantine-color-dark-8)]',
        'text-[var(--mantine-color-black)] dark:text-[var(--mantine-color-dark-0)]',
        'block w-full p-[var(--mantine-spacing-md)]'
      )}
    >
      <Group>
        <Avatar
          src='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png'
          radius='xl'
        />

        <div style={{ flex: 1 }}>
          <Text size='sm' fw={500}>
            Harriette Spoonlicker
          </Text>

          <Text c='dimmed' size='xs'>
            hspoonlicker@outlook.com
          </Text>
        </div>

        <IconChevronRight style={{ width: rem(14), height: rem(14) }} stroke={1.5} />
      </Group>
    </UnstyledButton>
  );
}
