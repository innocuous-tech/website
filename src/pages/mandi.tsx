import Head from 'next/head';
import { Text } from '~/components/Primitives/Text';
import { Element } from '~/components/Primitives/Element';
import { useState } from 'react';
import { Button } from '~/components/Primitives/Button';

export default function Mandi() {
  const [isVisible, setIsVisible] = useState(false);
  const makeMessageVisible = () => setIsVisible(true);

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>

      <Element as="div" css={{ display: 'grid', placeItems: 'center', h: '100vh' }}>
        {!isVisible && <Button onClick={makeMessageVisible}>Does Kyle like/love me?</Button>}
        {isVisible && <Text as="h6">Yes, Mandi... Kyle likes you and Kyle loves you.</Text>}
      </Element>
    </>
  );
}
