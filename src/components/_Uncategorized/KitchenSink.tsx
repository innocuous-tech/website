import { Base } from '~/components/Primitives/Thing';
import { Button } from '~/components/Primitives/Button';

export function KitchenSink() {
  return (
    <Base
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
    </Base>
  );
}
