import { Row } from '@christiankaindl/lyts';
import Link from 'next/link';
import Image from 'next/image';
// import * as Dialog from '@radix-ui/react-dialog';
import { styled, darkTheme } from '~/stitches.config';
// import { Button } from '~/components/Primitives/Button';
import { Element } from '~/components/Primitives/Element';
import { ScreenReaderOnly } from '~/components/Primitives/ScreenReaderOnly';
import { Text } from '~/components/Primitives/Text';
// import { IconButton } from '~/components/Primitives/IconButton';

const LogoLink = () => (
  <Link href="/">
    <a>
      <ScreenReaderOnly>Go Home</ScreenReaderOnly>
      <Row>
        <Element
          css={{
            position: 'relative',
            w: 100,
            h: 100,
            '@belowMedium': { w: 80, h: 80 },
          }}
        >
          <Image src="/logo.png" alt="" priority layout="fill" objectFit="cover" />
        </Element>

        <Text
          as="span"
          css={{ color: '$brandDarkest', [`.${darkTheme} &`]: { color: '$brandLightest' } }}
          size={{ '@aboveMedium': '24', '@belowMedium': '18' }}
        >
          Innocuous Tech
        </Text>
      </Row>
    </a>
  </Link>
);

const NavBar = styled('nav', {
  color: '$cyan11',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  pl: '$12',
  pr: '$24',

  '& a': {
    textDecoration: 'none',
    borderBottom: '2px solid',
    borderColor: '$transparent',
    py: '$4',
    outline: 'none',

    '&:hover': {
      borderColor: '$cyan8',
    },

    '&:focus': {
      borderColor: '$cyan9',
    },
  },

  '& svg': {
    display: 'block',
  },

  '& svg path': {
    fill: 'currentColor',
  },

  '@belowMedium': {
    position: 'fixed',
    w: 'calc(100% - 24px)',
    top: 0,
    backgroundColor: '$cyan1',
    zIndex: 1,
  },
});

// const navLinks = (
//   <>
//     <Link href="/contact" passHref>
//       <Text as="a">Contact</Text>
//     </Link>

//     <Link href="/about" passHref>
//       <Text as="a">About</Text>
//     </Link>

//     <Link href="/blog" passHref>
//       <Text as="a">Blog</Text>
//     </Link>
//   </>
// );

// const Overlay = styled(Dialog.Overlay, {
//   backgroundColor: '$cyan1',
//   position: 'fixed',
//   inset: 0,
//   opacity: 0,

//   '&[data-state="open"]': {
//     opacity: 0.9,
//   },
//   '@allowAnimation': {
//     transition: '$basic',
//   },
// });

// const Content = styled(Dialog.Content, {
//   position: 'fixed',
//   top: 0,
//   left: 0,
//   h: '100vh',
//   transform: 'translateX(-100%)',

//   '&[data-state="open"]': {
//     transform: 'translateX(0%)',
//   },
//   '@allowAnimation': {
//     transition: '$basic',
//   },
// });

export const NavigationBar = () => {
  return (
    <NavBar>
      <LogoLink />

      {/* Mobile Nav */}
      {/* <Dialog.Root defaultOpen={true}>
        <Dialog.Trigger asChild>
          <IconButton
            assistiveText="Open website navigation"
            css={{ '@aboveMedium': { display: 'none' } }}
          >
            <Element as="svg" height="30" width="30" viewBox="0 0 15 15">
              <path
                d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                fill="currentColor"
              />
            </Element>
          </IconButton>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Overlay />
          <Content>
            <Dialog.Title>
              <ScreenReaderOnly>Website Navigation</ScreenReaderOnly>
            </Dialog.Title>

            <Dialog.Close asChild={true}>
              <IconButton assistiveText="Dismiss navigation">
                <Element as="svg" width="30" height="30" viewBox="0 0 15 15">
                  <path
                    d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
                    fill="currentColor"
                  />
                </Element>
              </IconButton>
            </Dialog.Close>

            <Row xAlign="flex-start" yAlign="flex-start" orientation="column" gap={2} asChild>
              <Element
                as="div"
                css={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  w: '40vw',
                  h: '100%',
                  px: '$16',
                  py: '$24',

                  backgroundColor: '$cyan2',
                  borderRight: '1px solid',
                  borderColor: '$cyan7',

                  '& a': {
                    color: '$cyan11',
                  },

                  '@aboveMedium': { display: 'none !important' },
                }}
              >
                {navLinks}
              </Element>
            </Row>
          </Content>
        </Dialog.Portal>
      </Dialog.Root> */}

      {/* Desktop Nav */}
      {/* <Row xAlign="space-between" asChild>
        <Element as="div" css={{ '@belowMedium': { display: 'none !important' } }}>
          {navLinks}
        </Element>
      </Row> */}
    </NavBar>
  );
};
