import Head from 'next/head';
import { styled } from '~/stitches.config';
import { Element } from '~/components/Primitives/Element';
import { Text } from '~/components/Primitives/Text';
import { Clamp } from '@christiankaindl/lyts';
import { NavigationBar } from '~/components/NavigationBar';
import { Button } from '~/components/Primitives/Button';

// const BigLogoSection = styled('div', {
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   flexDirection: 'column',
//   height: '100vh',
// });

const Footer = styled('footer', {
  py: '$32',
  textAlign: 'center',
});

export default function Home() {
  const today = new Date();
  const currentYear = today.getFullYear();
  const copyRightStartYear = 2021;

  const copyrightText = currentYear === copyRightStartYear ? `© 2021` : `© 2021-${currentYear}`;

  return (
    <>
      <Head>
        <title>Innocuous Tech</title>
      </Head>

      <NavigationBar />

      <Element as="main">
        <Clamp clamp="min(1000px, 90vw)" xAlign="center" yAlign="center" asChild>
          <Element css={{ height: '80vh' }}>
            <Element css={{ '& > *': { mb: '$32' } }}>
              <Text as="h1" css={{ textAlign: 'center', '@belowMedium': { textAlign: 'left' } }}>
                We&apos;re a{' '}
                {/**
                 * TODO: Add Radix Hovercard
                 * Yes, we're serious. We have a detailed commitment to being carbon neutral and we only work with clients
                 * who are committed to being accessible.
                 */}
                <Text as="span" css={{ display: 'inline', textDecoration: 'underline' }}>
                  harmless
                </Text>
                , digital agency.
              </Text>

              <Text as="p" css={{ maxW: '50ch' }}>
                Let us help you make your website, digitally scale your business, automate
                processes, or resolve technical debt.
              </Text>

              <Button
                // @ts-expect-error - "as" prop doesn't surface properly
                as="a"
                href="mailto:inbox@kylemh.com?subject=Inquiry for Innoucous Tech&body=I'm interested in working with Innocuous Tech in order to..."
                css={{ textDecoration: 'none' }}
              >
                Contact Us
              </Button>
            </Element>
          </Element>
        </Clamp>
      </Element>

      {/* <BigLogoSection>
        <Element
          css={{
            display: 'flex',
            alignItems: 'center',

            '@belowMedium': {
              flexWrap: 'wrap',
              justifyContent: 'center',
            },
          }}
        >
          <Element as="img" src="/logo.png" alt="" css={{ height: '200px', m: '$12' }} />
        </Element>
      </BigLogoSection> */}

      <Footer>
        <Text>Innocuous Tech {copyrightText}</Text>
      </Footer>
    </>
  );
}
