import Head from 'next/head';
import { styled } from '~/stitches.config';
import { Box } from '~/components/Primitives/Box';
import { Text } from '~/components/Primitives/Text';

const Container = styled('div', {
  mx: 'auto',
  px: '$16',

  variants: {
    size: {
      1: {
        maxW: '300px',
      },
      2: {
        maxW: '585px',
      },
      3: {
        maxW: '865px',
      },
    },
  },
});

export default function Home() {
  return (
    <Box css={{ py: '$16' }}>
      <Head>
        <title>Innocuous Tech</title>
      </Head>

      <Container
        css={{ textAlign: 'center' }}
        size={{ '@initial': '1', '@aboveMedium': '2', '@aboveLarge': 3 }}
      >
        <Text
          as="h1"
          size={{ '@aboveLarge': '72', '@belowLarge': '48' }}
          css={{
            fontWeight: '$bold',
            '@aboveLarge': { my: '$24' },
            '@belowLarge': { my: '$48' },
          }}
        >
          Innocuous Tech
        </Text>

        <Text as="p" size="24">
          This website is under construction.
        </Text>
      </Container>
    </Box>
  );
}
