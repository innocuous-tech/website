import Head from 'next/head';
import { Clamp } from '@christiankaindl/lyts';

export default function Mandi() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>

      <Clamp
        clamp="min(1000px, 90vw)"
        xAlign="center"
        yAlign="center"
        style={{ marginTop: '30vh' }}
      >
        Yes, Mandi... Kyle likes you and Kyle loves you.
      </Clamp>
    </>
  );
}
