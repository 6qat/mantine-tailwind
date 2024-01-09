import { Center, Box } from '@mantine/core';

export default function MyCenter() {
  return (
    <Center maw={400} h={100} bg='var(--mantine-color-gray-light)'>
      <Box color='var(--mantine-color-gray-light-color)'>
        All elements inside Center are centered
      </Box>
    </Center>
  );
}
