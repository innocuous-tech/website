import Head from 'next/head';
import { styled } from '~/stitches.config';
import { Element } from '~/components/Primitives/Element';
import { Text } from '~/components/Primitives/Text';
import { Clamp } from '@christiankaindl/lyts';
import { NavigationBar } from '~/components/NavigationBar';
import { Button } from '~/components/Primitives/Button';

const Footer = styled('footer', {
  bottom: 0,
  position: 'fixed',
  py: '$32',
  textAlign: 'center',
  width: '100%',
});

const Underlined = styled('span', { textDecoration: 'underline' });

export default function Home() {
  const today = new Date();
  const currentYear = today.getFullYear();
  const copyRightStartYear = 2021;

  const copyrightText = currentYear === copyRightStartYear ? `© 2021` : `© 2021-${currentYear}`;

  return (
    <>
      <Head>
        <title>Innocuous Tech</title>
        <meta
          name="description"
          content="Innocuous is digital agency focused on sustainable and ethical software development and design. We specialize in web application design and development using React."
        />
      </Head>

      <NavigationBar />

      <Clamp
        clamp="min(1000px, 90vw)"
        xAlign="center"
        yAlign="center"
        style={{ marginTop: '30vh' }}
      >
        <Element as="main" css={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          <Text
            as="h1"
            size={{ '@aboveLarge': '48', '@belowLarge': '32' }}
            css={{
              fontWeight: '$bold',
              textAlign: 'center',
              '@belowLarge': {
                textAlign: 'left',
              },
            }}
          >
            We&apos;re a{' '}
            {/**
             * TODO: Add Radix Hovercard
             * Yes, we're serious. We have a detailed commitment to being carbon neutral and we only work with clients
             * who are committed to being accessible.
             */}
            <Underlined>harmless</Underlined>, digital agency.
          </Text>

          <Element css={{ maxW: '50ch', mx: 'auto' }}>
            <Text as="p" css={{ mb: '$32' }}>
              Let us help you make your website, digitally scale your business, automate processes,
              or resolve technical debt.
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
