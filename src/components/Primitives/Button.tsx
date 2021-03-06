import { ComponentProps, forwardRef } from 'react';
import { Text } from '~/components/Primitives/Text';
import { styled, theme } from '~/stitches.config';

const StyledButton = styled('button', {
  m: 0,
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  appearance: 'none',
  px: '$16',
  py: '$12',
  outline: '1px solid',
  outlineColor: theme.colors.transparent,
  border: '2px solid',
  borderColor: theme.colors.cyan7,
  br: '$smol',
  backgroundColor: theme.colors.cyan3,
  color: theme.colors.cyan11,
  transition: '$basic',

  '&:hover, &:focus': {
    cursor: 'pointer',
    borderColor: theme.colors.cyan8,
    transition: theme.transitions.basic,
  },

  '&:focus': {
    outlineColor: theme.colors.cyan8,
    transition: theme.transitions.basic,
  },

  '&:active': {
    borderColor: theme.colors.cyan8,
    outlineColor: theme.colors.cyan8,
  },
});

export const Button = forwardRef<HTMLButtonElement, ComponentProps<typeof StyledButton>>(
  ({ children, ...rest }, ref) => {
    return (
      <StyledButton {...rest} ref={ref}>
        <Text css={{ fontWeight: '$semiBold' }}>{children}</Text>
      </StyledButton>
    );
  },
);

Button.displayName = 'Button';

export interface ButtonProps extends ComponentProps<typeof StyledButton> {}
