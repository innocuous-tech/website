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
  outline: '2px solid',
  outlineColor: theme.colors.transparent,
  border: '2px solid',
  borderColor: theme.colors.cyan1,
  br: '$smol',
  backgroundColor: theme.colors.cyan11,
  color: theme.colors.cyan1,
  transition: '$basic',

  '&:hover': {
    cursor: 'pointer',
    backgroundColor: theme.colors.cyan10,
    transition: theme.transitions.basic,
  },

  '&:focus': {
    outlineColor: theme.colors.cyan11,
    transition: theme.transitions.basic,
  },

  '&:active': {
    backgroundColor: theme.colors.cyan9,
    outlineColor: theme.colors.cyan9,
  },
});

export const Button = forwardRef<HTMLButtonElement, ComponentProps<typeof StyledButton>>(
  ({ children, ...rest }, ref) => {
    return (
      <StyledButton {...rest} ref={ref}>
        <Text>{children}</Text>
      </StyledButton>
    );
  },
);

Button.displayName = 'Button';

export interface ButtonProps extends ComponentProps<typeof Button> {}
