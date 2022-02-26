import { ComponentProps } from 'react';
import { styled } from '~/stitches.config';

export const ScreenReaderOnly = styled('span', {
  border: 0,
  clip: 'rect(1px, 1px, 1px, 1px)',
  '-webkit-clip-path': 'inset(50%)',
  clipPath: 'inset(50%)',
  position: 'absolute',
  m: '-1px',
  p: 0,
  h: '1px',
  w: '1px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
});

export interface ScreenReaderOnlyProps extends ComponentProps<typeof ScreenReaderOnly> {}
