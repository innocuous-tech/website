import { ComponentProps } from 'react';
import { styled } from '~/stitches.config';

export const Box = styled('div', {
  m: 0,
  boxSizing: 'border-box',
  fontFamily: '$montserrat',
  fontWeight: '$regular',
});

export interface BoxProps extends ComponentProps<typeof Box> {}
