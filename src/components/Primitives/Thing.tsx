import { ComponentProps } from 'react';
import { styled, theme } from '~/stitches.config';

export const Base = styled('div', {
  m: 0,
  boxSizing: 'border-box',
  fontFamily: theme.fonts.montserrat,
  fontWeight: theme.fontWeights.regular,
});

export interface BaseProps extends ComponentProps<typeof Base> {}
