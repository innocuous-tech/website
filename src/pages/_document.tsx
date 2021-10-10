import Document, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '~/stitches.config';

/**
 * @see https://nextjs.org/docs/advanced-features/custom-document
 */
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,900;1,400;1,600;1,900&display=swap"
            rel="stylesheet"
          />
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
