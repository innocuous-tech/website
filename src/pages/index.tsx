import Head from 'next/head';
import { styled } from '~/stitches.config';
import { Box } from '~/components/Primitives/Box';
import { Text } from '~/components/Primitives/Text';

// const Main = styled('main', {
//   textAlign: 'center',
// });

const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  // height: 'max(200px, 50vh)',
  height: '100vh',
  backgroundColor: '$brandDarkest',
});

// const Footer = styled('footer', {
//   textAlign: 'center',
// });

export default function Home() {
  // const today = new Date();
  // const currentYear = today.getFullYear();
  // const copyRightStartYear = 2021;

  // const copyrightText = currentYear === copyRightStartYear ? `© 2021` : `© 2021-${currentYear}`;

  return (
    <>
      <Head>
        <title>Innocuous Tech</title>
      </Head>

      <Header>
        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
            borderBottomColor: '$cyan3',
            borderBottomWidth: '2px',
            borderBottomStyle: 'solid',

            '@belowMedium': {
              flexWrap: 'wrap',
              justifyContent: 'center',
              pb: '$24',
            },
          }}
        >
          <Box as="img" src="/logo.png" alt="" css={{ height: '200px', m: '$12' }} />

          <Box>
            <Text
              as="h1"
              size={{ '@aboveMedium': '72', '@belowMedium': '48', '@belowSmall': '32' }}
              css={{ color: '$cyan3', mb: '$24' }}
            >
              Innocuous Tech
            </Text>

            <Text
              as="p"
              size={{ '@aboveMedium': '32', '@belowMedium': '24', '@belowSmall': '18' }}
              css={{ color: '$brandLightest' }}
            >
              We write harmless code.
            </Text>
          </Box>
        </Box>

        <Text
          as="p"
          size={{ '@aboveMedium': 24, '@belowMedium': 18, '@belowSmall': 16 }}
          css={{
            color: '$cyan3',
            pt: '$24',
            textAlign: 'center',

            '@aboveSmall': {
              pt: '$48',
            },
          }}
        >
          Obviously, this site is a work in progress...
          <br />
          Thanks for your patience!
        </Text>
      </Header>

      {/* <Main>
        <Text as="p" size="24">
          Look at all them clients:
        </Text>

        <Box as="ul" css={{ listStyle: 'none' }}>
          <Text as="li" size="18">
            Nobody
          </Text>
          <Text as="li" size="18">
            Nobody
          </Text>
          <Text as="li" size="18">
            Nobody
          </Text>
        </Box>
      </Main>

      <Footer>Innocuous Tech {copyrightText}</Footer> */}
    </>
  );
}
