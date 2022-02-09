import { Element } from '~/components/Primitives/Element';
import { Button } from '~/components/Primitives/Button';

export function KitchenSink() {
  return (
    <Element
      css={{
        display: 'flex',
        flexDirection: 'column',
        gap: '$16',
        p: '$16',
        width: '200px',
        mx: 'auto',
      }}
    >
      <Button>Primary</Button>

      <Button>Secondary</Button>
    </Element>
  );
}
