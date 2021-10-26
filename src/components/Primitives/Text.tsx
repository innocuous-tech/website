import { ComponentProps } from 'react';
import { createStyleObject, FontMetrics } from '@capsizecss/core';
import { css, styled, theme } from '~/stitches.config';

const montserratFontMetrics: FontMetrics = {
  capHeight: 700,
  ascent: 968,
  descent: -251,
  lineGap: 0,
  unitsPerEm: 1000,
};

const generateTextStyles = (fontSize: number, lineGap: number) => {
  const styleObject = createStyleObject({
    fontMetrics: montserratFontMetrics,
    fontSize,
    lineGap,
  });

  return {
    fontSize: styleObject.fontSize,
    lineHeight: styleObject.lineHeight,
    '&::before': styleObject['::before'],
    '&::after': styleObject['::after'],
  };
};

export const Text = styled('span', {
  m: 0,
  boxSizing: 'border-box',
  fontFamily: theme.fonts.montserrat,
  color: theme.colors.slate12,

  variants: {
    size: {
      '14': {
        ...generateTextStyles(14, 14),
        letterSpacing: '2px',
        fontWeight: theme.fontWeights.regular,
      },
      '16': {
        ...generateTextStyles(16, 14),
        letterSpacing: '1px',
        fontWeight: theme.fontWeights.regular,
      },
      '18': {
        ...generateTextStyles(18, 16),
        fontWeight: theme.fontWeights.regular,
      },
      '24': {
        ...generateTextStyles(24, 18),
        fontWeight: theme.fontWeights.regular,
      },
      '32': {
        ...generateTextStyles(32, 24),
        fontWeight: theme.fontWeights.semiBold,
      },
      '48': {
        ...generateTextStyles(48, 32),
        letterSpacing: '-1px',
        fontWeight: theme.fontWeights.semiBold,
      },
      '72': {
        ...generateTextStyles(72, 48),
        letterSpacing: '-2px',
        fontWeight: theme.fontWeights.bold,
      },
    },
  },
});

export type TextProps = ComponentProps<typeof Text>;
