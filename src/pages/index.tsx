import Head from 'next/head';
import { styled } from '~/stitches.config';
import { Text } from '~/components/Primitives/Text';
import { Box } from '~/components/Primitives/Box';

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

      <Container size={{ '@initial': '1', '@aboveMedium': '2', '@aboveLarge': 3 }}>
        <Text as="h1" variant="displayXxxl" css={{ my: '$12' }}>
          Innocuous Tech
        </Text>
      </Container>
    </Box>
  );
}
