import React from 'react';
import { ThemeIcon } from '@mantine/core';
import { IconPhoto } from '@tabler/icons-react';

const MyIcons = () => {
  return (
    <>
      <ThemeIcon size='xl'>
        <IconPhoto style={{ width: '100%', height: '100%' }} />
      </ThemeIcon>
      <hr />
      <ThemeIcon
        className='text-mantine-color-default-color hover:text-mantine-color-default-hover'
        // classNames={
        //   {
        //     // root: 'text-[var(--mantine-color-text)] hover:text-[var(--mantine-color-default-hover)]',
        //   }
        // }
        variant='transparent'
        size='xl'
        // style={{ color: 'var(--mantine-color-text)' }}
      >
        <IconPhoto style={{ width: '100%', height: '100%' }} />
      </ThemeIcon>
    </>
  );
};

export default MyIcons;
