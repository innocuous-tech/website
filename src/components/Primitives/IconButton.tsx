import { ComponentProps, forwardRef } from 'react';
import { Button } from '~/components/Primitives/Button';
import { ScreenReaderOnly } from '~/components/Primitives/ScreenReaderOnly';

interface IconButtonProps {
  assistiveText: string;
}

export const IconButton = forwardRef<
  HTMLButtonElement,
  ComponentProps<typeof Button> & IconButtonProps
>(({ assistiveText, children, css, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      {...props}
      css={{
        backgroundColor: '$cyan1',
        border: '1px solid',
        borderColor: '$transparent',
        borderRadius: '$smol',
        color: '$cyan7',
        display: 'flex',
        alignItems: 'center',
        px: '$8',
        py: '0',
        w: 60,
        h: 60,
        '&:focus, &:hover': { backgroundColor: '$cyan1', color: '$cyan8 ' },
        '& svg, & path': {
          color: 'CurrentColor',
        },
        ...css,
      }}
    >
      <ScreenReaderOnly>{assistiveText}</ScreenReaderOnly>

      <div aria-hidden>{children}</div>
    </Button>
  );
});

IconButton.displayName = 'IconButton';
